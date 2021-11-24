import isIp from "is-ip"
import * as general from "./general"

export * as OctoPrintGeneralEndpoints from "./general"

/**
 * OctoPrint client class
 * 
 * ```typescript
 * import { OctoPrintClient } from "octoprint-client"
 * 
 * const client = OctoPrintClient("URL", "APIKEY")
 * ```
 * 
 * @param url The url of the OctoPrint server.
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

	public getConnectionSettings() {
		return general.getConnectionSettings(this.baseURL, this.apiKey)
	}
}