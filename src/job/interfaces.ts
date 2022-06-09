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
