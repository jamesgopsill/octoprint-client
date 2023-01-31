const boundary = "----formdata-undici-" + Math.random()

const prefix = `--${boundary}\r\nContent-Disposition: form-data`

const escape = (str: string) =>
	str.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22")

const normalizeLineFeeds = (value: string) => value.replace(/\r?\n|\r/g, "\r\n")

export const formDataLength = (fd: FormData) => {
	const prefixLength = prefix.length
	const boundaryLength = boundary.length
	let bodyLength = 0

	//@ts-ignore
	for (const [name, value] of fd) {
		if (typeof value === "string") {
			bodyLength +=
				prefixLength +
				Buffer.byteLength(`; name="${escape(normalizeLineFeeds(name))}"`) +
				Buffer.byteLength(`\r\n\r\n${normalizeLineFeeds(value)}\r\n`)
		} else {
			bodyLength +=
				prefixLength +
				Buffer.byteLength(`; name="${escape(normalizeLineFeeds(name))}"`) +
				(value.name
					? Buffer.byteLength(`; filename="${escape(value.name)}"`)
					: 0) +
				2 + // \r\n
				`Content-Type: ${value.type || "application/octet-stream"}\r\n\r\n`
					.length

			// value is a Blob or File
			bodyLength += value.size

			bodyLength += 2 // \r\n
		}
	}

	bodyLength += boundaryLength + 4 // --boundary--
	return bodyLength
}
