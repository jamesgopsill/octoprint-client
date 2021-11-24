import { OctoPrintClient } from "../src"
import { apiKey, ip } from "./test.config"

const client = new OctoPrintClient(ip, apiKey)

test("GET version information", async () => {
	const v = await client.getVersionInformation()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET system information", async () => {
	const v = await client.getSystemInformation()
	console.log(v)
	expect(typeof v).toBe("object")
})

test("GET connection settings", async () => {
	const v = await client.getConnectionSettings()
	console.log(v)
	expect(typeof v).toBe("object")
})
