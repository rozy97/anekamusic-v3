const conn = require("../configs/db");

const transactionsModel = {
  getUserTransactions: user => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT transactions.*, user.name as name FROM transactions JOIN user ON transactions.user = user.id WHERE transactions.user=?",
        user,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  getTransactionItems: id => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT transactionitems.*, transactionitems.branch as branchID, item.name as name, branch.location as branch FROM transactionitems JOIN item ON transactionitems.item = item.id JOIN branch ON transactionitems.branch = branch.id WHERE transactionitems.transaction=?",
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  getTransactionsByMonth: month => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT transactions.*, user.name as customer FROM transactions JOIN user ON transactions.user = user.id WHERE MONTH(date)=?",
        month,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  getLastID: () => {
    return new Promise((resolve, reject) => {
      conn.query("SELECT MAX (id) FROM transactions", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },

  newTransaction: user => {
    return new Promise((resolve, reject) => {
      conn.query(
        "INSERT INTO transactions (user) VALUES (?)",
        [user],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  addItem: (id, item) => {
    const itemID = item.item;
    const branch = item.branch;
    const quantity = item.quantity;
    const price = item.price;

    return new Promise((resolve, reject) => {
      conn.query(
        "INSERT INTO transactionitems (transaction, item, branch, quantity, price) VALUES (?,?,?,?,?)",
        [id, itemID, branch, quantity, price],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};

module.exports = transactionsModel;
