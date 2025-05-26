const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite sua senha: ", (senha) => {
  if (senha.length < 12) {
    console.log("Senha inválida");
  } else {
    console.log("Seja bem-vindo ao SENAI");
  }
  rl.close();
});
