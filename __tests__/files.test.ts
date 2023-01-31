import { OctoPrintClient } from "../src/index.js"
import { readFileSync } from "fs"

let client: OctoPrintClient
const gcodeFilename = "test.gcode"

beforeAll(() => {
	client = new OctoPrintClient("http://localhost:3000", "test")
})

test("POST gcode file", async () => {
	const testFilepath = `${__dirname}/assets/${gcodeFilename}`
	const gcode = readFileSync(testFilepath).toString()
	let r = await client.uploadGcode("local", gcodeFilename, gcode)
	if (r.ok) {
		console.log(r.data)
	} else {
		console.log(r.status, await r.text())
	}
	expect(r.ok).toBe(true)
})

test("GET files", async () => {
	const r = await client.files()
	expect(r.ok).toBe(true)
	if (r.ok) console.log(r.data)
})


test("POST copy file",async () => {
	const src = `${gcodeFilename}`
	const dest = `abc.gcode`
	const r = await client.copyFile("local", src, dest)
	expect(r.ok).toBe(true)
})

test("GET files", async () => {
	const r = await client.files()
	expect(r.ok).toBe(true)
	if (r.ok) console.log(r.data)
})


test("DELETE file",async () => {
	let r = await client.deleteFile("local", gcodeFilename)
	expect(r.ok).toBe(true)
	r = await client.deleteFile("local" ,"/abc.gcode")
	expect(r.ok).toBe(true)
})
