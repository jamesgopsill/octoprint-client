import type * as Def from "../definitions.js"
import type { OctoPrintClient } from "../index.js"

export async function home(this: OctoPrintClient, axes: Def.HOME) {
	const url = `${this.baseUrl}/api/printer/printhead`
	const args = {
		command: "home",
		axes: axes,
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
	return this.get<Def.PrinterStatus>(url)
}

export async function feedrate(this: OctoPrintClient, feedrate: number) {
	const url = `${this.baseUrl}/api/printhead`
	const args = {
		command: "home",
		feedrate: feedrate,
	}
	return this.post(url, args)
}
