import type { OctoPrintClient } from "../index.js"
import type * as Def from "../definitions.js"
import type { JobCommands } from "../enums.js"

export async function jobCommand(this: OctoPrintClient, cmd: JobCommands) {
	const url = `${this.baseUrl}/api/job`
	const args = {
		command: cmd,
	}
	return this.post<undefined>(url, args)
}

export async function jobInformation(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/job`
	return this.get<Def.JobInformation>(url)
}
