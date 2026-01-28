const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * In-memory decentralized ledger
 * address => { balance, transactions[] }
 */
const ledger = {};

// Helper: ensure wallet exists
function initWallet(address) {
  if (!ledger[address]) {
    ledger[address] = {
      balance: 0,
      transactions: [],
    };
  }
}

// Faucet (give test funds)
app.post("/faucet", (req, res) => {
  const { address } = req.body;
  if (!address) return res.status(400).json({ error: "Address required" });

  initWallet(address);
  ledger[address].balance += 1000;

  res.json({
    address,
    balance: ledger[address].balance,
  });
});

// Get balance
app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  initWallet(address);

  res.json({
    address,
    balance: ledger[address].balance,
  });
});

// Send funds
app.post("/send", (req, res) => {
  const { from, to, amount } = req.body;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: "Invalid transaction" });
  }

  initWallet(from);
  initWallet(to);

  if (ledger[from].balance < amount) {
    return res.status(400).json({ error: "Insufficient balance" });
  }

  const tx = {
    txHash: uuidv4(),
    from,
    to,
    amount,
    status: "confirmed",
    timestamp: Date.now(),
  };

  ledger[from].balance -= amount;
  ledger[to].balance += amount;

  ledger[from].transactions.push(tx);
  ledger[to].transactions.push(tx);

  res.json(tx);
});

// Get transactions
app.get("/transactions/:address", (req, res) => {
  const { address } = req.params;
  initWallet(address);

  res.json(ledger[address].transactions);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on ${PORT}`);
});
