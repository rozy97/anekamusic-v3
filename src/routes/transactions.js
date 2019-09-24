const express = require("express");
const router = express.Router();

const transactionsController = require("../controllers/transactions");
const auth = require("../middleware/auth");

router
  .get(
    "/user/:id",
    auth.verifyToken,
    transactionsController.getUserTransactions
  )
  .get(
    "/month/:month",
    auth.verifyToken,
    transactionsController.getTransactionsByMonth
  )
  .post("/:id", auth.verifyToken, transactionsController.newTransaction);

module.exports = router;
