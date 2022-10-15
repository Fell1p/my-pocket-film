//Integração do HTML com JS
let titulo = document.getElementById("titulo");
let diretor = document.getElementById("diretor");
let dataAssistido = document.getElementById("dataAssistido");
let poster = document.getElementById("poster");
let nota = document.getElementById("nota");
let critica = document.getElementById("critica");
let botaoAdicionar = document.querySelector(".botao-adicionar")
let form = document.querySelector('.caixas')
let cardsFilmes = document.querySelector('.cards')
let listaFilmes = []
let filme = {}
let listaGenero = ["Terror", "Ficção", "Drama", "Romance", "Comédia", "Ação", "Comédia Romantica", "Suspense", "Animação", "Documentário"]
let contador = 0

if(localStorage.length > 0) {
    listaFilmes = JSON.parse(localStorage.getItem('filmesArray'));

    adicionarFilme() 
}

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
        titulo: titulo.value,
        genero: genero,
        diretor: diretor.value,
        dataAssistido: dataAssistido.value,
        poster: poster.value,
        nota: nota.value,
        critica: critica.value
    }

    listaFilmes.push(filme)

    localStorage.setItem('filmesArray', JSON.stringify(listaFilmes))

    adicionarFilme()


})

//Construção de elementos no HTML
function adicionarFilme() {

    cardsFilmes.innerHTML = ''
    // window.location.pathname = './cardsFilmes.html' 

    for (const filme of listaFilmes) {
        const divCard = document.createElement("div")
        divCard.classList.add("card")

        const divCardPoster = document.createElement("div")
        divCardPoster.classList.add("poster")
        let posterFilme = `<img src="${filme.poster}" class="img-poster">`
        divCardPoster.innerHTML = posterFilme

        const divCardConteudo = document.createElement("div")
        divCardConteudo.classList.add("conteudo")

        const tituloFilme = document.createElement("h5")
        tituloFilme.classList.add("titulo")
        tituloFilme.innerText = filme.titulo

        const classificacao = document.createElement("div")
        classificacao.classList.add("classificacao")

        const iconeEstrela = document.createElement("div")
        iconeEstrela.classList.add("icone-estrela")
        let estrela = `<img src="./img/estrela.png" class="estrela">`
        iconeEstrela.innerHTML = estrela

        const notaFilme = document.createElement("p")
        notaFilme.classList.add("nota")
        notaFilme.innerText = filme.nota

        const assistidoEm = document.createElement("p")
        assistidoEm.classList.add("dataAssistido")
        assistidoEm.innerText = `Assistido em: ${filme.dataAssistido}`

        const generoFilme = document.createElement("p")
        generoFilme.classList.add("genero")
        generoFilme.innerText = `${filme.genero} `

        const containerBotoes = document.createElement("div")
        containerBotoes.classList.add("container-botoes")

        const botoesCard = document.createElement("div")
        botoesCard.classList.add("botoes-card")

        const lixeira = document.createElement("button")
        lixeira.classList.add("lixeira")
        let iconeLixeira = `<img src="./img/lixeira.png" class="lixeira" width="15px">`
        lixeira.innerHTML = iconeLixeira
        lixeira.addEventListener("click", () => {
            indice = listaFilmes[contador]
            listaFilmes.splice(indice, 1)

            localStorage.setItem('filmesArray', JSON.stringify(listaFilmes))

            adicionarFilme()
        })

        const botaoVerMais = document.createElement("button")
        botaoVerMais.classList.add("botao-verMais")
        let btnVerMais = `<img src="./img/aberto.png" width="13px">`
        botaoVerMais.innerHTML = btnVerMais


        //Append
        botoesCard.append(lixeira, botaoVerMais)
        containerBotoes.appendChild(botoesCard)

        classificacao.append(iconeEstrela, notaFilme)
        divCardConteudo.append(tituloFilme, classificacao, assistidoEm, generoFilme)

        divCard.append(divCardPoster, divCardConteudo, containerBotoes)

        cardsFilmes.appendChild(divCard)

        contador++

        document.querySelector(".caixas").reset()
    }
}
