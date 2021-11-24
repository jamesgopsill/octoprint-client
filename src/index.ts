import isIp from "is-ip"

import * as general from "./general"


/**
 * OctoPrint Client Class
 * 
 * ```typescript
 * import { OctoPrintClient } from "octoprint-client"
 * 
 * const client = OctoprintClient("localhost", "abcdefg-...")
 * ```
 * 
 * @param ip The IP address for the printer on the network.
 * @param apiKey Your unique key to authorise access to the OctoPrint API.
 */
export class OctoPrintClient {

	public readonly baseURL: string
	public readonly apiKey: string


	constructor(baseURL: string, apiKey: string) {

		this.baseURL = baseURL
		this.apiKey = apiKey

	}

	public getVersionInformation() {
		return general.getVersionInformation(this.baseURL, this.apiKey)
	}

	public getSystemInformation() {
		return general.getSystemInformation(this.baseURL, this.apiKey)
	}
}