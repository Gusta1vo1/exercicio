const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notas = [];
let i = 0;

function pedirNota() {
  if (i < 4) {
    rl.question(`Digite a nota ${i + 1}: `, (resposta) => {
      let nota = parseFloat(resposta);
      if (!isNaN(nota)) {
        notas.push(nota);
        i++;
        pedirNota(); // chama de novo para próxima nota
      } else {
        console.log("Digite um número válido.");
        pedirNota(); // repete o pedido da mesma nota
      }
    });
  } else {
    // calcula média
    let soma = 0;
    for (let j = 0; j < notas.length; j++) {
      soma += notas[j];
    }
    let media = soma / notas.length;
    console.log("Média: " + media.toFixed(2));
    rl.close();
  }
}

pedirNota();
