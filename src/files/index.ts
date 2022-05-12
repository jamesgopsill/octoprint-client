import { Base, ResponseError } from "../base"
import type {
	GetFilesResponse,
	UploadFileToLocalResponse,
	UploadFileToSDCardResponse,
} from "./interfaces"
import { fetch } from "cross-fetch"

export class Files extends Base {
	public getFiles(): Promise<GetFilesResponse> {
		const url = `${this.baseURL}/api/files`
		return this.get(url)
	}

	public async selectFileAndPrint(file: string) {
		const url = `${this.baseURL}/api/files/local/${file}`
		const config: RequestInit = {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-Api-Key": this.apiKey,
			},
			body: JSON.stringify({
				command: "select",
				print: true,
			}),
		}
		return fetch(url, config).then((r) => {
			if (r.ok) {
				return true
			}
			throw new ResponseError(r)
		})
	}

	public async uploadFileToLocal(
		gcode: string
	): Promise<UploadFileToLocalResponse> {
		const url = `${this.baseURL}/api/files/local`

		// Create the file upload from the string
		let formData: any
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("file", gcode, "octoprint-client.gcode")
		} else {
			// Browser
			const blob = new Blob([gcode], { type: "text/plain" })
			formData = new FormData()
			formData.append("file", blob, "octoprint-client.gcode")
		}

		const config: RequestInit = {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"X-Api-Key": this.apiKey,
			},
			body: formData,
		}

		return fetch(url, config).then((r) => {
			if (r.ok) {
				return r.json()
			}
			throw new ResponseError(r)
		})
	}

	public async uploadFileToSDCard(
		gcode: string
	): Promise<UploadFileToSDCardResponse> {
		const url = `${this.baseURL}/api/files/sdcard`

		// Create the file upload from the string
		let formData: any
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("file", gcode, "octoprint-client.gcode")
		} else {
			// Browser
			const blob = new Blob([gcode], { type: "text/plain" })
			formData = new FormData()
			formData.append("file", blob, "octoprint-client.gcode")
		}

		const config: RequestInit = {
			method: "POST",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"X-Api-Key": this.apiKey,
			},
			body: formData,
		}

		return fetch(url, config).then((r) => {
			if (r.ok) {
				return r.json()
			}
			throw new ResponseError(r)
		})
	}
}
