export interface ConnectionSettings {
	current: {
		state: string | null
		port: string | null
		baudrate: string
		printerProfile: string
	}
	options: {
		ports: string[]
		baudrates: number[]
		printerProfiles: [
			{
				name: string
				id: string
			}
		]
		portPreference: number
		printerProfilePreference: number
		autoconnect: boolean
	}
}

export interface VersionInformation {
	api: string
	server: string
	text: string
}

export interface ServerInformation {
	server: string
	safemode: string
}
