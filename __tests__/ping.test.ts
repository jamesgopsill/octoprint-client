import { OctoPrintClient } from "../src/index.js"
import { url, apiKey } from "./test.config.js"

test(`Ping`, async () => {
	const c = new OctoPrintClient(url, apiKey)
	expect(c.ping()).toBe("pong")
})
