const botao_menu = document.querySelector('#menu');
const navegacao = document.querySelector('.navegacao');

botao_menu.addEventListener('click', () => {
    navegacao.classList.toggle('aberto');
    botao_menu.classList.toggle('aberto');
});

document.getElementById('ano-atual').textContent = new Date().getFullYear();

document.getElementById('ultima-modificacao').textContent = 'Última modificação: ' + document.lastModified;

