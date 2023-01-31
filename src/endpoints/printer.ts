import type { PrinterStatus } from "../definitions.js"
import type { OctoPrintClient } from "../index.js"

export async function homeAllAxes(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/printer/printhead`
	const args = {
		command: "home",
		axes: ["x", "y", "z"],
	}
	return this.post<undefined>(url, args)
}

export async function jog(
	this: OctoPrintClient,
	x?: number,
	y?: number,
	z?: number,
	absolute?: boolean,
	speed?: number
) {
	const url = `${this.baseUrl}/api/printer/printhead`
	const args: any = {
		command: "jog",
	}
	if (x) args["x"] = x
	if (y) args["y"] = y
	if (z) args["z"] = z
	if (absolute) args["absolute"] = absolute
	if (speed) args["speed"] = speed
	return this.post<unknown>(url, args)
}

export async function status(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/printer`
	return this.get<PrinterStatus>(url)
}
