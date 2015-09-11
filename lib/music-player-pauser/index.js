import applescript from 'run-applescript';

import { subscribe } from './fs-pubsub.js';

export default class MusicPlayerPauser {
	constructor() {
		this.lastPlayingSource = "itunes";

		subscribe((source) => {
			console.log("[MusicPlayerPauser] Observed new active music player:", source);
			this.lastPlayingSource = source;
		})
	}

	playPause() {
		applescript(`\
			tell app "${this.lastPlayingSource}"\
			to playpause`,
		(err, result) => {
			if (err) console.error("ERRRR", err);
			if (result) console.log("RESULT", result);
		});
	}

}