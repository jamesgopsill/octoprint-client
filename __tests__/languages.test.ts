import { OctoPrintClient } from "../src/index.js"

let client: OctoPrintClient

beforeAll(() => {
	client = new OctoPrintClient("http://localhost:3000", "test")
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
