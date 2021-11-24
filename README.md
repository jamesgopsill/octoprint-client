# OctoPrint Client

The client has been developed as part of a research programme investigating agent-based manufacturing systems. It is isomorphic and able to both server (Node.js) and client-side (Browser).

## Using octoprint-client

To install the package, use the following code. I am aiming to put it onto npm soon.

```
yarn add https://github.com/JamesGopsill/octoprint-client
```

You can then use in your code via by importing

```typescript
import { OctoPrintClient } from "octoprint-client"

// Create a new client.
const client = new OctoPrintClient("OCTOPRINT_URL", "API_KEY")

// Retrieve the name of your printer.
try {
	const versionInfo = await client.getVersionInformation()
	console.log(versionInfo)
} catch (res) { 
	// Promise reject will most likely return the response that resulted in the error.
	console.log(res)
}
```

## Testing

To test the client, we use the OctoPrint docker image and spin up a local instance that the client can interface with. To spin up an instance, you will need docker installed. Then simply go `cd` into the tests directory and run:

```
docker-compose up
```

To create the Octoprint instance that can be accessed via `http://localhost`. You will need configure octoprint the first time you run the container. Once configured, you can access the api key from the settings menu in OctoPrint. You will then need to create a `test.config.ts` file in the tests folder (ignored by .gitignore) to add the parameters in to create the client during the tests. The file should contain the following:

```typescript
export const url = "ADD URL"
export const apiKey = "ADD API KEY"
```

## Client Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/octoprint-client/).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

To donate and provide continued support, please go to **[TODO]**.

## References

- [Brokering Additive Manufacturing](https://dmf-lab.co.uk/brokering-additive-manufacturing/)
- [OctoPrint](https://octoprint.org/)
- [OctoPrint on Docker Hub](https://hub.docker.com/r/octoprint/octoprint)
- [Git autocrlf](https://tanutaran.medium.com/solving-git-lf-will-be-replaced-by-crlf-7ca84eb0aad4)

