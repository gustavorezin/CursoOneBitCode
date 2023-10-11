function createTransactionContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transaction");
  container.id = `transaction-${id}`;
  return container;
}

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("transaction-title");
  title.textContent = name;
  return title;
}

function createTransactionAmount(amount) {
  const span = document.createElement("span");
  title.classList.add("transaction-amount");
  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  const formatedAmount = formater.format(amount);
  if (amount > 0) {
    span.textContent = `${formatedAmount} C`;
    span.classList.add("credit");
  } else {
    span.textContent = `${formatedAmount} D`;
    span.classList.add("debit");
  }
  return span;
}

function renderTransaction(transactionData) {
  const container = createTransactionContainer(transactionData.id);
  const title = createTransactionTitle(transactionData.name);
  const amount = createTransactionAmount(transactionData.amount);

  container.append(title, amount);
  document.querySelector("#transactions").append(container);
}

async function fetchTransactions() {
  const transactions = await fetch("http://localhost:3000/transactions").then(
    (res) => res.json()
  );
  transactions.foreach(renderTransaction);
}

document.addEventListener("DOMContentLoaded", fetchTransactions);
