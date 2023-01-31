import type { OctoPrintClient } from "../index.js"
import type * as Def from "../definitions.js"

export async function version(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/version`
	return this.get<Def.VersionInformation>(url)
}

export async function server(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/server`
	return this.get<Def.ServerInformation>(url)
}

export async function connection(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/connection`
	return this.get<Def.ConnectionSettings>(url)
}

/**
 * Instructs OctoPrint to connect or, if already connected, reconnect to the printer. Additional parameters are:
 * @param port Optional, specific port to connect to. If not set the current portPreference will be used, or if no preference is available auto detection will be attempted.
 * @param baudrate Optional, specific baudrate to connect with. If not set the current baudratePreference will be used, or if no preference is available auto detection will be attempted.
 * @param printerProfile Optional, specific printer profile to use for connection. If not set the current default printer profile will be used.
 * @param save Optional, whether to save the request’s port and baudrate settings as new preferences. Defaults to false if not set.
 * @param autoconnect Optional, whether to automatically connect to the printer on OctoPrint’s startup in the future. If not set no changes will be made to the current configuration.
 * @returns
 */
export async function connectPrinter(
	this: OctoPrintClient,
	port: string,
	baudrate: number,
	printerProfile: string,
	save: boolean = false,
	autoconnect: boolean = false
) {
	const url = `${this.baseUrl}/api/connection`
	const args = {
		command: "connect",
		port: port,
		baudrate: baudrate,
		printerProfile: printerProfile,
		save: save,
		autoconnect: autoconnect,
	}
	return this.post<undefined>(url, args)
}

/**
 * Instructs OctoPrint to disconnect from the printer.
 * @returns
 */
export async function disconnectPrinter(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/connection`
	const args = {
		command: "disconnect",
	}
	return this.post<undefined>(url, args)
}
