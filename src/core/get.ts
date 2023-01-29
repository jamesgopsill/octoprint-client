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

	const r = (await fetch(url, config)) as HttpResponse<T>
	if (r.ok) {
		r.data = await r.json()
	} else {
		r.data = null
	}
	return r
}
