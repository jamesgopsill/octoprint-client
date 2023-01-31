import { OctoPrintClient } from "../src/index.js"

test(`Ping`, async () => {
	const c = new OctoPrintClient("", "")
	expect(c.ping()).toBe("pong")
})
