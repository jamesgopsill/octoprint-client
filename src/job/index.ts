import { Base, ResponseError } from "../base"
import { JobCommands } from "./enums"
import { fetch } from "cross-fetch"

export class Job extends Base {
	public async issueJobCommand(cmd: JobCommands): Promise<boolean> {
		const url = `${this.baseURL}/api/job`
		const config: RequestInit = {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-Api-Key": this.apiKey,
			},
			body: JSON.stringify({
				command: cmd,
			}),
		}
		return fetch(url, config).then((r) => {
			if (r.ok) {
				return true
			}
			throw new ResponseError(r)
		})
	}
}
