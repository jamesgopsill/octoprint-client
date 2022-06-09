import { Base } from "../base"
import type {
	GetFilesResponse,
	UploadFileToLocalResponse,
	UploadFileToSDCardResponse,
} from "./interfaces"
import { fetch } from "cross-fetch"
import { HttpResponse } from "../interfaces"

export class Files extends Base {
	public files() {
		const url = `${this.baseURL}/api/files`
		return this.get<GetFilesResponse>(url)
	}

	public async selectFileAndPrint(file: string) {
		const url = `${this.baseURL}/api/files/local/${file}`
		const args = {
			command: "select",
			print: true,
		}
		return this.post(url, args)
	}

	public async uploadFileToLocal(filename: string, gcode: string) {
		const url = `${this.baseURL}/api/files/local`

		// Create the file upload from the string
		let formData: any
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("file", gcode, filename)
		} else {
			// Browser
			const blob = new Blob([gcode], { type: "text/plain" })
			formData = new FormData()
			formData.append("file", blob, filename)
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

		return fetch(url, config).then(
			async (r: HttpResponse<UploadFileToLocalResponse>) => {
				if (r.ok) r.data = await r.json()
				return r
			}
		)
	}

	public async uploadFileToSDCard(filename: string, gcode: string) {
		const url = `${this.baseURL}/api/files/sdcard`

		// Create the file upload from the string
		let formData: any
		if (typeof window === "undefined") {
			// Node.js
			const FormData = require("form-data")
			formData = new FormData()
			formData.append("file", gcode, filename)
		} else {
			// Browser
			const blob = new Blob([gcode], { type: "text/plain" })
			formData = new FormData()
			formData.append("file", blob, filename)
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

		return fetch(url, config).then(
			async (r: HttpResponse<UploadFileToSDCardResponse>) => {
				if (r.ok) r.data = await r.json()
				return r
			}
		)
	}
}
