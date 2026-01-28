"use client";

import Link from "next/link";
import { useWallet } from "../context/WalletContext";

export default function Navbar() {
  const { address, connect } = useWallet();

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white">
      {/* Left: App Name */}
      <h1 className="text-xl font-bold">
        <Link href="/">Vaibhav_HOPn</Link>
      </h1>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {address ? (
          <>
            {/* Wallet Address */}
            <span className="px-4 py-2 border rounded-lg text-sm">
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>

            {/* Navigation Links */}
            <Link
              href="/wallet"
              className="text-sm underline hover:text-gray-600"
            >
              Wallet
            </Link>

            <Link
              href="/send"
              className="text-sm underline hover:text-gray-600"
            >
              Send
            </Link>

            <Link
              href="/transactions"
              className="text-sm underline hover:text-gray-600"
            >
              Transactions
            </Link>
          </>
        ) : (
          <button
            onClick={connect}
            className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}
