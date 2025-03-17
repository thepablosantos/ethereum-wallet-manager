# Ethereum Wallet Manager

A simple Node.js project to manage Ethereum wallets. It allows you to:

- Generate Ethereum wallets (address + private key)
- Encrypt private keys into Keystore JSON files (V3 format) using password protection
- Decrypt Keystore JSON files to recover wallets securely

### 🔧 Technologies Used

- [Web3.js](https://web3js.readthedocs.io/) (v1.x)
- Node.js
- Standard Node.js modules (`fs`, `readline`)

---

## 📂 Project Structure

```
├── node_modules/
├── keystore.json                # Generated keystore (ignored by .gitignore)
├── wallet_encrypt.js            # Script to generate and encrypt wallet
├── wallet_decrypt.js            # Script to decrypt keystore and recover wallet
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Usage

### 1. Install dependencies:

```bash
npm install web3@1.10.0
```

---

### 2. Generate and encrypt wallet:

```bash
node wallet_encrypt.js
```
- You will be prompted to enter a password.
- The wallet address will be displayed.
- A `keystore.json` file will be generated.

---

### 3. Decrypt keystore:

```bash
node wallet_decrypt.js
```
- Enter the same password used during encryption.
- The wallet address and private key will be displayed.

---

## 🔒 Security Note:

For security reasons:
- **Passwords are never hardcoded**.
- **Keystore files are listed in `.gitignore` by default** to prevent accidental exposure.

---

## 📌 Future Improvements:

- Create a CLI tool to manage multiple wallets.
- Add option to generate random mnemonic seeds.
- Add transaction signing and sending functionality.

---

## 📜 License

MIT License - Feel free to use and modify!
