// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor()
}

module.exports = Intern;

// require Employee
// class Intern extends Employee
// name, role-id, email, school
// name, role-id & email come from SUPER(name, role-id, email)
// this.school = school
// export