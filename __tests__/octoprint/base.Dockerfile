FROM octoprint/octoprint:1.8.6

RUN octoprint --basedir /octoprint/octoprint user add --admin --password print octo