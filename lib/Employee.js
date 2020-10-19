// TODO: Write code to define and export the Employee class

export default class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
};

getName = () => this.name;

getId = () => this.id;

getEmail = () => this.email;

getRole = () => "Employee";

// class Employee constructor name, id, email
// 4 methods: getName returns this.name
// getRole returns string Employee
// export