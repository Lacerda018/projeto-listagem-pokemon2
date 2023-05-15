
const botaoAlterarTema = document.getElementById('botao-alterar-tema');
const imagemBotaoTrocaDeTema = document.querySelector('.imagem-botao')
const body = document.querySelector("body")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains('modo-escuro')
    if (modoEscuroEstaAtivo){
        body.classList.remove('modo-escuro')
        imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/sun.png')        
    }else{
        body.classList.add('modo-escuro');
        imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/moon.png')
    }
});
