const hoje = new Date();

let diaSemana = hoje.getDay();     // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
let mesAtual = hoje.getMonth();    // 0 = Janeiro, 1 = Fevereiro, ..., 11 = Dezembro

console.log("Número do dia da semana:", diaSemana);
console.log("Número do mês atual:", mesAtual);
