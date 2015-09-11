import ButtonRegistrar from './lib/button-registrar.js';
var buttonRegistrar = new ButtonRegistrar();

import { toggleLights } from './lib/lights';

buttonRegistrar.add("74:c2:46:0c:4a:c9", "Light switch", () => {
	toggleLights(1);
});

import MusicPlayerPauser from './lib/music-player-pauser';
const musicPlayerPauser = new MusicPlayerPauser();

buttonRegistrar.add("74:75:48:6b:b4:91", "Play button", () => {
	musicPlayerPauser.playPause();
});