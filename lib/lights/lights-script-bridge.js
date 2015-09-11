import { exec } from 'child_process';

// Bridge for running lights scripts from my other repo

const LIGHTS_SCRIPTS_LOCATION = `${__dirname}/../../../lights/`;

const sys = function (command) {
	exec(command, function (error, stdout, stderr) {
		if (stdout) { console.log('stdout: ' + stdout); }
		if (stderr) { console.log('stderr: ' + stderr); }
		if (error !== null) {
			console.error('exec error: ' + error
				+ "(attempted command -->"+ command + "<--)");
		}
	});
}

const lightsScript = function (command) {
	sys(LIGHTS_SCRIPTS_LOCATION + command)
};

export function onGroupWithSunTemp(groupNumber) {
	lightsScript(`onGroupWithSunTemp ${groupNumber}`);
}