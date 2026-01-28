"use client";

import { useEffect, useState } from "react";
import { useWallet } from "../../context/WalletContext";
import { getBalance, faucet } from "../../lib/api";

export default function WalletPage() {
  const { address } = useWallet();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (!address) return;

    getBalance(address).then((data) => {
      setBalance(data.balance);
    });
  }, [address]);

  const handleFaucet = async () => {
    if (!address) return;
    const data = await faucet(address);
    setBalance(data.balance);
  };

  if (!address) {
    return <p className="p-8">Please connect your wallet.</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Wallet Overview</h2>

      <div className="border rounded-xl p-6 max-w-md">
        <p className="text-sm text-gray-500">Wallet Address</p>
        <p className="break-all mb-4">{address}</p>

        <p className="text-sm text-gray-500">Balance</p>
        <p className="text-3xl font-bold mb-6">{balance} TEST</p>

        <button
          onClick={handleFaucet}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Get Test Funds
        </button>
      </div>
    </div>
  );
}
