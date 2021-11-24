import { get } from "../helpers"

export const getFiles = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/files`
	return get(url, apiKey)
}

export const getFilesRecursive = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/files?recursive=true`
	return get(url, apiKey)
}
