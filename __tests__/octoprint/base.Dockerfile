FROM octoprint/octoprint

RUN --mount=type=secret,id=password octoprint --basedir /octoprint/octoprint user add --admin --password print octo