"use client";

import { useEffect, useState } from "react";
import { useWallet } from "../../context/WalletContext";
import { getTransactions } from "../../lib/api";

type Tx = {
  txHash: string;
  from: string;
  to: string;
  amount: number;
  status: string;
  timestamp: number;
};

export default function TransactionsPage() {
  const { address } = useWallet();
  const [txs, setTxs] = useState<Tx[]>([]);

  useEffect(() => {
    if (!address) return;
    getTransactions(address).then(setTxs);
  }, [address]);

  if (!address) {
    return <p className="p-8">Please connect your wallet.</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">
        Transactions
      </h2>

      {txs.length === 0 && (
        <p className="text-gray-500">No transactions yet.</p>
      )}

      <div className="space-y-4">
        {txs.map((tx) => (
          <div
            key={tx.txHash}
            className="border rounded-xl p-4"
          >
            <p className="text-sm text-gray-500">
              Tx Hash: {tx.txHash}
            </p>
            <p>
              <strong>From:</strong> {tx.from}
            </p>
            <p>
              <strong>To:</strong> {tx.to}
            </p>
            <p>
              <strong>Amount:</strong> {tx.amount} TEST
            </p>
            <p className="text-sm text-green-600">
              {tx.status} •{" "}
              {new Date(tx.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
