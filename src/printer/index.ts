import { Base } from "../base"

export class Printer extends Base {
	getStatus() {
		const url = `${this.baseURL}/api/printer`
		return this.get(url)
	}
}
