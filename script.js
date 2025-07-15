// Account and transaction data
const accountsData = [
  {
    type: "Savings Account",
    balance: 5000.50,
    number: "XXXX-1234",
    icon: "https://img.icons8.com/fluency/48/safe.png"
  },
  {
    type: "Checking Account",
    balance: 2450.00,
    number: "XXXX-5678",
    icon: "https://img.icons8.com/fluency/48/bank-cards.png"
  },
  {
    type: "Credit Card",
    balance: -800.75,
    number: "XXXX-9876",
    icon: "https://img.icons8.com/fluency/48/credit-card-front.png"
  }
];

const transactionsData = [
  { date: "2025-07-11", description: "Salary Deposit", amount: 2500.00 },
  { date: "2025-07-10", description: "ATM Withdrawal", amount: -200.00 },
  { date: "2025-07-09", description: "Grocery Store", amount: -120.75 },
  { date: "2025-07-08", description: "Credit Card Payment", amount: 500.00 },
  { date: "2025-07-07", description: "Electricity Bill", amount: -150.00 }
];

// Render account panels
function renderAccountsTable() {
  const tableBody = document.querySelector('#accountsTable tbody');
  tableBody.innerHTML = '';
  accountsData.forEach(acc => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${acc.icon}" alt="icon"></td>
      <td>${acc.type}</td>
      <td>${acc.number}</td>
      <td style="color:${acc.balance < 0 ? '#e74c3c' : '#27ae60'};font-weight:bold;">
        ${acc.balance < 0 ? '-' : ''}$${Math.abs(acc.balance).toLocaleString(undefined, {minimumFractionDigits:2})}
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Render transactions as a table
function renderTransactionsTable() {
  const tableBody = document.querySelector('#transactionsTable tbody');
  tableBody.innerHTML = '';
  transactionsData.forEach(tx => {
    const isCredit = tx.amount > 0;
    const isDebit = tx.amount < 0;
    const debitAmount = isDebit ? `$${Math.abs(tx.amount).toFixed(2)}` : '';
    const creditAmount = isCredit ? `$${tx.amount.toFixed(2)}` : '';
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tx.date}</td>
      <td>${tx.description}</td>
      <td class="debit">${debitAmount}</td>
      <td class="credit">${creditAmount}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Scroll to accounts section
document.getElementById('scrollToAccounts').addEventListener('click', () => {
  document.getElementById('accountsSection').scrollIntoView({ behavior: 'smooth' });
});

// Login button (demo)
document.getElementById('loginBtn').addEventListener('click', () => {
  alert('Login functionality is not implemented in this demo.');
});

// Initialize
renderAccountsTable();
renderTransactionsTable();
