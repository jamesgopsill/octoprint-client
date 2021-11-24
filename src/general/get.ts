import { get } from "../helpers"

export const getVersionInformation = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/version`
	return get<{
		api: string
		server: string
		text: string
	}>(url, apiKey)
}

export const getSystemInformation = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/version`
	return get<{
		server: string
		safemode: string
	}>(url, apiKey)
}
