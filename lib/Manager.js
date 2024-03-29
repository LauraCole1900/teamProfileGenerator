// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email)
    this.office = office;
  }

  // Extend methods
  getOffice() {
    return this.office
  };

  getRole() {
    return "Manager"
  };
};

// Export
module.exports = Manager;