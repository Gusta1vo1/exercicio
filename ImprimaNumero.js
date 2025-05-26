const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let i = 0;

function pedirNumero() {
  if (i < 5) {
    rl.question(`Digite o número ${i + 1}: `, (resposta) => {
      let num = parseFloat(resposta);
      if (!isNaN(num)) {
        numeros.push(num);
        i++;
        pedirNumero();
      } else {
        console.log("Por favor, digite um número válido.");
        pedirNumero();
      }
    });
  } else {
    // Imprimir o quadrado de cada número
    for (let j = 0; j < numeros.length; j++) {
      let quadrado = numeros[j] ** 2;
      console.log(`O quadrado de ${numeros[j]} é ${quadrado}`);
    }
    rl.close();
  }
}

pedirNumero();
