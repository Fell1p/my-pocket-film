let titulo = document.getElementById("titulo");
let genero = document.getElementById("genero").checked;
let diretor = document.getElementById("diretor");
let duracao = document.getElementById("duracao");
let dataDeLancamento = document.getElementById("dataDeLancamento");
let dataAssistido = document.getElementById("dataAssistido");
let poster = document.getElementById("poster");
let nota = document.getElementById("nota");
let critica = document.getElementById("critica");
let botaoAdicionar = document.querySelector(".botao-adicionar")

let filme = {}
let listaFilmes = []

botaoAdicionar.addEventListener("click", () => {
    filme = {
        titulo: titulo.value,
        genero: genero.value,
        diretor: diretor.value,
        duracao: duracao.value,
        dataDeLancamento: dataDeLancamento.value,
        dataAssistido: dataAssistido.value,
        poster: poster.value,
        nota: nota.value,
        critica: critica.value
    }
    listaFilmes.push(filme)    
})