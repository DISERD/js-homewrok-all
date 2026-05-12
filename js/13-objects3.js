//Банк
const Transaction = { DEPOSIT: 'deposit', WITHDRAW: 'withdraw' };

const account = {
  balance: 0,
  transactions: [],

  createTransaction({ amount, type }) {
    return { id: Math.random().toString(36).substring(2), amount, type };
  },

  deposit(amount) {
    const transaction = this.createTransaction({ amount, type: Transaction.DEPOSIT });
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    const { balance } = this;
    if (amount > balance) {
      console.log("Недостатньо коштів");
      return;
    }
    const transaction = this.createTransaction({ amount, type: Transaction.WITHDRAW });
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  getTransactionTotal(searchType) {
    let total = 0;
    for (const { type, amount } of this.transactions) {
      if (type === searchType) {
        total += amount;
      }
    }
    return total;
  }
};