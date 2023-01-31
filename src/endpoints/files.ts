import type { OctoPrintClient } from "../index.js"
import type * as Def from "../definitions.js"

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
 *
 * @param this
 * @param location
 * @param filepath
 * @param gcode
 * @returns
 */
export async function uploadGcode(
	this: OctoPrintClient,
	location: "local" | "sdcard",
	filepath: string,
	gcode: string
) {
	const url = `${this.baseUrl}/api/files/${location}`
	console.log(url)
	const blob = new Blob([gcode], { type: "text/plain" })
	const formData = new FormData()
	formData.set("file", blob, filepath)

	let config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			"X-Api-Key": this.apiKey,
		},
		body: formData,
	}

	const request = new Request(url, config)
	const r = (await fetch(
		request
	)) as Def.HttpResponse<Def.UploadFileToLocalResponse>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}

/**
 *
 * @param this
 * @param filepath Should start with local/... or sdcard/...
 * @returns
 */
export async function deleteFile(
	this: OctoPrintClient,
	location: "local" | "sdcard",
	filepath: string
) {
	const url = `${this.baseUrl}/api/files/${location}/${filepath}`
	return this.delete<undefined>(url)
}

/**
 *
 * @param this
 * @param filepath Should start with local/... or sdcard/...
 * @param args
 * @returns
 */
export async function sliceFile(
	this: OctoPrintClient,
	filepath: string,
	args: Def.SliceRequest
) {
	const url = `${this.baseUrl}/api/files/${filepath}`
	return this.post<Def.SliceFileResponse>(url, args)
}

/**
 *
 * @param this
 * @param location
 * @param src
 * @param dest
 * @returns
 */
export async function copyFile(
	this: OctoPrintClient,
	location: "local" | "sdcard",
	src: string,
	dest: string
) {
	const url = `${this.baseUrl}/api/files/${location}/${src}`
	const args = {
		command: "copy",
		destination: dest,
	}
	return this.post<Def.CopyFileResponse>(url, args)
}

/**
 *
 * @param this
 * @param location
 * @param src
 * @param dest
 * @returns
 */
export async function moveFile(
	this: OctoPrintClient,
	location: "local" | "sdcard",
	src: string,
	dest: string
) {
	const url = `${this.baseUrl}/api/files/${location}/${src}`
	const args = {
		command: "move",
		destination: dest,
	}
	return this.post<Def.MoveFileResponse>(url, args)
}
