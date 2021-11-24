import { get } from "../helpers"
import {
	ConnectionSettings,
	ServerInformation,
	VersionInformation,
} from "./interfaces"

export const getVersionInformation = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/version`
	return get<VersionInformation>(url, apiKey)
}

export const getSystemInformation = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/version`
	return get<ServerInformation>(url, apiKey)
}

export const getConnectionSettings = (baseURL: string, apiKey: string) => {
	const url = `${baseURL}/api/connection`
	return get<ConnectionSettings>(url, apiKey)
}
