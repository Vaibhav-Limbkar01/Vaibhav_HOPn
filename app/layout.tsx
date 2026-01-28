import "./globals.css";
import { WalletProvider } from "../context/WalletContext";

export const metadata = {
  title: "Vaibhav_HOPn",
  description: "Revolut-style decentralized finance MVP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
