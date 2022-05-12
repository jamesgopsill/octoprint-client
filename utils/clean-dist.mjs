import { rmSync, existsSync } from "fs"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dir = `${__dirname}/../dist`

// Clear the dist directory
if (existsSync(dir)) {
	rmSync(dir, { recursive: true })
	console.log("Directory Cleaned!"); 
} else {
	console.log("./dist does not exist")
}
