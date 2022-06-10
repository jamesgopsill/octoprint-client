import { Base } from "../base"
import type {
	GetFilesResponse,
	UploadFileToLocalResponse,
	UploadFileToSDCardResponse,
} from "./interfaces"
import { fetch } from "cross-fetch"
import { HttpResponse } from "../interfaces"

export class Files extends Base {
	/**
	 * Retrieve information regarding all files currently available and regarding the disk space still available locally in the system. The results are cached for performance reasons. If you want to override the cache, supply the query parameter force and set it to true. Note that while printing a refresh/override of the cache for files stored on the printer’s SD card is disabled due to bandwidth restrictions on the serial interface.
	 * By default only returns the files and folders in the root directory. If the query parameter recursive is provided and set to true, returns all files and folders.
	 * @returns
	 */
	public files() {
		const url = `${this.baseURL}/api/files`
		return this.get<GetFilesResponse>(url)
	}

	/**
	 * Initiate printing of named file.
	 * @param file
	 * @returns
	 */
	public async print(file: string) {
		const url = `${this.baseURL}/api/files/local/${file}`
		const args = {
			command: "select",
			print: true,
		}
		return this.post(url, args)
	}

	/**
	 * Uploads a file to Octoprint
	 * @param filename
	 * @param gcode
	 * @returns
	 */
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

	/**
	 * Uploads a file to the printer SD card (if it has one).
	 * @param filename
	 * @param gcode
	 * @returns
	 */
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

	public async deleteLocalFile(filename: string) {
		const url = `${this.baseURL}/api/files/local/${filename}`
		this.delete<undefined>(url)
	}
}
