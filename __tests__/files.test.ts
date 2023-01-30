import { OctoPrintClient } from "../src/index.js"
import { readFileSync } from "fs"

let client: OctoPrintClient
const filename = "test.gcode"

beforeAll(() => {
	client = new OctoPrintClient("http://localhost:3000", "test")
})

test("POST local file", async () => {
	const gcode = readFileSync(`${__dirname}/assets/${filename}`).toString()
	const r = await client.uploadFileToLocal(filename, gcode)
	expect(r.ok).toBe(true)
	if (r.ok) console.log(r.data)
})


test("GET files", async () => {
	const r = await client.files()
	expect(r.ok).toBe(true)
	// if (r.ok) console.log(r.data)
})

test("DELETE local file",async () => {
	const r = await client.deleteLocalFile(filename)
	expect(r.ok).toBe(true)
})
