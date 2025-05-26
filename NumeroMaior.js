const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let nums = [], i = 0;

function pergunta() {
  if (i < 5) {
    rl.question(`Número ${i + 1}: `, res => {
      let n = parseFloat(res);
      if (!isNaN(n)) {
        nums.push(n);
        i++;
      } else {
        console.log("Número inválido");
      }
      pergunta();
    });
  } else {
    console.log("Maior número:", Math.max(...nums));
    rl.close();
  }
}

pergunta();
