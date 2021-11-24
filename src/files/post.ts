import { fetch } from "cross-fetch"
import { PostLocalFileResponse } from "./interfaces"

export const postFileLocal = async (
	baseURL: string,
	apiKey: string,
	filename: string,
	gcode: string
) => {
	return new Promise<PostLocalFileResponse>(async (resolve, reject) => {
		const url = `${baseURL}/api/files/local`

		let formData: any

		// Check if we are running in the browser or on node.js
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("file", gcode, filename)
		} else {
			// Browser
			formData = new FormData()
			formData.append("file", gcode, filename)
		}

		const res = await fetch(url, {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"X-Api-Key": apiKey,
			},
			body: formData,
		})

		if (res.status == 201) resolve(res.json())
		reject(res)
	})
}
