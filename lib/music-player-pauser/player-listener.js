//Run as same user that's running music players (non-root)

import nowplaying from 'nowplaying';

import { publish } from './fs-pubsub.js';

if (process.getuid() === 0) {
	console.log("Don't run this as root. You won't be able to talk to"
		+ "the user's Distributed Notifications.");
	process.exit(1);
}

var lastSource = "";

nowplaying.on("playing", ({ source }) => {
	if (lastSource != source) {
		publish( lastSource = source );
	}
});