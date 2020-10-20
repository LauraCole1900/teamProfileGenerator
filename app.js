const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { POINT_CONVERSION_COMPRESSED } = require("constants");


// Team members array
const teamMembers = [];


// Questions arrays
// Manager
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office"
  }
];

// Engineer
const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  }
];

// Intern
const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your school?",
    name: "school"
  }
];

// Add team member?
const teamAdd =
{
  type: "list",
  message: "What type of team member would you like to add?",
  name: "team",
  choices: ["Engineer", "Intern", "None"]
}


// Functions
// Manager
function createManager() {
  inquirer.prompt(managerQuestions).then(response => {
    const newManager = new Manager(response.name, response.id, response.email, response.office)
    teamMembers.push(newManager)
    createTeam()
  })
}

// Engineer
function createEngineer() {
  inquirer.prompt(engineerQuestions).then(response => {
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
    teamMembers.push(newEngineer)
    createTeam()
  })
};

// Intern
function createIntern() {
  inquirer.prompt(internQuestions).then(response => {
    const newIntern = new Intern(response.name, response.id, response.email, response.school)
    teamMembers.push(newIntern)
    createTeam()
  })
};

// Create team: add Engineer, Intern, or none?
function createTeam() {
  inquirer.prompt(teamAdd).then(response => {
    if (response.team === "Engineer") {
      createEngineer();
    } else if (response.team === "Intern") {
      createIntern();
    } else if (response.team === "None") {
      // if none, render team members array into file
      const finalHTML = render(teamMembers)
      fs.writeFile("./output/team.html", finalHTML, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("File written!");
      });
    }
  })
};


// Begin building team
createManager();



// create manager's profile --> createManager()
// inquirer.prompt name, role, email, office number
// .then create manager using manager blueprint
// const whatever = new Manager(answers.name, answers.role, etc)
// similar for Intern and Engineer
// keep asking if want to add another Engineer or Intern
// render(teamMembers.arr)
// each time employee is created, push to teamMembers.arr
// createTeam() --> asks what type of team member do you want to add?
// switch case if choose Engineer, Intern, or none
// engineer calls buildEngineer(), intern similar, none buildTeam() 


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
