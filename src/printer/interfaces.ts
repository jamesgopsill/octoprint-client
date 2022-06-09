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
