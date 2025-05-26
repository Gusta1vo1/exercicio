const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a hora (0 a 23): ', (resposta) => {
  let hora = Number(resposta);

  if (hora >= 0 && hora < 6) {
    console.log("BOA MADRUGADA");
  } else if (hora < 12) {
    console.log("BOM DIA");
  } else if (hora <= 18) {
    console.log("BOA TARDE");
  } else if (hora <= 23) {
    console.log("BOA NOITE");
  } else {
    console.log("Hora inválida!");
  }

  rl.close();
});
