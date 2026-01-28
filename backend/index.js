const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* In-memory data */
const balances = {};
const transactions = [];

/* Health check */
app.get("/", (req, res) => {
  res.send("Vaibhav_HOPn backend is live");
});

/* Get wallet balance */
app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  res.json({
    balance: balances[address] || 0
  });
});

/* Faucet: add test ETH */
app.post("/faucet", (req, res) => {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }

  balances[address] = (balances[address] || 0) + 10;

  res.json({
    success: true,
    balance: balances[address]
  });
});

/* Send transaction */
app.post("/send", (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || typeof amount !== "number") {
    return res.status(400).json({ error: "Invalid transaction data" });
  }

  if ((balances[from] || 0) < amount) {
    return res.status(400).json({ error: "Insufficient balance" });
  }

  balances[from] -= amount;
  balances[to] = (balances[to] || 0) + amount;

  const tx = {
    id: uuid(),
    from,
    to,
    amount,
    status: "confirmed",
    timestamp: Date.now()
  };

  transactions.unshift(tx);

  res.json(tx);
});

/* Get transaction history */
app.get("/transactions/:address", (req, res) => {
  const { address } = req.params;

  const userTransactions = transactions.filter(
    (tx) => tx.from === address || tx.to === address
  );

  res.json(userTransactions);
});

/* Start server */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Vaibhav_HOPn backend running on port ${PORT}`);
});
