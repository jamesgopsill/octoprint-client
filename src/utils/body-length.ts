function isStream(obj: any) {
	return obj && typeof obj.pipe === "function"
}

function isBuffer(buffer: any) {
	// See, https://github.com/mcollina/undici/pull/319
	return buffer instanceof Uint8Array || Buffer.isBuffer(buffer)
}

// based on https://github.com/node-fetch/fetch-blob/blob/8ab587d34080de94140b54f07168451e7d0b655e/index.js#L229-L241 (MIT License)
function isBlobLike(object: any) {
	return (
		(Blob && object instanceof Blob) ||
		(object &&
			typeof object === "object" &&
			(typeof object.stream === "function" ||
				typeof object.arrayBuffer === "function") &&
			/^(Blob|File)$/.test(object[Symbol.toStringTag]))
	)
}

export function bodyLength(body: any) {
	if (body == null) {
		return 0
	} else if (isStream(body)) {
		const state = body._readableState
		return state && state.ended === true && Number.isFinite(state.length)
			? state.length
			: null
	} else if (isBlobLike(body)) {
		return body.size != null ? body.size : null
	} else if (isBuffer(body)) {
		return body.byteLength
	}
	console.log("None of the conditions were met.")
	return null
}
