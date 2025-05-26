const hoje = new Date();

let diaSemana = hoje.getDay();   // 0 (Domingo) a 6 (Sábado)
let mesAtual = hoje.getMonth();  // 0 (Janeiro) a 11 (Dezembro)

const diasTexto = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const mesesTexto = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log("Hoje é:", diasTexto[diaSemana]);
console.log("Mês atual:", mesesTexto[mesAtual]);
