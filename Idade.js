const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let idades = [], i = 0;

function pedir() {
  if (i < 6) {
    rl.question(`Idade ${i + 1}: `, r => {
      let n = parseInt(r);
      if (!isNaN(n) && n >= 0) {
        idades.push(n);
        i++;
      } else {
        console.log("Idade inválida");
      }
      pedir();
    });
  } else {
    let maiores = idades.filter(x => x >= 18).length;
    let menores = idades.length - maiores;
    console.log(`Maiores: ${maiores}\nMenores: ${menores}`);
    rl.close();
  }
}

pedir();
