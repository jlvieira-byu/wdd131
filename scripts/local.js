const temperatura = 10;
const velocvento = 9;

function calcularSensacaoTermica(temp, vento) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

let sensacao;
if (temperatura <= 10 && velocvento > 4.8) {
    sensacao = calcularSensacaoTermica(temperatura, velocvento).toFixed(1) + " °C";
} else {
    sensacao = "N/A";
}


document.getElementById("temperatura").textContent = temperatura + " °C";
document.getElementById("vento").textContent = velocvento + " km/h";
document.getElementById("sensacao").textContent = calcularSensacaoTermica(temperatura, velocvento).toFixed(1);


document.getElementById('ano-atual').textContent = new Date().getFullYear();
document.getElementById('ultima-modificacao').textContent = 'Última modificação: ' + document.lastModified;
