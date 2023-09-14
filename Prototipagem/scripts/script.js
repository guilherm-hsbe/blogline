// Oculta/revela a barra de pesquisa ao acionar botão de pesquisa
const toggleButton = document.getElementById('botaoPesquisa');
const inputElement = document.getElementById('barraPesquisa');
const formElement = document.getElementById('secaoPesquisa');

toggleButton.addEventListener('click', function() {
    if (inputElement.classList.contains('show')) {
        inputElement.classList.remove('show');
        formElement.style.backgroundColor = '#fff0';
    } 
    else { 
        inputElement.classList.add('show'); 
        formElement.classList.add('bs-light-bg-subtle');
        formElement.style.backgroundColor = '#ecf2f4'
    }
});