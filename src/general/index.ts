import { Base } from "../base"
import type {
	ConnectionSettings,
	ServerInformation,
	VersionInformation,
} from "./interfaces"

export class General extends Base {
	public getVersionInformation(): Promise<VersionInformation> {
		const url = `${this.baseURL}/api/version`
		return this.get(url)
	}

	/*
	public getSystemInformation() {
		const url = `${this.baseURL}/api/version`
		return this.get<ServerInformation>(url)
	}

	public getConnectionSettings() {
		const url = `${this.baseURL}/api/connection`
		return this.get<ConnectionSettings>(url)
	}
	*/
}
