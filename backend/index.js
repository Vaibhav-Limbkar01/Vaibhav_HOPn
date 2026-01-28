import express from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://vaibhav-hopn.vercel.app"
    ]
  })
);

// In-memory ledger
const balances = {};
const transactions = [];

/**
 * Get wallet balance
 */
app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.json({ balance });
});

/**
 * Faucet (add test ETH)
 */
app.post("/faucet", (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: "Address required" });
  }

  balances[address] = (balances[address] || 0) + 10;

  res.json({
    success: true,
    balance: balances[address]
  });
});

/**
 * Send transaction
 */
app.post("/send", (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: "Invalid transaction" });
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

/**
 * Get transactions
 */
app.get("/transactions/:address", (req, res) => {
  const { address } = req.params;

  const userTx = transactions.filter(
    (tx) => tx.from === address || tx.to === address
  );

  res.json(userTx);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
