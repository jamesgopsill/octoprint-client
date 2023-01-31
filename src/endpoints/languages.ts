import type { OctoPrintClient } from "../index.js"
import type * as Def from "../definitions.js"

export async function languages(this: OctoPrintClient) {
	const url = `${this.baseUrl}/api/languages`
	return this.get<Def.LanguagesResponse>(url)
}

export async function deleteLanguage(
	this: OctoPrintClient,
	locale: string,
	pack: string
) {
	const url = `${this.baseUrl}/api/languages/${locale}/${pack}`
	return this.delete(url)
}
