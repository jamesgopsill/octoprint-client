import { fetch } from "cross-fetch"

export const get = <Type>(url: string, apiKey: string, bodyArgs?: {}) => {
	return new Promise<Type>(async (resolve, reject) => {
		let res

		if (typeof bodyArgs != "undefined") {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"X-Api-Key": apiKey,
				},
				body: JSON.stringify(bodyArgs),
			})
		} else {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"X-Api-Key": apiKey,
				},
			})
		}

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}
