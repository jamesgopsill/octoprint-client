import type { HttpResponse } from "../definitions.js"
import type { OctoPrintClient } from "../index.js"

export async function get<T>(
	this: OctoPrintClient,
	url: string,
	bodyArgs?: {}
) {
	if (typeof bodyArgs != "undefined") {
		bodyArgs = {}
	}

	const config: RequestInit = {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			"X-Api-Key": this.apiKey,
		},
		body: JSON.stringify(bodyArgs),
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}
