# Vaibhav_HOPn

### Decentralized Revolut-Style Web Application (MVP)

---

## 📌 Overview

**Vaibhav_HOPn** is a decentralized, Revolut-inspired fintech web application built as a **Minimum Viable Product (MVP)**.
It demonstrates core financial features such as wallet-based authentication, balance tracking, and peer-to-peer transactions using a decentralized architecture.

⚠️ This project is **for demo and evaluation purposes only**.
It is **not a production banking system**.

---

## 🌐 Live Demo

* **Frontend (Vercel)**
  👉 [https://vaibhav-hopn.vercel.app](https://vaibhav-hopn.vercel.app)

* **Backend (Render)**
  👉 [https://vaibhav-hopn-backend.onrender.com](https://vaibhav-hopn-backend.onrender.com)

---

## 🧱 Architecture Overview

```
User Browser
     |
     |  MetaMask Wallet (Address-based Auth)
     |
Next.js Frontend (Vercel)
     |
     |  REST API Calls
     |
Node.js Backend (Render)
     |
In-Memory Ledger (Address-based)
```

### Key Architectural Principles

* No usernames or passwords
* Wallet address = user identity
* Stateless backend
* Decentralized-style ledger simulation
* Clean separation of frontend and backend

---

## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* ethers.js
* MetaMask Wallet
* Deployed on **Vercel**

### Backend

* Node.js
* Express.js
* UUID
* CORS
* In-memory data store
* Deployed on **Render**

---

## 🔐 Authentication

* Wallet-based authentication using **MetaMask**
* No traditional login (username/password)
* User identity is derived from wallet address
* Session handled client-side

---

## 💰 Core Features

### Wallet

* Connect MetaMask wallet
* Display wallet address
* View token balance (test ETH)

### Faucet

* Request test ETH
* Address-based crediting

### Transactions

* Send funds wallet-to-wallet
* Receive funds
* Transaction metadata:

  * Sender
  * Receiver
  * Amount
  * Timestamp
  * Status
  * Transaction ID

### Dashboard

* Wallet overview
* Balance summary
* Navigation between features

---

## 🧪 How to Test the Application (Manual)

1. Open the live frontend URL
2. Click **Connect Wallet**
3. Approve MetaMask connection
4. Go to **Wallet**
5. Click **Get Test Funds**
6. Navigate to **Send**
7. Send funds to another wallet address
8. View history under **Transactions**

---

## 🤖 AI-Assisted Development

AI tools were actively used during development to improve speed and quality.

### AI Usage Included:

* Boilerplate generation
* UI component scaffolding
* Backend API design
* Debugging assistance
* Documentation drafting

### Tools Used:

* ChatGPT
* GitHub Copilot (optional)

All generated content was **reviewed, modified, and integrated manually**.

---

## ⚠️ Known Limitations

* No real blockchain transactions
* No persistence (data resets on backend restart)
* No fiat currency integration
* No KYC or compliance checks
* No smart contract interaction
* Designed only for MVP/demo purposes

---

## 📂 Repository Structure

```
Vaibhav_HOPn/
├── app/                # Next.js pages (App Router)
├── components/         # Reusable UI components
├── context/            # Wallet context
├── lib/                # API helpers
├── backend/            # Node.js backend
│   ├── index.js
│   └── package.json
├── public/
├── README.md
```

---

## 🚀 Deployment

### Frontend

* Hosted on **Vercel**
* Automatic deployment from GitHub

### Backend

* Hosted on **Render**
* Node.js Web Service
* REST API exposed publicly

---

## 📜 License

This project is provided for educational and evaluation purposes only.
No license is implied for production or commercial use.

---

## ✅ Submission Checklist

| Requirement           | Status |
| --------------------- | ------ |
| Live Demo URL         | ✅      |
| GitHub Repository     | ✅      |
| Frontend              | ✅      |
| Backend               | ✅      |
| Wallet Authentication | ✅      |
| Transactions          | ✅      |
| README Documentation  | ✅      |
| AI Usage Disclosure   | ✅      |

---


Just tell me.
