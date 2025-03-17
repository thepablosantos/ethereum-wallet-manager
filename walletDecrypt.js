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
  const keystore = JSON.parse(fs.readFileSync('./keystore.json', 'utf8'));

  const password = await askPassword("🔐 Enter password to decrypt: ");

  try {
    const decryptedAccount = web3.eth.accounts.decrypt(keystore, password);
    console.log("\n🔓 Account successfully decrypted:");
    console.log("Address:", decryptedAccount.address);
    console.log("Private Key:", decryptedAccount.privateKey);
  } catch (error) {
    console.log("\n❌ Incorrect password or invalid keystore file.");
  }
})();