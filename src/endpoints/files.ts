import type { OctoPrintClient } from "../index.js"
import type * as Def from "../definitions.js"

const formUploadFileRequest = async (
	url: string,
	key: string,
	filename: string,
	gcode: string
) => {
	// Create the file upload from the string
	const blob = new Blob([gcode], { type: "text/plain" })
	const formData = new FormData()
	formData.set("file", blob, filename)

	let config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			"X-Api-Key": key,
		},
		body: formData,
	}

	const request = new Request(url, config)
	return request
}

/**
 * Retrieve information regarding all files currently available and regarding the disk space still available locally in the system. The results are cached for performance reasons. If you want to override the cache, supply the query parameter force and set it to true. Note that while printing a refresh/override of the cache for files stored on the printer’s SD card is disabled due to bandwidth restrictions on the serial interface.
 * By default only returns the files and folders in the root directory. If the query parameter recursive is provided and set to true, returns all files and folders.
 * @returns
 */
export async function files(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/files`
	return this.get<Def.GetFilesResponse>(url)
}

/**
 * Initiate printing of named file.
 * @param file
 * @returns
 */
export async function print(this: OctoPrintClient, file: string) {
	const url = `${this.baseUrl}/api/files/local/${file}`
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
export async function uploadFileToLocal(
	this: OctoPrintClient,
	filename: string,
	gcode: string
) {
	const url = `${this.baseUrl}/api/files/local`
	const request = await formUploadFileRequest(url, this.apiKey, filename, gcode)
	const r = (await fetch(
		request
	)) as Def.HttpResponse<Def.UploadFileToLocalResponse>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}

/**
 * Uploads a file to the printer SD card (if it has one).
 * @param filename
 * @param gcode
 * @returns
 */
export async function uploadFileToSDCard(
	this: OctoPrintClient,
	filename: string,
	gcode: string
) {
	const url = `${this.baseUrl}/api/files/sdcard`
	const request = await formUploadFileRequest(url, this.apiKey, filename, gcode)
	const r = (await fetch(
		request
	)) as Def.HttpResponse<Def.UploadFileToSDCardResponse>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}

export async function deleteLocalFile(this: OctoPrintClient, filename: string) {
	const url = `${this.baseUrl}/api/files/local/${filename}`
	return this.delete<undefined>(url)
}
