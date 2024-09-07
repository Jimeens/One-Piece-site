let intro = [
    {
        imagem: `<img class="card" src="images/One-Piece-Characters.jpg" alt="">`,
        titulo: "Personagens",
        link: "https://onepiece.fandom.com/wiki/Category:Characters"
    },
    {
        imagem: `<img class="card" src="images/One-Piece-Manga-1125.jpg" alt="">`,
        titulo: "Mangá",
        link: "https://onepiece.fandom.com/wiki/One_Piece_(Manga)"
    },
    {
        imagem: `<img class="card" src="images/One-Piece-Anime.png" alt="">`,
        titulo: "Anime",
        link: "https://onepiece.fandom.com/wiki/One_Piece_(Anime)"
    }
];

let featureds = [
    {
        imagem: `<img class="featured-circle" src="images/Featured-below.png" alt="">`,
        titulo: "Punk records rumo a waetheria",
        texto: `Após descobrirmos que Vegapunk está vivo, a Punk records sai voando rumo a Waetheria."`,
        link: "https://onepiece.fandom.com/wiki/Chapter_1125",
    },
    {
        imagem: `<img class="featured-circle" src="images/Featured-middle.png" alt="">`,
        titulo: "Imu-sama executa Saturn",
        texto: `Enquanto definha, Saturn escuta "Saturn, por que você deixou Joyboy escapar?!"`,
        link: "https://onepiece.fandom.com/wiki/Chapter_1125",
    },
    {
        imagem: `<img class="featured-circle" src="images/Featured-above.png" alt="">`,
        titulo: "Garling torna-se um Gorosei",
        texto: `Figarland Garling torna-se o "Deus Guerreiro da Ciência e da Defesa".`,
        link: "https://onepiece.fandom.com/wiki/Chapter_1125",
    },
];

let lastThreeChap = [
    {
        number: "1124",
        title: "Melhor Amigo<br></br>",
        date: "26 de Agosto de 2024",
        resume: `
                <p class="manga-description">Vivi entra em uma discussão com Morgans quando ele decide anunciar Luffy como o assassino do Dr. Vegapunk. <br></br>
                Kizaru responde ao chamado de Sakazuki, perguntando se ele já matou o melhor amigo, lembrando seu passado com Vegapunk. <br></br>
                Em Elbaf uma figura misteriosa está esperando pelos Piratas do Chapéu de Palha.</p>
                `,
        link: "https://onepiece.fandom.com/wiki/Chapter_1124",
        pages: "13",
    },
    {
        number: "1123",
        title: "As Duas Semanas Em Branco",
        date: "19 de Agosto de 2024",
        resume: `
            <p class="manga-description">Com os Marinheiros nocauteados pelo estouro de Haki, os Piratas do Chapéu de Palha e seus aliados partem rumo a Elbaf. <br></br>
            Enquanto Sanji paira sobre o corpo de Vegapunk, um flashback de Stella, Shaka e Pitágoras ocorre. <br></br>
            Percebendo sua condenação, eles secretamente gravaram sua mensagem e apagaram todo conhecimento sobre suas últimas conversas.</p>
        `,
        link: "https://onepiece.fandom.com/wiki/Chapter_1123",
        pages: "17",
    },
    {
        number: "1122",
        title: "O Momento Certo<br></br>",
        date: "5 de Agosto de 2024",
        resume: `
            <p class="manga-description">Barba Negra concorda em se encontrar com Caribou para ouvir o que ele tem a dizer, enquanto o ataque ao Gigante de Ferro encerra a transmissão permanentemente. <br></br>
            Luffy diz seu nome ao Gigante de Ferro e este pede a ele para não morrer, enquanto lança um ataque massivo de Haki, permitindo que o Thousand Sunny pousasse com segurança no mar. <br></br>
            Um flashback ocorre sobre uma conversa entre Joy Boy diz a Emeth.</p>
        `,
        link: "https://onepiece.fandom.com/wiki/Chapter_1122",
        pages: "17",
    },
];

let lastThreeEp = [
    {
        number: "1117",
        title: "Sabo Retorna!<br></br>",
        subtitle: "A Chocante Verdade é Revelada!<br></br>",
        date: "31 de Agosto de 2024",
        sinopse: `A chocante verdade sobre o ataque à Mariejois é revelada! O assassinato do Rei Cobra. O desaparecimento da Princesa Vivi. O que há por trás deste incidente que abalou o mundo? As forças do Exército Revolucionário lideradas por Sabo se reúnem na Terra dos Deuses.`,
        thumb: "images/Episode-1117-Thumb.png",
        linkView: "https://www.crunchyroll.com/pt-br/watch/GVWU0MW34/sabo-returns---the-shocking-truth-to-be-told",
        linkKnow: "https://onepiece.fandom.com/wiki/Episode_1117"
    },
    {
        number: "1116",
        title: "Vamos Pegá-lo!<br></br>",
        subtitle: "A Grande Proclamação de Buggy!<br></br>",
        date: "17 de Agosto de 2024",
        sinopse: `Movido por uma ambição que abandonou 24 anos atrás, Buggy abre o coração diante de toda a Cross Guild. O título de Imperador do Mar é capaz de inflamar o ego de um homem? Agora que ele está no nível de Shanks, ele retoma o sonho de outrora e proclama que se tornará o Rei dos Piratas!`,
        thumb: "images/Episode-1116-Thumb.png",
        linkView: "https://www.crunchyroll.com/pt-br/watch/GK9U3EM91/lets-go-get-it-buggys-big-declaration",
        linkKnow: "https://onepiece.fandom.com/wiki/Episode_1116"
    },
    {
        number: "1115",
        title: "A Marinha é Surpreendida!<br></br>",
        subtitle: "Kuzan, o Ex-Almirante do QG da Marinha!",
        date: "10 de Agosto de 2024",
        sinopse: `Kuzan se coloca no caminho de Garp, que veio salvar Koby. Quais são as verdadeiras intenções dele ao deixar a Marinha e se unir ao bando do Barba Negra? O ex-pupilo mais distinto de Garp, agora um pirata, desfere um golpe de rebelião contra seu mentor!`,
        thumb: "images/Episode-1115-Thumb.png",
        linkView: "https://www.crunchyroll.com/pt-br/watch/GN7UDM28E/the-navy-surprised-the-navy-headquarters-former-admiral-kuzan",
        linkKnow: "https://onepiece.fandom.com/wiki/Episode_1116",
    }
];

let arcs = [
    {
        sagaName: "Egghead",
        desc: "A ilha do Conhecimento<br></br>",
        date: "29 de Agosto de 2022",
        manga: "Capítulo 1058 - Presente",
        anime: "Episódio 1089 - Presente",
        image: "images/Arcs/Egghead.png",
        link: "https://onepiece.fandom.com/wiki/Egghead_Arc?so=search",
        resume: `O Arco de Egghead, também referido como o Arco da Ilha do Futuro, é o trigésimo segundo arco da história do mangá e anime One Piece, o primeiro arco da história da Saga Final e o nono arco da história da segunda metade da série.`
    },
    {
        sagaName: "País de Wano",
        desc: "A Terra dos Samurais<br></br>",
        date: "2 de Julho de 2018",
        manga: "Capítulo 909 - 1057",
        anime: "Episódio 892 - 1088",
        image: "images/Arcs/Land-of-Wano.png",
        link: "https://onepiece.fandom.com/wiki/Wano_Country_Arc",
        resume: `O Arco do País de Wano é o trigésimo primeiro arco da história do mangá e anime One Piece, tanto o primeiro quanto o único arco da história da Saga do País de Wano, e o oitavo arco da história da segunda metade da série.`
    },
    {
        sagaName: "Reverie",
        desc: "O Congresso Mundial Começou",
        date: "2 de Maio de 2018",
        manga: "Capítulo 903 - 908",
        anime: "Episódio 879 - 891",
        image: "images/Arcs/Levely.png",
        link: "https://onepiece.fandom.com/wiki/Levely_Arc",
        resume: `O Arco do Reverie, também referido como o Arco Pós-Whole Cake Island, é o trigésimo arco da história do mangá e anime One Piece, tanto o terceiro quanto o último arco da história da Saga Whole Cake Island, e o sétimo arco da história da segunda metade da série.`
    }
];

// ฿ 
let characters = [
    {
        nome: "Monkey D. Luffy",
        titulo: "Capitão",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Luffy-Thumb.png",
        recompensa: "3.000.000.000",
        descricao: "Também conhecido como 'Luffy do Chapéu de Palha' e comumente como 'Chapéu de Palha', é o fundador e capitão dos cada vez mais infames e poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Ele deseja encontrar o tesouro lendário deixado para trás pelo falecido Gol D. Roger e assim se tornar o Rei dos Piratas, o que ajudaria a facilitar um sonho desconhecido dele que ele contou apenas para Shanks, seus irmãos e tripulação. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.",
        link: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy"
    }, 
    {
        nome: "Roronoa Zoro",
        titulo: "Combatente",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Zoro-Thumb.png",
        recompensa: "1.111.000.000",
        descricao: "Também conhecido como 'Caçador de Piratas' Zoro, é o combatente dos Piratas do Chapéu de Palha e um ex-caçador de recompensas.",
        link: "https://onepiece.fandom.com/wiki/Roronoa_Zoro"
    }, 
    {
        nome: "Nami",
        titulo: "Navegadora",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Nami-Thumb.png",
        recompensa: "366.000.000",
        descricao: "Também conhecida como a 'Gata Ladra' é a navegadora dos Piratas do Chapéu de Palha e uma dos Oficiais Seniores da Grande Frota do Chapéu de Palha. Ela é o terceiro membro da tripulação e a segunda a entrar.",
        link: "https://onepiece.fandom.com/wiki/Nami"
    },
    {
        nome: "Usopp",
        titulo: "Atirador",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Usopp-Thumb.png",
        recompensa: "500.000.000",
        descricao: "Auto intitulado 'God' Usopp ou 'Sogeking', o mais medroso do bando é o Atirador dos Piratas do Chapéu de Palha, o quarto membro da tripulação e o terceiro a entrar.",
        link: "https://onepiece.fandom.com/wiki/Usopp"
    },
    {
        nome: "Vinsmoke Sanji",
        titulo: "Cozinheiro",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Sanji-Thumb.png",
        recompensa: "1.032.000.000",
        descricao: "Conhecido por 'Sanji Perna Preta', nascido como Vinsmoke Sanji, e também é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha do Baratie. Ele também é o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes. Apesar de Sanji renunciar ao seu sobrenome Vinsmoke, o Governo Mundial o rotula como parte de seu nome em seu pôster de procurado.",
        link: "https://onepiece.fandom.com/wiki/Sanji"
    },
    {
        nome: "Tony Tony Chopper",
        titulo: "Médico",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Chopper-Thumb.png",
        recompensa: "1.000",
        descricao: "Chopper é uma rena. Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos. Ele é o sexto membro e um dos poucos membros da tripulação que nasceu na Grand Line, numa ilha chamada Drum. Por ter sido confundido como mascote, a recompensa atual de sua captura é de apenas 1.000 Bellies. Mesmo sendo considerado 'Mascote' pela marinha, ele foi nomeado um dos comandantes do Luffy, sendo assim seguindo a lógica da sua recompensa o 9° Comandante.",
        link: "https://onepiece.fandom.com/wiki/Tony_Tony_Chopper"
    },
    {
        nome: "Nico Robin",
        titulo: "Arqueóloga",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Robin-Thumb.png",
        recompensa: "930.000.000",
        descricao: "Também conhecida como 'Criança Demônio' e 'Luz da Revolução', é a arqueóloga dos Piratas do Chapéu de Palha. Ela é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial.",
        link: "https://onepiece.fandom.com/wiki/Nico_Robin"
    },
    {
        nome: "Franky",
        titulo: "Carpinteiro",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Franky-Thumb.png",
        recompensa: "394.000.000",
        descricao: "O carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky, um grupo de desmantelamento de navios. Ele foi originalmente chamado de 'Cutty Flam' até trocar seu nome original por seu apelido a pedidos de Iceburg para esconder sua identidade.",
        link: "https://onepiece.fandom.com/wiki/Franky"
    },
    {
        nome: "Brook",
        titulo: "Músico",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Brook-Thumb.png",
        recompensa: "383.000.000",
        descricao: "O Músico dos Piratas do Chapéu de Palha. Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma depois de entrarem no Triângulo Florian. Ele é um usuário de Akuma no Mi que comeu a Yomi Yomi no Mi, o que o torna um pseudo-imortal por causa de seus poderes. Ele é o nono membro do Bando do Chapéu de Palha, e o oitavo a se juntar à tripulação de Luffy.",
        link: "https://onepiece.fandom.com/wiki/Brook"
    },
    {
        nome: "Jinbe",
        titulo: "Timoneiro",
        tripulacao: "Piratas do Chapéu de Palha",
        image: "images/characters/Jinbe-Thumb.png",
        recompensa: "1.100.000.000",
        descricao: "Jinbe é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe. Ele é o décimo membro da tripulação e o nono a se juntar.",
        link: "https://onepiece.fandom.com/wiki/Jinbe"
    },
    {
        nome: "Figarland Shanks",
        titulo: "Capitão", 
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Shanks-Thumb.png",
        recompensa: "4.048.900.000",
        descricao: "Mais conhecido apenas como 'Ruivo', é o chefe dos Piratas do Ruivo e um dos Quatro Imperadores que governam o Novo Mundo. Tendo navegado com os lendários Piratas do Roger desde criança, Shanks começou sua trajetória pirata no navio deles como aprendiz ao lado de Buggy, antes de formar sua própria tripulação após a morte de Roger",
        link: "https://onepiece.fandom.com/wiki/Shanks"
    },
    {
        nome: "Benn Beckman",
        titulo: "Imediato",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Benn-Beckman-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Beckman parece não gostar da diversão e é muito mais relaxado do que os outros membros da equipe, agindo como um membro equilibrado. Ele, Lucky Roux e Yasopp são alguns dos membros da tripulação mais confiáveis de Shanks, já que são sempre vistos quando os Piratas do Ruivo são apresentados, geralmente quando algo crucial acontece.",
        link: "https://onepiece.fandom.com/wiki/Benn_Beckman"
    },
    {
        nome: "Lucky Roux",
        titulo: "Combatente",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Lucky-Roux-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Roux parece ser um pirata muito divertido amoroso que é muitas vezes visto pendurado em torno de mais um dos membros da tripulação de Shanks, Yasopp. Ele parece ser um dos tripulantes mais confiáveis do Shanks, como ele é sempre visto quando os piratas Ruivo são apresentados, geralmente quando algo importante acontece. Ele compartilha essa característica com Benn Beckman e Yasopp. Ele é a primeira pessoa a realmente matar alguém em One Piece e prepara o terreno para a série: A vida de um pirata é perigosa.",
        link: "https://onepiece.fandom.com/wiki/Lucky_Roux"
    },
    {
        nome: "Yasopp",
        titulo: "Atirador",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Yasopp-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Ele compartilha muitos traços de personalidade com seu filho, incluindo a possibilidade de encorajar o resto de sua tripulação a participar com sua diversão. Ele tem muito orgulho de seu filho, Usopp, a ponto de falar várias vezes sobre ele repetidamente para Luffy, o que levou Luffy a reconhecer Usopp à vista das histórias de Yasopp. Durante seu tempo na vila de Luffy, Yasopp se sentiu próximo de Luffy porque ele tem a mesma idade do filho que ele deixou em casa.",
        link: "https://onepiece.fandom.com/wiki/Yasopp"
    },
    {
        nome: "Limejuice",
        titulo: "Oficial",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Limejuice-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Limejuice é um oficial dos Piratas do Ruivo, dando-lhe autoridade sobre a tripulação de baixo escalão. Pode-se supor que Limejuice é um indivíduo muito poderoso, considerando como o comodoro da Marinha Brannew descreveu toda a tripulação como tendo uma alta média de recompensas.",
        link: "https://onepiece.fandom.com/wiki/Limejuice"
    },
    {
        nome: "Bonk Punch",
        titulo: "Oficial",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Bonk-Punch-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Bonk Punch é um oficial dos Piratas do Ruivo, dando-lhe autoridade sobre a tripulação de baixo escalão. Pode-se supor que Punch é um indivíduo muito poderoso, considerando como Marine Commodore Brannew descreveu toda a tripulação como tendo uma alta média de recompensas",
        link: "https://onepiece.fandom.com/wiki/Bonk_Punch"
    },
    {
        nome: "Monster",
        titulo: "Músico",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Monster-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Monster é um oficial dos Piratas do Ruivo, dando-lhe autoridade sobre os membros de baixo escalão da tripulação. Apesar de ser um macaco, ele possui alta inteligência e pode entender os humanos. Monster luta em conjunto com Bonk Punch, derrotando inimigos mais fracos enquanto Punch carrega a força de seus próprios ataques para lidar com inimigos mais fortes.",
        link: "https://onepiece.fandom.com/wiki/Monster"
    },
    {
        nome: "Building Snake",
        titulo: "Navegador",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Building-Snake-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Snake é um Oficial Superior dos Piratas do Cabelo Vermelho, o que lhe dá autoridade sobre membros de menor hierarquia da tripulação. Snake é uma pessoa poderosa por si só, considerando como o Comodoro da Marinha Brannew descreveu toda a tripulação como tendo uma alta média de recompensas. Ele luta usando um estilo de esgrima chamado Juggling Two Sword Style enquanto utiliza movimentos acrobáticos e chutes com pisadas.",
        link: "https://onepiece.fandom.com/wiki/Building_Snake"
    },
    {
        nome: "Hongo",
        titulo: "Médico",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Hongo-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Como muitos de seus colegas membros da tripulação do Red Hair, Hongo gosta de festas, beber e da vida de pirata. No entanto, na Guerra Summit de Marineford, ele parecia consideravelmente mais sério. Ele adora limpeza.",
        link: "https://onepiece.fandom.com/wiki/Hongo"
    },
    {
        nome: "Gab",
        titulo: "Oficial",
        tripulacao: "Piratas do Ruivo",
        image: "images/characters/Gab-Thumb.png",
        recompensa: "Desconhecido",
        descricao: "Gab é um oficial dos Piratas do Ruivo, dando-lhe autoridade sobre a tripulação de baixo escalão. Pode-se supor que Punch é um indivíduo muito poderoso, considerando como Marine Commodore Brannew descreveu toda a tripulação como tendo uma alta média de recompensas",
        link: "https://onepiece.fandom.com/wiki/Gab"
    },
    {
        nome: "Gol D. Roger",
        titulo: "Capitão",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Roger-Thumb.png",
        recompensa: `<del>5.564.800.000</del>`,
        descricao: "Conhecido pela maioria como Gold Roger, foi um lendário pirata que ficou conhecido como Rei dos Piratas, Capitão dos Piratas do Roger, e proprietário do lendário tesouro conhecido como 'One Piece'. Ele também foi o amante de Portgas D. Rouge e pai biológico de Portgas D. Ace.",
        link: "https://onepiece.fandom.com/wiki/Gol_D._Roger"
    },
    {
        nome: "Silvers Rayleigh",
        titulo: "Imediato",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Silvers-Rayleigh-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Silvers Rayleigh, também conhecido como o "Rei das Trevas", é um pirata extremamente poderoso e famoso que anteriormente serviu como o primeiro oficial dos lendários Piratas de Roger, sendo conhecido como a "Mão Direita do Rei dos Piratas". Ele é uma das figuras principais, juntamente com Barba Branca, Shiki, Monkey D. Garp, Sengoku, Tsuru e Kong, dos tempos em que Gol D. Roger, o "Rei dos Piratas", ainda estava vivo.`,
        link: "https://onepiece.fandom.com/wiki/Silvers_Rayleigh"
    },
    {
        nome: "Scopper Gaban",
        titulo: "Combatente",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Scopper-Gaban-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Gaban parece ter sido uma figura proeminente em termos de força e autoridade, já que ele foi mostrado liderando o ataque ao lado de Rayleigh durante a última batalha da tripulação com os Piratas de Barba Branca.`,
        link: "https://onepiece.fandom.com/wiki/Scopper_Gaban"
    },
    {
        nome: "Crocus",
        titulo: "Médico",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Crocus-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Crocus é um médico e o cuidador da baleia Laboon, bem como o supervisor do Farol do Cabo Gêmeo que guia navios descendo da Montanha Reversa para a Grand Line.`,
        link: "https://onepiece.fandom.com/wiki/Crocus",
    },
    {
        nome: "Seagull Guns Nozdon",
        titulo: "Combatente",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Seagull-Guns-Nozdon-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `As habilidades de Nozdon são desconhecidas, pois ele ainda não foi mostrado em combate no cânone do mangá. No anime, durante a batalha final entre Roger e Piratas do Barba Branca, Nozdon foi visto bloqueando um ataque de um jovem Jozu enquanto o último estava em sua forma de diamante, implicando que Nozdon era extremamente forte.`,
        link: "https://onepiece.fandom.com/wiki/Seagull-Guns-Nozdon"
    },
    {
        nome: "Sunbell",
        titulo: "Combatente",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Sunbell-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Como um homem-peixe, Sunbell possui dez vezes a força física de um humano médio e é presumivelmente um nadador adepto. Sunbell foi visto lutando com um Vista mais jovem, o que implica que Sunbell é bastante forte.`,
        link: "https://onepiece.fandom.com/wiki/Sunbell"
    },
    {
        nome: "Taro",
        titulo: "Combatente",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Taro-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `As habilidades de Taro permanecessem desconhecidas, mas ele é forte e habilidoso no uso de espadas. Taro também mostrou ser muito resistente tendo conseguido sobreviver em todas as batalhas contra os Piratas do Barba Branca.`,
        link: "https://onepiece.fandom.com/wiki/Taro"
    },
    {
        nome: "Doringo",
        titulo: "Combatente",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Doringo-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Embora as habilidades de Doringo permanecem desconhecidas, é presumível que ele seja bastante habilidoso. Já que ele foi capaz de lutar contra os Piratas Leão Dourado junto de sua tripulação e também participou de inúmeras batalhas que ficaram na história, sendo assim Doringo é um dos membros mais fortes da tripulação do Rei dos Piratas.`,
        link: "https://onepiece.fandom.com/wiki/Doringo"
    },
    {
        nome: "Millet Pine",
        titulo: "Combatente",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Millet-Pine-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Pine é leal ao seu capitão e tripulação, enquanto ele avançava para a batalha com eles. Como muitos de seus companheiros de tripulação, ele inicialmente foi frio em relação a Kozuki Oden quando Roger o trouxe a bordo, mas rapidamente se aqueceu com ele.`,
        link: "https://onepiece.fandom.com/wiki/Millet_Pine"
    },
    {
        nome: "Petermoo",
        titulo: "Atirador",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Petermoo-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Petermoo é leal ao seu capitão e tripulação, enquanto ele avançava para a batalha com eles. Como muitos de seus companheiros de tripulação, ele inicialmente foi frio em relação a Kozuki Oden quando Roger o trouxe a bordo, mas rapidamente se aqueceu com ele.`,
        link: "https://onepiece.fandom.com/wiki/Petermoo"
    },
    {
        nome: "Kouzuki Oden",
        titulo: "Comandante",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Oden-Thumb.png",
        recompensa: "Desconhecido",
        descricao: `Como membro dos Piratas do Roger, ele era um indivíduo respeitado entre sua tripulação, embora a princípio não fosse um membro muito bem aceito pelos demais, mesmo que estes reconhecessem a importância de Oden para com Gol D. Roger. Roger e Shanks gostaram de Oden. Ele se referiu a Shanks e Buggy como seus respectivos primeiro e segundo filhos, embora o último estivesse irritado por ser chamado assim. Toda a tripulação queria ajudar o desejo de Oden de tornar o País de Wano aberto ao mundo, mas Oden recusou, pois queria resolver o problema por conta própria.`,
        link: "https://onepiece.fandom.com/wiki/Kouzuki_Oden"
    },
    {
        nome: "Inuarashi",
        titulo: "Aprendiz",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Inuarashi-Thumb.png",
        recompensa: "0",
        descricao: `Duque Inuarashi é um mink canino e era um dos dois governantes do Ducado de Mokomo, apelidado de "Governante do Dia" enquanto governava anteriormente o Ducado de Mokomo das 6:00 às 18:00. Ele e Nekomamushi servem como criados da Família Kouzuki do País de Wano, como membros dos Nove Bainhas Vermelhas.`,
        link: "https://onepiece.fandom.com/wiki/Inuarashi"
    },
    {
        nome: "Nekomamushi",
        titulo: "Aprendiz",
        tripulacao: "Piratas do Roger",
        image: "images/characters/Nekomamushi-Thumb.png",
        recompensa: "0",
        descricao: `Mestre Nekomamushi é um mink felino e o guardião da Floresta das Baleias em Zou, apelidado de "Governante da Noite" enquanto governava anteriormente o Ducado de Mokomo das 18:00 às 6:00. Ele e Inuarashi servem como criados da Família Kouzuki do País de Wano, como membros dos Nove Bainhas Vermelhas.`,
        link: "https://onepiece.fandom.com/wiki/Nekomamushi"
    }
];