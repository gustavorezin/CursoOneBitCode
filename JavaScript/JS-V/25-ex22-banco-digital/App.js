const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static findUserByEmail(email) {
    return App.#users.find((user) => user.email === email) ?? null;
  }

  static createUser(name, email) {
    const userExists = App.findUserByEmail(email);
    if (!userExists) {
      App.#users.push(new User(name, email));
    } else {
      console.log("E-mail já cadastrado");
    }
  }

  static createDeposit(email, value) {
    const user = App.findUserByEmail(email);
    if (user) {
      const deposit = new Deposit(value);
      user.account.addDeposit(deposit);
    }
  }

  static createLoan(email, value, numberOfInstallments) {
    const user = App.findUserByEmail(email);
    if (user) {
      const loan = new Loan(value, numberOfInstallments);
      user.account.addLoan(loan);
    }
  }

  static createTransfer(userSenderEmail, userReceiverEmail, value) {
    const userSender = App.findUserByEmail(userSenderEmail);
    const userReceiver = App.findUserByEmail(userReceiverEmail);
    if (userSender && userReceiver) {
      const transfer = new Transfer(userSender, userReceiver, value);
      userSender.account.addTransfer(transfer);
      userReceiver.account.addTransfer(transfer);
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage;
  }
};
