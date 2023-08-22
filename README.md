# Sawayo-Test


## Prerequisites
1. Install Node JS in your local machine (can be downloaded from https://nodejs.org/en/download)
2. Once the installation completes, Verify the Versions of node and npm using 'node -v' and 'npm -v'

## Install VS Code
Install VS Code on your machine (can be downloaded from https://code.visualstudio.com/download)

## Install Playwright Using command
1. Create a new folder in your local and name it 'Playwright' 
2. Open the folder location on VS Code 
3. Open the Terminal in VS Code from the top toolbar or by pressing Ctrl+Shift+` 
4. execute 'npm init playwright@latest' to install the playwright
5. Choose between TypeScript or JavaScript (the default is TypeScript) - press the down arrow and select Javascript
6. Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project) - type tests and press enter
7. Add a GitHub Actions workflow to easily run tests on CI - type y and press enter
8. Install Playwright browsers (default is true) - type y and press enter
9. Once the installation completes, Check the version of Playwright by executing 'npm playwright -v'

   # (**ELSE**)
## Install Playwright using VS Code Extension
1. Create a new folder in your local and name it 'Playwright' 
2. Open the folder location on VS Code 
3. Click on the Extensions menu in the left sidebar in VS code or press 'Ctrl+Shift+X' to open the extensions
4. Search for 'Playwright' in the Extensions search bar and install the Playwright extension published by Microsoft
And follow the same instructions from 5-9 from the ## Install Playwright Using command

## Add a new test
1. Navigate to PLAYWRIGHT>tests folder
2. Create a new file under the tests folder and name it 'testname.spec.js'
3. Write the script in the newly created file and save it

  # (**OR**)

## Clone the git Repository to the local folder to download the existing tests
1. git clone https://github.com/Laxmipriya18/Assessment-Rationarium **(This can be done using git bash)**
2. Place the **Login with Invalid credentials.spec.js**  inside PLAYWRIGHT/tests folder
![image](https://github.com/Laxmipriya18/Assessment-Rationarium/assets/141823302/4bb4d784-d2e1-499c-a566-981a2d614307)



## Test Execution
1. Open the Terminal using Ctrl+Shift+` or from the top menu
2. run 'npx playwright test --ui' command to execute the test in UI mode
3. run 'npx playwright test' to execute all the tests
4. run 'npx playwright test testname.spec.js' to run a specific test
5. run 'npx playwright test .\tests\testname.spec.js --project chromium --headed' to run the test in specific headed browser
And there are many other commands to execute the tests

## Test Report
1. Test report can be viewed by executing 'npx playwright show-report' in the terminal
This will include all run times of each test step and filters to check the passed-only tests/failed-only tests etc...



