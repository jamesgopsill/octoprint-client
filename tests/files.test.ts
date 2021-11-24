import * as fs from "fs"
import { OctoPrintClient } from "../src"
import { apiKey, ip } from "./test.config"

const client = new OctoPrintClient(ip, apiKey)

test("POST local file", async () => {
	const gcode = fs.readFileSync(`${__dirname}/UM3E_20mm_cube.gcode`).toString()
	const v = await client.postFileLocal("test.gcode", gcode)
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET files", async () => {
	const v = await client.getFiles()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET files recursive", async () => {
	const v = await client.getFiles()
	console.log(v)
	expect(typeof v).toBe("object")
})
