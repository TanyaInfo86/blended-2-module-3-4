// Напиши скрипт керування особистим кабінетом інтернет банку.
// Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// Кожна транзакція - це об'єкт із властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //історія транзакцій
  transactions: [],

  // Метод створює та повертає об'єкт транзакцій
  // Приймає суму та тип транзакції

  createTransaction(type, amount) {
    return {
      type,
      amount,
      id: this.transactions.length,
    };
  },

  // Метод відповідає за додавання суми до балансу.
  // Приймає суму транзакції
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій

  deposit(amount) {
    this.balance += amount;
    const operation = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(operation);
  },

  // Метод відповідає за зняття суми з балансу.
  // Приймає суму тразакцій.
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій
  // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів

  withdraw(amount) {
    if (amount > this.balance) {
      return "на рахунку недостатньо коштів";
    }
    this.balance -= amount;
    const operation = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push(operation);
  },

  // Метод, що повертає поточний баланс
  getBalance() {
    return this.balance;
  },

  // Метод шукає та повертає об'єкта транзакції по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
  getTransactionType(type) {
    let count = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        count += transaction.amount;
      }
    }
    return count;
  },
};

account.deposit(89);
account.deposit(89);
account.deposit(89);
account.withdraw(59);
console.log(account.withdraw(659));
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionType(Transaction.DEPOSIT));
