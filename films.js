
let botaoPesquisar = document.querySelector('.botao-pesquisar')
let inputPesquisa = document.querySelector('#pesquisaFilmes')
const modalFilme = new bootstrap.Modal("#modal-filme")
const conteudoModal = document.querySelector('.conteudo-modal')
const posterModal = document.querySelector('.poster-modal')
const tituloModal = document.querySelector('.modal-title')
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
            const divCard = document.createElement("div")
            divCard.classList.add("card")

            const divCardPoster = document.createElement("div")
            divCardPoster.classList.add("poster")
            let posterFilme = `<img src="${film.poster}" class="img-poster">`
            let posterFilme2 = `<img src="${film.poster}" class="img-poster2">`
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
            botaoVerMais.addEventListener('click', () => {
                modalFilme.show()
    
                tituloModal.innerHTML = `${film.titulo.toUpperCase()}`
                conteudoModal.innerHTML = `<strong>Gênero :</strong> ${film.genero}<br><br> <strong>Diretor :</strong> ${film.diretor}<br><br><strong>Data Assistido :</strong> ${film.dataAssistido}<br><br>  ${estrela}  <strong>${film.nota}</strong><br><br><strong>Crítica :</strong> ${film.critica}`
                posterModal.innerHTML = `${posterFilme2}`
            
            })


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
        let posterFilme2 = `<img src="${filme.poster}" class="img-poster2">`
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

            tituloModal.innerHTML = `${filme.titulo.toUpperCase()}`
            conteudoModal.innerHTML = `<strong>Gênero :</strong> ${filme.genero}<br><br> <strong>Diretor :</strong> ${filme.diretor}<br><br><strong>Data Assistido :</strong> ${filme.dataAssistido}<br><br>  ${estrela}  <strong>${filme.nota}</strong><br><br><strong>Crítica :</strong> ${filme.critica}`
            posterModal.innerHTML = `${posterFilme2}`
        
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

