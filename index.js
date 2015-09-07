import registerDashButton from 'node-dash-button';
import { toggleLights } from './lib/lights.js';

var lightSwitch = registerDashButton("74:c2:46:0c:4a:c9");

console.log("Listening for Dash button presses...");

lightSwitch.on("detected", () => {
	console.log("Light switch pressed.", new Date());
	toggleLights(1);
});