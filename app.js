// Cria um ID para inserção no código HTML chamado "card-item"
let cardIntro = document.getElementById("card-item"); 

// Inicializa uma string vazia para armazenar informações
let resultadoCard = "";

// Itera sobre cada dado de card em um array chamado 'intro'
// Presume-se que 'intro' seja um array de objetos com as propriedades 'link', 'imagem' e 'titulo'
for (let dadoCard of intro) {

    // Cria uma nova string para cada card, construindo a estrutura HTML
    resultadoCard +=`
        <div>
            <a href="${dadoCard.link}">
                ${dadoCard.imagem}
            </a>
            <h2>
                <a class="link2" href="${dadoCard.link}">
                    ${dadoCard.titulo}
                </a>
            </h2>
        </div>
    `;
};

// Insere o HTML gerado dentro do elemento com o ID "card-item"
cardIntro.innerHTML = resultadoCard;



// Cria um ID para inserção no código HTML chamado "featured-section"
let featuredItens = document.getElementById("featured-section");

// Inicializa uma string vazia para armazenar informações
let itemResult = "";

// Itera sobre cada dado de card em um array chamado 'featureds'
// Presume-se que 'featureds' seja um array de objetos com as propriedades 'link', 'imagem', 'texto' e 'titulo'
for (let dadoFeatured of featureds) {
    itemResult += `
        <div class="featured-environment">
            <a href="${dadoFeatured.link}" target="_blank">
                ${dadoFeatured.imagem}
            </a>
            <div class="featured-text">
                <h2 class="h2-space">
                    <a class="link2" href="${dadoFeatured.link}" target="_blank">
                        ${dadoFeatured.titulo}
                    </a>
                </h2>
                <p>
                    ${dadoFeatured.texto} 
                    <br>
                    <a class="link2" href="${dadoFeatured.link}" target="_blank">
                        Saiba mais.
                    </a>
                </br>
                </p>
            </div>
        </div>
    `
};

// Insere o HTML gerado dentro do elemento com o ID "featured-section"
featuredItens.innerHTML = itemResult;



// Cria um ID para inserção no código HTML chamado "featured-section"
let chaptersResume = document.getElementById("manga-environment");

// Inicializa uma string vazia para armazenar informações
let chapter = "";

// Itera sobre cada dado de card em um array chamado 'lastThreeChap'
// Presume-se que 'lastThreeChap' seja um array de objetos com as propriedades 'number', 'title', 'date', 'resume', 'link' e 'pages'
for (let dadoChapter of lastThreeChap) {
    chapter += `
        <div class="manga-resume">
            <h1>Capítulo ${dadoChapter.number}</h1>
            <h2>${dadoChapter.title}</h2>
            <h3>${dadoChapter.date}</h3>
            <h4>Resumo • One Piece</h4>
            ${dadoChapter.resume}
            <h4><a href="${dadoChapter.link}" target="_blank">Saiba mais sobre o capítulo<i class="fas fa-arrow-left" style="margin-left: 10px;"></i></a></h4>
            <div>
                <i class="fas fa-book" style="color: #fff4e6; border:solid; border-radius: 1.5rem; padding:0.5rem;"> ${dadoChapter.pages} Páginas</i>
            </div>
        </div>
    `
};

// Insere o HTML gerado dentro do elemento com o ID "featured-section"
chaptersResume.innerHTML = chapter;



// Cria um ID para inserção no código HTML chamado "anime-environment"
let epResume = document.getElementById("anime-environment");

// Inicializa uma string vazia para armazenar informações
let episode = "";

// Itera sobre cada dado de card em um array chamado 'lastThreeEp'
// Presume-se que 'lastThreeChap' seja um array de objetos com as propriedades 'number', 'title', 'subtitle', 'date', 'linkView', 'linkKnow', 'pages', 'thumb' e 'sinopse'
for (let dadoEp of lastThreeEp) {
    episode += `
        <div class="anime-resume">
            <h1>Episódio ${dadoEp.number}</h1>
            <h2>${dadoEp.title}</h2>
            <h3>${dadoEp.subtitle}</h3>
            <h4>${dadoEp.date}</h4>
            <a href="${dadoEp.linkView}" target="_blank"><img src="${dadoEp.thumb}" alt=""></a>
            <h5>Sinopse • One Piece</h5>
            <p class="anime-description">${dadoEp.sinopse}</p>
            <h5><a href="${dadoEp.linkKnow}" target="_blank">Saiba mais sobre o capítulo<i class="fas fa-arrow-left" style="margin-left: 10px;"></i></a></h5>
        </div>
    `
};

// Insere o HTML gerado dentro do elemento com o ID "anime-environment"
epResume.innerHTML = episode;



// Cria um ID para inserção no código HTML chamado "arcs-environment"
let arcResume = document.getElementById("arcs-environment");

// Inicializa uma string vazia para armazenar informações
let arc = "";

// Itera sobre cada dado de card em um array chamado 'arcs'
// Presume-se que 'arcs' seja um array de objetos com as propriedades 'sagaName', 'desc', 'date', 'link', 'image', 'resume', 'manga' e 'anime'
for (let dadoArc of arcs) {
    arc += `
        <div class="arcs-resume">
            <h1>${dadoArc.sagaName}</h1>
            <h2>${dadoArc.desc}</h2>
            <h3>${dadoArc.date}</h3>
            <a href="${dadoArc.link}" target="_blank">
                <img src="${dadoArc.image}" alt="">
            </a>
            <p class="arcs-description">${dadoArc.resume}</p>
            <h4>Mangá: ${dadoArc.manga}</h4>
            <h4>Anime: ${dadoArc.anime}</h4>
            <h5><a href="${dadoArc.link}" target="_blank">Saiba mais sobre o arco<i class="fas fa-arrow-left" style="margin-left: 10px;"></i></a></h5>
        </div>
    `
};

// Insere o HTML gerado dentro do elemento com o ID "arcs-environment"
arcResume.innerHTML = arc;



// Função para executar pesquisas na base de dados
function pesquisar(){
    // Cria um ID para inserção no código HTML chamado "resultados-pesquista"
    let section = document.getElementById("resultados-pesquisa");

    // Cria um ID para inserção no código HTML chamado "campo-pesquista" focado para realizar pesquisas no banco de dados
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa strings vazias para armazenar informações
    let resultados = "";
    let nome = "";
    let titulo = "";
    let tripulacao = "";
    let descricao = "";

    // Se o campo de pesquisa estiver vazio, retorna uma imagem com a frase "de quem você tá falando? Não entendi direito, poderia repetir?"
    if (campoPesquisa == ""){
        section.innerHTML = `<img src="images/Quem.png" style="height: 31rem; position:relative; left:15rem;">`
        return
    };

    // Faz com que tudo inserido no campo de pesquisa se transforme em letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Itera sobre cada dado de num array chamado 'characters'
    // Presume-se que 'characters' seja um array de objetos com as propriedades 'nome', 'titulo', 'tripulacao', 'recompensa', 'image', 'descricao' e 'link'
    for (let dado of characters){

        // Faz com que os atributos de 'nome', 'titulo', 'tripulacao' e 'descricao' se tranformem em letras minusculas para comparar com o campo de pesquisa
        nome = dado.nome.toLowerCase();
        titulo = dado.titulo.toLowerCase();
        tripulacao = dado.tripulacao.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        // Condicional para comparar o campo de pesquisa com a base de dados
        if (nome.includes(campoPesquisa) || titulo.includes(campoPesquisa) || tripulacao.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            // Para cada item, cria uma nova string de HTML para representar um resultado da pesquisa
            resultados += `
                <div class="item-resultado-pesquisa"> 
                    <h2> 
                        <a href="#" target="_blank"> 
                            ${dado.nome} <br>- ${dado.titulo} -</br>
                        </a>
                    </h2>
                    <h3>
                        ${dado.tripulacao}
                    </h3>
                    <img src="${dado.image}" alt="">
                    <h3>
                        ฿ ${dado.recompensa}
                    </h3>
                    <p class="descricao-meta-pesquisa">
                        ${dado.descricao}
                    </p>
                    <a href=${dado.link} target="_blank"> 
                        Mais informações
                    </a>
                </div>
            `
        };
    };

    // Se não houverem resultados na pesquisa condizentes com a base de dados, retorna uma imagem com a frase "Esse ai eu não conheço! Pergunta sobre outra pessoa!"
    if (!resultados){
        resultados = `<img src="images/nao-conheco.png" style="height: 31rem; position:relative; left:15rem;">`
    };

    // Atribui a string com todos os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
};