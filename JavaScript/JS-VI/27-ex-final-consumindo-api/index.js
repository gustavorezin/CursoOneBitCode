let transactions = []

function formatMoney(amount) {
    return Intl.NumberFormat("pt-BR", {
        compactDisplay: "long",
        currency: "BRL",
        style: "currency",
        }).format(amount);
}

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
    span.classList.add("transaction-amount");
    const formatedAmount = formatMoney(amount);
    if (amount > 0) {
        span.textContent = `${formatedAmount} C`;
        span.classList.add("credit");
    } else {
        span.textContent = `${formatedAmount} D`;
        span.classList.add("debit");
    }
    return span;
}

function createEditTransactionBtn(transaction) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.textContent = "Editar"
    editBtn.addEventListener('click', () => {
        document.querySelector("#id").value = transaction.id
        document.querySelector("#name").value = transaction.name
        document.querySelector("#amount").value = transaction.amount
    })
    return editBtn
}

function createDeleteTransactionBtn(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = "Deletar"
    deleteBtn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, {method: 'DELETE'})
        deleteBtn.parentElement.remove()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })
    return deleteBtn
}

function renderTransaction(transactionData) {
  const container = createTransactionContainer(transactionData.id);
  const title = createTransactionTitle(transactionData.name);
  const amount = createTransactionAmount(transactionData.amount);
  const editBtn = createEditTransactionBtn(transactionData)
  const deleteBtn = createDeleteTransactionBtn(transactionData.id)

  container.append(title, amount, editBtn, deleteBtn);
  document.querySelector("#transactions").append(container);
}

async function fetchTransactions() {
  return await fetch("http://localhost:3000/transactions").then((res) => res.json());
}

function updateBalance() {
    const balanceSpan = document.querySelector("#balance")
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0) 
    balanceSpan.textContent = formatMoney(balance)
}

async function setup() {
    const results = await fetchTransactions();
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}

document.addEventListener("DOMContentLoaded", setup);

const form = document.querySelector('form')

async function saveTransaction(ev) {
    ev.preventDefault

    const id = document.querySelector("#id").value
    const name = document.querySelector("#name").value
    const amount = parseFloat(document.querySelector("#amount").value)

    if (id) {
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, amount})
        })

        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((t) => t.id === id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`transaction-${id}`).remove()
        renderTransaction(transaction)
    } else {
        const response = await fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, amount})
        })
    
        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }

    ev.target.reset
    updateBalance()
}

form.addEventListener('submit', saveTransaction)