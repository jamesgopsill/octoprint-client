import { fetch } from "cross-fetch"

/**
 * ResponseError to retun any response errors to the user.
 */
export class ResponseError extends Error {
	public response: Response

	constructor(response: Response) {
		super("Check error.response for the response from the server.")
		this.name = "ResponseError"
		this.message = "Check error.response for the response from the server."
		this.response = response
	}
}

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
	protected async get(url: string, bodyArgs?: {}): Promise<any> {
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
		}).then((r) => {
			if (r.ok) {
				return r.json()
			}
			throw new ResponseError(r)
		})
	}

}
