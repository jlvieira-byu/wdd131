//const anocorrente = new Date().getFullYear();
//document.getElementById('ano-atual').textContent = anocorrente;

document.getElementById('ano-atual').textContent = new Date().getFullYear();

document.getElementById('ultima-modificacao').textContent = 'Última modificação: ' + document.lastModified;