// EMPRESTIMO

const Installment = require("./Installment");

module.exports = class Loan {
  static #fee = 1.05; //taxa de juros

  constructor(value, numberOfInstallments) {
    this.value = value;
    this.installments = this.#calculateInstallments(numberOfInstallments);
    this.createdAt = new Date();
  }

  #calculateInstallments(numberOfInstallments) {
    const valueInstallment = (this.value * Loan.#fee) / numberOfInstallments;
    let installments = [];
    for (let i = 1; i <= numberOfInstallments; i++) {
      installments.push(new Installment(valueInstallment, i));
    }
    return installments;
  }

  static get fee() {
    return Loan.#fee;
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + newFeePercentage / 100;
  }
};
