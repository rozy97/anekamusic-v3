const transactionsModel = require("../models/transsactions");
const formResponse = require("../helpers/formResponse");

const transactionsController = {
  getUserTransactions: (req, res) => {
    const user = req.params.id;

    transactionsModel
      .getUserTransactions(user)
      .then(result => {
        let transactions = [];
        result.map((transaction, index) => {
          transactionsModel
            .getTransactionItems(transaction.id)
            .then(rsult => {
              transaction = {
                ...transaction,
                transactionitems: rsult
              };
              transactions.push(transaction);

              if (index == result.length - 1) {
                formResponse.success(res, 200, transactions);
              }
            })
            .catch(error => {
              res.json(error);
            });
        });
      })
      .catch(error => {
        res.json(error);
      });
  },

  getTransactionsByMonth: (req, res) => {
    const month = req.params.month;

    transactionsModel
      .getTransactionsByMonth(month)
      .then(result => {
        let transactions = [];
        result.map((transaction, index) => {
          transactionsModel
            .getTransactionItems(transaction.id)
            .then(rsult => {
              transaction = {
                ...transaction,
                transactionitems: rsult
              };
              transactions.push(transaction);

              if (index == result.length - 1) {
                formResponse.success(res, 200, transactions);
              }
            })
            .catch(error => {
              res.json(error);
            });
        });
      })
      .catch(error => {
        res.json(error);
      });
  },

  newTransaction: (req, res) => {
    const user = req.params.id;
    const transactionitems = req.body.transactionitems;

    transactionsModel
      .newTransaction(user)
      .then(result => {
        transactionsModel
          .getLastID()
          .then(async id => {
            id = id[0]["MAX (id)"];

            await transactionitems.map(async (item, index) => {
              await transactionsModel
                .addItem(id, item)
                .then(rsult => {
                  const data = {
                    id,
                    user,
                    transactionitems: [...transactionitems]
                  };

                  if (index == transactionitems.length - 1) {
                    formResponse.success(res, 200, rsult, data);
                  }
                })
                .catch(error => {
                  console.log(error);
                  res.json(error);
                });
            });
          })
          .catch(error => {
            res.json(error);
          });
      })
      .catch(error => {
        res.json(error);
      });
  }
};

module.exports = transactionsController;
