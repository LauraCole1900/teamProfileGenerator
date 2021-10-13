# Team Profile Generator

## Table of Contents

* [Description](#description)
* [Links](#links)
* [Screenshots](#screenshots)
* [Installation Instructions](#installation-instructions)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Tests](#tests)
* [Credits](#credits)
* [Contributing](#contributing)
* [Questions](#questions)
* [Badges](#badges)

## Description

This is a CLI application using Node.js that generates an html file containing names, roles, IDs, email addresses, an office number (for managers), GitHub account link (for engineers), and school (for interns.) The user should begin by creating an 'output' folder in the folder containing the application, then opening said containing folder in the terminal. Once in the containing folder in the terminal, the user, who is assumed to be the manager or team leader, begins by entering "node app.js". They are then taken through a series of prompts eliciting relevant information about their team members. To indicate that they have entered all of the team members, the user selects "None" to answer the question, "What type of team member would you like to add?" The application then synthesizes the information into an html file the user can access from the "output" folder inside their project folder.

## Links

[Link to walkthrough video](https://drive.google.com/file/d/14Y77zksXcUSfyXXI9gjCWBtUWVf3rcxJ/view)

## Screenshots

Generated team roster page, viewed through the browser:
![Team roster page](./Assets/team-roster-screencap.png)
  
## Installation Instructions

If you want to run a copy of this app on your local machine, first clone the repository:

HTTPS:
```
$ git clone https://github.com/LauraCole1900/teamProfileGenerator.git
```

SSH:
```
$ git clone git@github.com:LauraCole1900/teamProfileGenerator.git
```

Then cd/ into the cloned directory and download the dependencies into the cloned directory by entering into the command line:
```
$ npm install --save
```

Once the dependencies are installed, start the application by typing into the command line:
```
$ node app.js
```

## Usage

This project is intended to be used to generate a roster-page for a team of developers that includes a manager, any number of engineers, and any number of interns.

## Technologies Used

[![Node.js](https://img.shields.io/badge/built%20with-Node.js-3c873a)](https://nodejs.org/en/) [![Inquirer.js](https://img.shields.io/badge/built%20with-Inquirer.js-68a063)](https://www.npmjs.com/package/inquirer) [![Jest](https://img.shields.io/badge/built%20with-Jest-6ec532)](https://jestjs.io/)

## Tests

npm run test

## Credits

Front-end code developed and provided by 2U/Trilogy Education Services

## Contributing

We believe code is never finished, welcome your contributions to enhance the applications functionality. Please adhere to the Code of Conduct for the Contributor Covenant, version 2.0, at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

## Questions

If you have further questions, you can reach me at lauracole1900@comcast.net. For more of my work, see [my GitHub](https://github.com/LauraCole1900).

## Badges

[![License badge](https://img.shields.io/badge/license-MIT-00560d)](./LICENSE) [![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/LauraCole1900/teamProfileGenerator)

