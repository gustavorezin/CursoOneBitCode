const App = require("./App");

App.createUser("Isaac Pontes", "isaac@email.com");
App.createUser("Lucas Queiroga", "lucas@email.com");
App.createUser("Juliana Conde", "juliana@email.com");

App.createDeposit("isaac@email.com", 100);

App.createTransfer("isaac@email.com", "lucas@email.com", 20);

App.changeLoanFee(10);
App.createLoan("juliana@email.com", 2000, 24);

console.log(App.findUserByEmail("isaac@email.com").account);
console.log(App.findUserByEmail("lucas@email.com").account);
console.log(App.findUserByEmail("juliana@email.com").account);
console.log(
  App.findUserByEmail("juliana@email.com").account.loans[0].installments
);
