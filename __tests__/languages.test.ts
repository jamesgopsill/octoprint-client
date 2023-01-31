import { OctoPrintClient } from "../src/index.js"
import { url, apiKey } from "./test.config.js"

let client: OctoPrintClient

beforeAll(() => {
	client = new OctoPrintClient(url, apiKey)
})

test(`GET languages`, async () => {
	const r = await client.languages()
	if (r.ok) {
		console.log(r.data)
	} else {
		console.log(r.status, await r.text())
	}
	expect(r.ok).toBe(true)
})
