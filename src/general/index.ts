import { Base } from "../base"
import type {
	ConnectionSettings,
	ServerInformation,
	VersionInformation,
} from "./interfaces"

export class General extends Base {
	/**
	 * Retrieve information regarding server and API version. Returns a JSON object with three keys, api containing the API version, server containing the server version, text containing the server version including the prefix OctoPrint (to determine that this is indeed a genuine OctoPrint instance).
	 * @returns
	 */
	public version() {
		const url = `${this.baseURL}/api/version`
		return this.get<VersionInformation>(url)
	}

	/**
	 * Retrieve information regarding server status. Returns a JSON object with two keys, version containing the server version and safemode containing one of settings, incomplete_startup or flag to indicate the reason the server is running in safe mode, or the boolean value of false if it’s not running in safe mode.
	 * @returns
	 */
	public server() {
		const url = `${this.baseURL}/api/server`
		return this.get<ServerInformation>(url)
	}

	/**
	 * Retrieve the current connection settings, including information regarding the available baudrates and serial ports and the current connection state.
	 * @returns
	 */
	public connection() {
		const url = `${this.baseURL}/api/connection`
		return this.get<ConnectionSettings>(url)
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
	public connectPrinter(
		port: string,
		baudrate: number,
		printerProfile: string,
		save: boolean = false,
		autoconnect: boolean = false
	) {
		const url = `${this.baseURL}/api/connection`
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
	public disconnectPrinter() {
		const url = `${this.baseURL}/api/connection`
		const args = {
			command: "disconnect",
		}
		return this.post<undefined>(url, args)
	}
}
