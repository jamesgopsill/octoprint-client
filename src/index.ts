import { del } from "./core/delete.js"
import { get } from "./core/get.js"
import { post } from "./core/post.js"
import { homeAllAxes, jog, status } from "./endpoints/printer.js"

export class OctoPrintClient {
	public baseUrl: string = ""
	public apiKey: string = ""

	constructor(url: string, apiKey: string) {
		this.baseUrl = url
		this.apiKey = apiKey
	}

	public ping = () => "pong"
	// Core
	protected get = get
	protected post = post
	protected delete = del

	// Printer
	public status = status
	public homeAllAxes = homeAllAxes
	public jog = jog
}
