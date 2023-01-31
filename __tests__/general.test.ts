import { OctoPrintClient } from "../src/index.js"
import { url, apiKey } from "./test.config.js"

let client: OctoPrintClient

beforeAll(() => {
	client = new OctoPrintClient(url, apiKey)
})

test(`GET version`, async () => {
	const r = await client.version()
	expect(r.ok).toBe(true)
	if (r.ok) console.log(r.data)
})

test(`GET server`, async () => {
	const r = await client.server()
	expect(r.ok).toBe(true)
	if (r.ok) console.log(r.data)
})

test(`GET connection`, async () => {
	const r = await client.connection()
	expect(r.ok).toBe(true)
	if (r.ok) console.log(r.data)
})
