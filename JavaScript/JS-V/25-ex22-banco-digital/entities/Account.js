// CONTA
module.exports = class Account {
  #balance;

  constructor(userOwner) {
    this.userOwner = userOwner;
    this.#balance = 0;
    this.deposits = [];
    this.transfers = [];
    this.loans = [];
  }

  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }

  addTransfer(transfer) {
    if (transfer.userReceiver === this.userOwner) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.userSender === this.userOwner) {
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    }
  }

  get balance() {
    return this.#balance;
  }
};
