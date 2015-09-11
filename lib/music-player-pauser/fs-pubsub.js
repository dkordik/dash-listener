import { readFile, writeFile } from 'fs';
import fsevents from 'fsevents';

//One-way process communication via writing to
// and watching contents of the following file:

const TRANSPORT_FILE=`${__dirname}/.transport`;

export function subscribe(handler) {
	const watcher = fsevents(TRANSPORT_FILE);

	watcher.on('change', (path, info) => {
		readFile(path, "utf-8", (err, data) => {
			handler(data);
		});
	});

	watcher.start() 
}

export function publish(data) {
	writeFile(TRANSPORT_FILE, data);
}