const express = require("express");
const router = express.Router();

const itemRouter = require("./items");
const categoryRouter = require("./categories");
const branchRouter = require("./branch");
const userRouter = require("./user");
const wishlistRouter = require("./wishlist");
const cartRouter = require("./cart");
const transactionsRouter = require("./transactions");

router.use("/items", itemRouter);
router.use("/categories", categoryRouter);
router.use("/branch", branchRouter);
router.use("/user", userRouter);
router.use("/wishlist", wishlistRouter);
router.use("/cart", cartRouter);
router.use("/transactions", transactionsRouter);

module.exports = router;
