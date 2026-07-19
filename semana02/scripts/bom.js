const meu_input = document.querySelector('#favchap');
const meu_button = document.querySelector('button');
const meu_ul = document.querySelector('#list');

const novo_li = document.createElement('li');
const novo_botao_excluir= document.createElement('button');

novo_li.textContent = meu_input.value;

novo_botao_excluir.textContent = '❌';
novo_botao_excluir.setAttribute('aria-label', 'Excluir item'); //tentar fazer alterar esse aria-label com o valor respectivo do capútlo de escritura adicionado

novo_li.append(novo_botao_excluir);

meu_ul.append(novo_li);

