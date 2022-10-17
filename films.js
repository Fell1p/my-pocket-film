let botaoPesquisar = document.querySelector('.botao-pesquisar')
let inputPesquisa = document.querySelector('#pesquisaFilmes')
const modalFilme = new bootstrap.Modal("#modal-filme")
const conteudoModal = document.querySelector('.modal-corpo-filme')


let cardsFilmes = document.querySelector('.cards')
let contador = 0

if (localStorage.length > 0) {
    listaFilmes = JSON.parse(localStorage.getItem('filmesArray'));

    adicionarFilme()
}

botaoPesquisar.addEventListener('click', () => {
    cardsFilmes.innerHTML = ''

    for (const film of listaFilmes) {
        if (film.titulo == inputPesquisa.value.toUpperCase()) {
            console.log(inputPesquisa)
            console.log("filme encontrado")
            const divCard = document.createElement("div")
            divCard.classList.add("card")

            const divCardPoster = document.createElement("div")
            divCardPoster.classList.add("poster")
            let posterFilme = `<img src="${film.poster}" class="img-poster">`
            divCardPoster.innerHTML = posterFilme

            const divCardConteudo = document.createElement("div")
            divCardConteudo.classList.add("conteudo")

            const tituloFilme = document.createElement("h5")
            tituloFilme.classList.add("titulo")
            tituloFilme.innerText = film.titulo

            const classificacao = document.createElement("div")
            classificacao.classList.add("classificacao")

            const iconeEstrela = document.createElement("div")
            iconeEstrela.classList.add("icone-estrela")
            let estrela = `<img src="./img/estrela.png" class="estrela">`
            iconeEstrela.innerHTML = estrela

            const notaFilme = document.createElement("p")
            notaFilme.classList.add("nota")
            notaFilme.innerText = film.nota

            const assistidoEm = document.createElement("p")
            assistidoEm.classList.add("dataAssistido")
            assistidoEm.innerText = `Assistido em: ${film.dataAssistido}`

            const generoFilme = document.createElement("p")
            generoFilme.classList.add("genero")
            generoFilme.innerText = `${film.genero} `

            const containerBotoes = document.createElement("div")
            containerBotoes.classList.add("container-botoes")

            const botoesCard = document.createElement("div")
            botoesCard.classList.add("botoes-card")


            const botaoVerMais = document.createElement("button")
            botaoVerMais.classList.add("botao-verMais")
            let btnVerMais = `<img src="./img/aberto.png" width="13px">`
            botaoVerMais.innerHTML = btnVerMais


            //Append
            botoesCard.append(botaoVerMais)
            containerBotoes.appendChild(botoesCard)

            classificacao.append(iconeEstrela, notaFilme)
            divCardConteudo.append(tituloFilme, classificacao, assistidoEm, generoFilme)

            divCard.append(divCardPoster, divCardConteudo, containerBotoes)

            cardsFilmes.appendChild(divCard)

            break

        }
        
    }

    //if(listaFilmes.find(inputPesquisa.value.toUpperCase()) == undefined){
    //    cardsFilmes.innerHTML = "Filme não encontrado!"
    //}
   

})


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
        tituloFilme.innerText = filme.titulo.toUpperCase()

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
            indice = listaFilmes.indexOf(filme)
            listaFilmes.splice(indice, 1)

            localStorage.setItem('filmesArray', JSON.stringify(listaFilmes))

            adicionarFilme()
        })

        const botaoVerMais = document.createElement("button")
        botaoVerMais.classList.add("botao-verMais")
        let btnVerMais = `<img src="./img/aberto.png" width="13px">`
        botaoVerMais.innerHTML = btnVerMais

        botaoVerMais.addEventListener('click', () => {
            modalFilme.show()
            conteudoModal.innerHTML = `${filme.titulo.toUpperCase()}<br>${filme.dataAssistido}`
        
        })


        //Append
        botoesCard.append(lixeira, botaoVerMais)
        containerBotoes.appendChild(botoesCard)

        classificacao.append(iconeEstrela, notaFilme)
        divCardConteudo.append(tituloFilme, classificacao, assistidoEm, generoFilme)

        divCard.append(divCardPoster, divCardConteudo, containerBotoes)

        cardsFilmes.appendChild(divCard)

        contador++

     
    }
}

