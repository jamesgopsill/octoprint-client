export type HttpResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: null
	  } & Response)

export interface PrinterStatus {
	sd: {
		ready: boolean
	}
	state: {
		error: string
		flags: {
			cancelling: boolean
			closedOnError: boolean
			error: boolean
			operational: boolean
			paused: boolean
			printing: boolean
			ready: boolean
			resuming: boolean
			sdReady: boolean
		}
		text: string
	}
	temperature: {
		bed: Temperature
		tool0: Temperature
		tool1?: Temperature
	}
}

export interface Temperature {
	actual: number
	offset: number
	target: number
}

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
	safemode: string | null
}

export interface JobInformation {
	job: {
		file: {
			name: string
			origin: string
			size: number
			date: number
		}
		estimatedPrintTime: number
		filament: {
			tool0: {
				length: number
				volume: number
			}
		}
	}
	progress: {
		completion: number
		filepos: number
		printTime: number
		printTimeLeft: number
	}
	state: string
}

export interface GetFilesResponse {
	files: [
		{
			name: string
			path: string
			type: string
			typePath: string[]
			hash: string
			size: number
			date: number
			origin: string
			refs: {
				resource: string
				download: string
			}
			gcodeAnalysis: {
				estimatedPrintTime: number
				filament: {
					length: number
					volume: number
				}
			}
			print: {
				failure: number
				success: number
				last: {
					date: number
					success: boolean
				}
			}
		}
	]
	free: number
	total: number
}

export interface UploadFileToLocalResponse {
	files: {
		local: {
			name: string
			origin: string
			refs: {
				resource: string
				download: string
			}
		}
	}
	done: boolean
}

export interface UploadFileToSDCardResponse {
	files: {
		local: {
			name: string
			origin: string
			refs: {
				resource: string
				download: string
			}
		}
		sdcard: {
			name: string
			path: string
			origin: string
			refs: {
				resource: string
			}
		}
	}
	done: boolean
}