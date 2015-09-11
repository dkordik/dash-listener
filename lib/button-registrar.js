import nodeDashButton from 'node-dash-button';

export default class ButtonRegistrar {
	constructor() {
		console.log("Dash button listener initialized.");
	}

	add(address, logName, handler) {
		var button = nodeDashButton(address);

		button.on("detected", () => {
			console.log(`${logName} pressed.`, new Date());
			handler();
		});

		console.log(`Added ${logName}.`);
	}
}