import { fetch } from "cross-fetch"
import { HttpResponse } from "./interfaces"

/**
 * The base class to build the API client from
 */
export abstract class Base {
	public readonly baseURL: string
	public readonly apiKey: string

	/** Checks if the IP address is a valid format before creating an instance of the client. */
	constructor(baseURL: string, apiKey: string) {
		this.baseURL = baseURL
		this.apiKey = apiKey
	}

	/**
	 * An internal get request function
	 */
	protected async get<T>(url: string, bodyArgs?: {}) {
		if (typeof bodyArgs != "undefined") {
			bodyArgs = {}
		}

		return fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"X-Api-Key": this.apiKey
			},
			body: JSON.stringify(bodyArgs),
		}).then(async (r: HttpResponse<T>) => {
			if (r.ok) {
				r.data = await r.json()
			}
			return r
		})
	}

	protected async post<T>(url: string, bodyArgs?: {}) {
		if (typeof bodyArgs == "undefined") {
			bodyArgs = {}
		}

		return fetch(url, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"X-Api-Key": this.apiKey
			},
			body: JSON.stringify(bodyArgs),
		}).then(async (r: HttpResponse<T>) => {
			if (r.ok && r.status != 204) {
				r.data = await r.json()
			}
			return r
		})
	}

}

