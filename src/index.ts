import { del } from "./core/delete.js"
import { get } from "./core/get.js"
import { post } from "./core/post.js"
import * as Printer from "./endpoints/printer.js"
import * as General from "./endpoints/general.js"
import * as Job from "./endpoints/job.js"
import * as Files from "./endpoints/files.js"

export * from "./definitions.js"
export * from "./enums.js"

export class OctoPrintClient {
	public baseUrl: string = ""
	public apiKey: string = ""

	constructor(url: string, apiKey: string) {
		this.baseUrl = url
		this.apiKey = apiKey
	}

	public ping = () => "pong"
	
	// Core
	protected get = get
	protected post = post
	protected delete = del

	// Printer
	public status = Printer.status
	public homeAllAxes = Printer.homeAllAxes
	public jog = Printer.jog

	// General
	public version = General.version
	public server = General.server
	public connection = General.connection
	public connectPrinter = General.connectPrinter
	public disconnectPrinter = General.disconnectPrinter

	// Job
	public jobCommand = Job.jobCommand
	public jobInformation = Job.jobInformation

	// Files
	public files = Files.files
	public print = Files.print
	public uploadGcode = Files.uploadGcode
	public deleteFile = Files.deleteFile
	public sliceFile = Files.sliceFile
	public moveFile = Files.moveFile
	public copyFile = Files.copyFile
}
