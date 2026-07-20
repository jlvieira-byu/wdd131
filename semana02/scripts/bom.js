const meu_input = document.querySelector('#favchap');
const meu_button = document.querySelector('button');
const meu_ul = document.querySelector('#list');

meu_button.addEventListener('click', function () {
    if (meu_input.value.trim() !== "") {
        const novo_li = document.createElement('li');
        const novo_botao_excluir = document.createElement('button');

        novo_li.textContent = meu_input.value;
        novo_botao_excluir.textContent = '❌';
        
        novo_botao_excluir.setAttribute('aria-label', `Excluir item ${novo_li.textContent}`);

        // adiciona botão dentro do novo li
        novo_li.append(novo_botao_excluir);

        meu_ul.append(novo_li);

        novo_botao_excluir.addEventListener('click', function () {
            meu_ul.removeChild(novo_li);
            meu_input.focus();
        });

        meu_input.value = '';
        meu_input.focus();

    } else {
        meu_input.focus();
    }
});


