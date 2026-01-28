const API_BASE = "http://localhost:4000";

export async function getBalance(address: string) {
  const res = await fetch(`${API_BASE}/balance/${address}`);
  return res.json();
}

export async function faucet(address: string) {
  const res = await fetch(`${API_BASE}/faucet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address }),
  });
  return res.json();
}

export async function sendFunds(
  from: string,
  to: string,
  amount: number
) {
  const res = await fetch("http://localhost:4000/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, amount }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Transaction failed");
  }

  return res.json();
}

export async function getTransactions(address: string) {
  const res = await fetch(
    `http://localhost:4000/transactions/${address}`
  );
  return res.json();
}
