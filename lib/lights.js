import request from 'request-promise'
import { onGroupWithSunTemp } from './lightsScriptBridge.js'

const HUB_IP = "192.168.2.142";
const API_KEY = "newdeveloper";

const API_URL = `http://${HUB_IP}/api/${API_KEY}`;

export function toggleLights(lightGroupNum = 1) {

	const GROUP_URL = `${API_URL}/groups/${lightGroupNum}`;

	var updateLights = function (payload) {
		return request({
			url: `${GROUP_URL}/action`,
			method: "PUT",
			form: JSON.stringify(payload)
		})
	}

	request({ url: GROUP_URL, transform: JSON.parse })
	.then(({ action: { on: isOn } }) => {
		if (isOn) updateLights({ on: false });
		else onGroupWithSunTemp(lightGroupNum);
	})
}




