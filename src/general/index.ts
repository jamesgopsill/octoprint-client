import { Base } from "../base"
import type {
	ConnectionSettings,
	ServerInformation,
	VersionInformation,
} from "./interfaces"

export class General extends Base {
	public version() {
		const url = `${this.baseURL}/api/version`
		return this.get<VersionInformation>(url)
	}

	public system() {
		const url = `${this.baseURL}/api/version`
		return this.get<ServerInformation>(url)
	}

	public connection() {
		const url = `${this.baseURL}/api/connection`
		return this.get<ConnectionSettings>(url)
	}
}
