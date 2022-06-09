import { Base } from "../base"
import { JobCommands } from "./enums"

export class Job extends Base {
	public async jobCommand(cmd: JobCommands) {
		const url = `${this.baseURL}/api/job`
		const args = {
			command: cmd,
		}
		return this.post<undefined>(url, args)
	}

	public async jobInformation() {
		const url = `${this.baseURL}/api/job`
		return this.get(url)
	}
}
