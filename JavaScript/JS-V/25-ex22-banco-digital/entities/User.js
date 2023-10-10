const Account = require("./Account");

// USUARIO
module.exports = class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.account = new Account(this);
  }
};
