# GoOutdoors_exercise
Exercise testing webpage selecting item and checking stock usgin WebDriver.IO

I've used Visual Studio Code to create and run the tests. 
I've created 7 tests with a few steps each to make it easy to evaluate which tests have failed/passed.
Also, I believe the code being structured this way helps the maintainability if changes are required to a specific step.

Tests were designed in a clean environment (no previous cookies/login details);

Requirements
- Node.js

To start (using Visual Studio Code)
- Download files and extract in a suitable location for the project 
- On VSC, File > Add folder to workspace and select the location where you extracted the project
- Right click on the newly workspace's folder > Open in integrated terminal
- Run `npm install @wdio/cli` to install  WebdriverIO's testrunner

Run Tests
- npx wdio wdio.conf.js
