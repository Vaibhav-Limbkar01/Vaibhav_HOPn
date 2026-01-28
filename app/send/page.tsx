"use client";

import { useState } from "react";
import { useWallet } from "../../context/WalletContext";
import { sendFunds } from "../../lib/api";

export default function SendPage() {
  const { address } = useWallet();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  if (!address) {
    return <p className="p-8">Please connect your wallet.</p>;
  }

  const handleSend = async () => {
    try {
      setStatus("Sending...");
      await sendFunds(address, to, Number(amount));
      setStatus("Transaction confirmed");
      setTo("");
      setAmount("");
    } catch (err: any) {
      setStatus(err.message);
    }
  };

  return (
    <div className="p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6">Send Funds</h2>

      <input
        type="text"
        placeholder="Receiver address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <button
        onClick={handleSend}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Send
      </button>

      {status && (
        <p className="mt-4 text-sm text-gray-600">{status}</p>
      )}
    </div>
  );
}
