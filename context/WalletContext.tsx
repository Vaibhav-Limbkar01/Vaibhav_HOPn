"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { connectWallet } from "../lib/wallet";

type WalletContextType = {
  address: string | null;
  connect: () => Promise<void>;
};

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);

  const connect = async () => {
    try {
      const addr = await connectWallet();
      setAddress(addr);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <WalletContext.Provider value={{ address, connect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used inside WalletProvider");
  }
  return context;
}
