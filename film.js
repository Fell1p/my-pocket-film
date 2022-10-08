let titulo = document.getElementById("titulo");
//let genero = document.getElementById("genero").checked;
let diretor = document.getElementById("diretor");
let duracao = document.getElementById("duracao");
let dataDeLancamento = document.getElementById("dataDeLancamento");
let dataAssistido = document.getElementById("dataAssistido");
let poster = document.getElementById("poster");
let nota = document.getElementById("nota");
let critica = document.getElementById("critica");
let botaoAdicionar = document.querySelector(".botao-adicionar")
let cartao = document.querySelector(".cards")

let filme = {}
let listaFilmes = []
let contador = 0
let estrela = `img src="./img/estrela.png" class="icone-estrela"`
let lixo = `img src="./img/lixeira.png" class="lixeira" width="15px"`
let expandir = `img src="./img/aberto.png" width="13px"`

botaoAdicionar.addEventListener("click", () => {

   // window.location.pathname = './cardsFilmes.html' 

    filme = {
        titulo: titulo.value,
        //genero: genero.value,
        diretor: diretor.value,
        duracao: duracao.value,
        dataDeLancamento: dataDeLancamento.value,
        dataAssistido: dataAssistido.value,
        poster: poster.value,
        nota: nota.value,
        critica: critica.value
    }
    listaFilmes.push(filme)

    const divCard = document.createElement("div")
    divCard.classList.add("card")

    const divCardPoster = document.createElement("div")
    divCardPoster.classList.add("poster")
    //let posterFilme = `<img src="${listaFilmes[contador].poster}">`
    //let divCardPosterImg
    //divCardPosterImg.innerHTML = posterFilme

    const divCardConteudo = document.createElement("div")
    divCardConteudo.classList.add("conteudo")

    const tituloFilme = document.createElement("h5")
    tituloFilme.classList.add("titulo")
    tituloFilme.innerText = listaFilmes[contador].titulo

    const classificacao = document.createElement("div")
    classificacao.classList.add("classificacao")

    const notaFilme = document.createElement("p")
    notaFilme.classList.add("nota")
    notaFilme.innerText = listaFilmes[contador].nota

    //let iconeEstrela
    //iconeEstrela.innerHTML = estrela

    const assistidoEm = document.createElement("p")
    assistidoEm.classList.add("dataAssistido")
    assistidoEm.innerText = listaFilmes[contador].dataAssistido

    /*const generoFilme = document.createElement("p")
    generoFilme.classList.add("genero")
    generoFilme.innerText = listaFilmes[contador].genero*/

    const containerBotoes = document.createElement("div")
    containerBotoes.classList.add("container-botoes")

    const botoesCard = document.createElement("div")
    botoesCard.classList.add("botoes-card")

   // let iconeLixeira
   // iconeLixeira.innerHTML = lixo
   // iconeLixeira.addEventListener("click", () => {
   //     listaFilmes.splice(contador, 1)
   // })

   // let botaoVerMais = document.createElement("button")
   // botaoVerMais.classList.add("botao-verMais")
    //botaoVerMais.innerHTML = 


    //containerBotoes.appendChild(botoesCard)
    //botoesCard.append(iconeLixeira, botaoVerMais)

    classificacao.append(notaFilme, /*iconeEstrela*/)
    divCardConteudo.append(tituloFilme, classificacao, assistidoEm, /*generoFilme*/)

    //divCardPoster.appendChild(divCardPosterImg)

    divCard.append(divCardPoster, divCardConteudo, classificacao, botoesCard, containerBotoes)

    cartao.appendChild(divCard)

    contador++

    
})