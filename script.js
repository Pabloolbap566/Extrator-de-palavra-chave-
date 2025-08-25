const botaoMostraPalavras = document.querySelector("#botao-pablavrachave");
botaoMostraPalaras.addEventListener("click".mostraPalavraChave);
function mostraPalavrasChave(){
    const texto =document.querySelector("#entrada-de-texto").ariaValueMax;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    campoResultado.textcontent=palavraChave.join(".");
}
function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    retrn palavras;
}