import { Base } from "../base"
import { PrinterStatus } from "./interfaces"

export class Printer extends Base {
	status() {
		const url = `${this.baseURL}/api/printer`
		return this.get<PrinterStatus>(url)
	}

	homeAll() {
		const url = `${this.baseURL}/api/printer/printhead`
		const args = {
			command: "home",
			axes: ["x", "y", "z"],
		}
		return this.post<undefined>(url, args)
	}

	jog(x?: number, y?: number, z?: number, absolute?: boolean, speed?: number) {
		const url = `${this.baseURL}/api/printer/printhead`
		const args: any = {
			command: "jog",
		}
		if (x) args["x"] = x
		if (y) args["y"] = y
		if (z) args["z"] = z
		if (absolute) args["absolute"] = absolute
		if (speed) args["speed"] = speed
		return this.post(url, args)
	}

	feedRate(factor: number) {
		const url = `${this.baseURL}/api/printer/printhead`
		const args: any = {
			command: "feedrate",
			factor: factor,
		}
		return this.post<undefined>(url, args)
	}

	/**
	 * Sends any command to the printer via the serial interface. Should be used with some care as some commands can interfere with or even stop a running print job.
	 * @param cmd
	 * @returns
	 */
	printerCommand(cmd: string) {
		const url = `${this.baseURL}/api/printer/command`
		const args: any = {
			command: cmd,
		}
		console.log(args)
		return this.post<undefined>(url, args)
	}

	/**
	 * Sends multiple commands to the printer via the serial interface. Should be used with some care as some commands can interfere with or even stop a running print job.
	 * @param cmd
	 * @returns
	 */
	printerCommands(cmds: string[]) {
		const url = `${this.baseURL}/api/printer/command`
		const args: any = {
			commands: cmds,
		}
		return this.post<undefined>(url, args)
	}
}
