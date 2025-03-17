const Web3 = require('web3');
const fs = require('fs');
const readline = require('readline');

const web3 = new Web3();

function askPassword(promptText) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.stdoutMuted = true;

    rl.question(promptText, password => {
      rl.close();
      resolve(password);
    });

    rl._writeToOutput = function _writeToOutput() {
      rl.output.write('*');
    };
  });
}

(async () => {
  const secretText = "my phrase 2";
  const privateKey = web3.utils.keccak256(secretText);
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);

  console.log("📬 Wallet Address:", account.address);

  const password = await askPassword("🔐 Enter password to encrypt: ");

  const keystore = web3.eth.accounts.encrypt(account.privateKey, password);

  fs.writeFileSync('./keystore.json', JSON.stringify(keystore, null, 2));
  console.log("\n✅ Keystore saved successfully as keystore.json!");
})();