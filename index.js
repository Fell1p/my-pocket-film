//Integração do HTML com JS
let titulo = document.getElementById("titulo");
let diretor = document.getElementById("diretor");
let dataAssistido = document.getElementById("dataAssistido");
let poster = document.getElementById("poster");
let nota = document.getElementById("nota");
let critica = document.getElementById("critica");
let botaoAdicionar = document.querySelector(".botao-adicionar")
let form = document.querySelector('.caixas')
let listaFilmes = []
let filme = {}
let listaGenero = ["Terror", "Ficção", "Drama", "Romance", "Comédia", "Ação", "Comédia Romantica", "Suspense", "Animação", "Documentário"]
const alertaFilmeCadastrado = new bootstrap.Modal("#alerta")


//Desenvolvimento dos eventos de criação do objeto e exclusão do mesmo
form.addEventListener("submit", function (evento) {
    evento.preventDefault() //cancela o comportamento padrão de um formulario que seria o recarregamento da página 
    evento.stopPropagation() //evita que a emissão do evento se propague para outros elementos

    var elementos = document.getElementsByClassName("genero");
    let genero = []

    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            genero.push(listaGenero[i])
        }
    }

    filme = {
        titulo: titulo.value.toUpperCase(),
        genero: genero,
        diretor: diretor.value,
        dataAssistido: dataAssistido.value,
        poster: poster.value,
        nota: nota.value,
        critica: critica.value
    }

    listaFilmes.push(filme)

    localStorage.setItem('filmesArray', JSON.stringify(listaFilmes))

   // adicionarFilme()
   document.querySelector(".caixas").reset()

   alertaFilmeCadastrado.show()


})

