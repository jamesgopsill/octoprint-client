import { lstatSync, readFileSync, writeFileSync } from "fs"
import glob from "glob"

// https://futurestud.io/tutorials/node-js-string-replace-all-appearances
const replacer = new RegExp("\r\n", "g")

const checkAndConvertFiles = (files) => {
	for (const f of files) {
		if (lstatSync(f).isDirectory()) {
			continue
		}
		let content = readFileSync(f).toString()
		if (content.includes("\r\n")) {
			console.log(`${f} CRLF -> LF`)
			content = content.replace(replacer, "\n")
			writeFileSync(f, content)
		}
	}
}

// Now go through and check EoL delimiter and set it to LF rather than CRLF
glob("**/*", {
	ignore: ["node_modules/**/*", "**/*.png", "**/*.jpeg", "**/*.jpg", ".git"]
}, (err, files) => {
	checkAndConvertFiles(files)
})

glob(".*", {
	ignore: ["node_modules/**/*", "**/*.png", "**/*.jpeg", "**/*.jpg", ".git/**/*"]
}, (err, files) => {
	checkAndConvertFiles(files)
})

