const DIAS = 6;
const LIMITE = 30;
let relatorioEstudante = [11, 42, 33, 64, 29, 37, 44];


//Escreva loops que percorrerão o array relatorioEstudante e mostrará no console
// o valor atual do array se ele for menor que 30.
console.log('Teste com FOR:')

for (i = 0; i < relatorioEstudante.length; i++) {
    if (relatorioEstudante[i] < LIMITE)
        console.log(`Menor que ${LIMITE}: ${relatorioEstudante[i]}`);
}


console.log('Teste com WHILE:')

let j = 0;
while (j < relatorioEstudante.length) {
    if (relatorioEstudante[j] < LIMITE) {
        console.log(`Menor que ${LIMITE}: ${relatorioEstudante[j]}`);
    }

    j++;
}


console.log('Teste com DO..WHILE:')

let m = 0;
do {
    if (relatorioEstudante[m] < LIMITE) {
        console.log(`Menor que ${LIMITE}: ${relatorioEstudante[m]}`);
    }

    m++;
} while (m < relatorioEstudante.length);


console.log('Teste com forEach com arrow funtion:')

relatorioEstudante.forEach((valor) => {
    if (valor < LIMITE)
        console.log(`Menor que ${LIMITE}: ${valor}`);
});


console.log('Teste com forEach com padrão antes ECMAScript 2015 / ES6:')

relatorioEstudante.forEach(function (valor) {
    if (valor < LIMITE)
        console.log(`Menor que ${LIMITE}: ${valor}`);
});


console.log('Teste com FOR...IN:')

for (k in relatorioEstudante) {
    if (relatorioEstudante[k] < LIMITE)
        console.log(`Menor que ${LIMITE}: ${relatorioEstudante[k]}`);
}


console.log('Teste com FOR...OF:')

for (valor of relatorioEstudante) {
    if (valor < LIMITE)
        console.log(`Menor que ${LIMITE}: ${valor}`);
}


//produzir dinamicamente os nomes dos dias (segunda-feira, terça-feira, quarta-feira etc.)
// do próximo número de DIAS a partir da data de hoje

//explicação em: https://chatgpt.com/s/t_6a5b5709ea408191aa9b7c98eb2a64b3

//********* NO HTML ***********/
// obtenha o local de saída no documento a ser anexado na lista
//usando querySelector
const output = document.querySelector("ul");;//usando HTMLCollection ->  const output = document.getElementsByTagName("ul");

// data de hoje
const hoje = new Date();
// saída com o dia de hoje por extenso
let hojestring = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(hoje);
// ALTERNATIVA com Intl.DateTimeFormat Opções:
// const options = { weekday: 'long' }; // vs. short, etc.
// let hojestring = new Intl.DateTimeFormat('pt-BR', options).format(hoje);

document.getElementById('hoje').innerHTML = `Hoje é ${hojestring}. `;


// próximos n dias
for (let i = 1; i <= DIAS; i++) {
    let diaseguinte = new Date();
    diaseguinte.setDate(hoje.getDate() + i);

    let diaseguintestring = new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(diaseguinte);

    let item = document.createElement("li");
    item.textContent = diaseguintestring;

    output.appendChild(item); //usando HTMLCollection ->   output[0].appendChild(item);
}


//********* NO CONSOLE ***********/
const HOJE = new Date();

let hojeporextenso = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(HOJE);
console.log(`Hoje é ${hojeporextenso}. Próximos ${DIAS} dias:`);

let diasparafrente = new Date();

for (let i = 0; i < DIAS; i++) {
    diasparafrente.setDate(diasparafrente.getDate() + 1);

    let diasparafrenteporextenso = new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(diasparafrente);

    console.log(diasparafrenteporextenso);
}

var jun = document.