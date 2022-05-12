const question = document.querySelector('#question'); // Pergunta
const choices = Array.from(document.querySelectorAll('.choice-text')); // Array das opções de resposta.
const progressText = document.querySelector('#progressText'); // Perguntas/Total de perguntas
const scoreText = document.querySelector('#score'); // Pontuação
const progressBarFull = document.querySelector('#progressBarFull'); // Barra de progresso
const opcao = Array.from(document.querySelectorAll('.opcao'));
const opcao1 = document.querySelector('#opcao-1'); // Opção radio
const opcao2 = document.querySelector('#opcao-2'); // Opção radio
const opcao3 = document.querySelector('#opcao-3'); // Opção radio
const opcao4 = document.querySelector('#opcao-4'); // Opção radio
const proximoBtn = document.querySelector('#proximo-btn'); // Botão próximo

let perguntaAtual = {} // Lista
let aceitandoRespostas = true
let pontuacao = 0
let contadorPerguntas = 0
let perguntasDisponiveis = [] // Array

let perguntas = [
    {
        question: "Eu sou...",
        choice1: "Idealista, criativo e visionário.",
        choice2: "Divertido, espiritual e benéfico",
        choice3: "Confiável, meticuloso e previsível",
        choice4: "Focado, determinado e persistente",
    },
    {
        question: "Eu gosto de...",
        choice1: "Ser piloto",
        choice2: "Conversar com os passageiros.",
        choice3: "Planejar a viagem.",
        choice4: "Explorar novas rotas.",
    },
    {
        question: "Se você quiser se dar bem comigo...",
        choice1: "Me dê liberdade.",
        choice2: "Me deixe saber sua expectativa.",
        choice3: "Lidere, siga ou saia do caminho.",
        choice4: "Seja amigável, carinhoso e compreensivo.",
    },
    {
        question: "Para conseguir obter bons resultados é preciso...",
        choice1: "Ter incertezas.",
        choice2: "Controlar o essencial.",
        choice3: "Diversão e celebração.",
        choice4: "Planejar e obter recursos.",
    },
    {
        question: "Eu me divirto quando...",
        choice1: "Estou me exercitando.",
        choice2: "Tenho novidades.",
        choice3: "Estou com outros.",
        choice4: "Determino as regras.",
    },
    {
        question: "Eu penso que...",
        choice1: "Unidos venceremos, divididos perderemos.",
        choice2: "O ataque é melhor que a defesa.",
        choice3: "É bom ser manso, mas andar com um porrete.",
        choice4: "Um homem previnido vale por dois.",
    },
    {
        question: "Minha preocupação é...",
        choice1: "Gerar a ideia global.",
        choice2: "Fazer com que as pessoas gostem.",
        choice3: "Fazer com que funcione.",
        choice4: "Fazer com que aconteça.",
    },
    {
        question: "Eu prefiro...",
        choice1: "Perguntas e respostas.",
        choice2: "Ter todos os detalhes.",
        choice3: "Vantagens ao meu favor.",
        choice4: "Que todos tenham a chance de serem ouvidos.",
    },
    {
        question: "Eu gosto de...",
        choice1: "Fazer progresso.",
        choice2: "Construir memórias.",
        choice3: "Fazer sentido.",
        choice4: "Tornar as pessoas confortáveis.",
    },
    {
        question: "Eu gosto de chegar...",
        choice1: "Na frente.",
        choice2: "Junto.",
        choice3: "Na hora.",
        choice4: "Em outro lugar.",
    },
    {
        question: "Um ótimo dia para mim é quando...",
        choice1: "Consigo fazer muitas coisas.",
        choice2: "Me divirto com meus amigos.",
        choice3: "Tudo segue conforme o planejado.",
        choice4: "Desfruto de coisas novas e estimulantes.",
    },
    {
        question: "Eu vejo a morte como...",
        choice1: "Uma grande aventura misteriosa.",
        choice2: "Oportunidade para rever os falecidos.",
        choice3: "Um modo de receber recompensas.",
        choice4: "Algo que sempre chega muito cedo.",
    },
    {
        question: "Minha filosofia de vida é...",
        choice1: "Há ganhadores e perdedores, e eu acredito ser um ganhador.",
        choice2: "Para eu ganhar, ninguém precisa perder.",
        choice3: "Para ganhar é preciso seguir as regras.",
        choice4: "Para ganhar, é necessário inventar novas regras.",
    },
    {
        question: "Eu sempre gostei de...",
        choice1: "Explorar.",
        choice2: "Evitar surpresas.",
        choice3: "Focalizar a meta.",
        choice4: "Realizar uma abordagem natural.",
    },
    {
        question: "Eu gosto de mudanças se...",
        choice1: "Me der uma vantagem competitiva.",
        choice2: "For divertido e puder ser compartilhado",
        choice3: "Me der mais liberdade e variedade.",
        choice4: "Melhorar ou me der mais controle.",
    },
    {
        question: "Eu gosto de mudanças se...",
        choice1: "Se colocar na frente.",
        choice2: "Se colocar os outros na frente.",
        choice3: "Mudar de ideia.",
        choice4: "Ser consistente.",
    },
    {
        question: "Eu gosto de buscar conselhos de...",
        choice1: "Pessoas bem-sucedidas.",
        choice2: "Anciões e conselheiros.",
        choice3: "Autoridades no assunto.",
        choice4: "Lugares, os mais estranhos.",
    },
    {
        question: "Meu lema é...",
        choice1: "Fazer o que precisa ser feito.",
        choice2: "Fazer bem feito.",
        choice3: "Fazer junto com o grupo.",
        choice4: "Simplesmente fazer.",
    },
    {
        question: "Eu gosto de...",
        choice1: "Complexidade, mesmo se confuso.",
        choice2: "Ordem e sistematização.",
        choice3: "Calor humano e animação.",
        choice4: "Coisas claras e simples.",
    },
    {
        question: "Tempo para mim é...",
        choice1: "Algo que detesto disperdiçar.",
        choice2: "Um grande ciclo.",
        choice3: "Uma flecha que leva ao inevitável.",
        choice4: "Irrelevante.",
    },
    {
        question: "Se eu fosse bilionário...",
        choice1: "Faria doações para muitas entidades.",
        choice2: "Criaria uma poupança avantajada.",
        choice3: "Faria o que desse na cabeça.",
        choice4: "Me exibiria bastante para algumas pessoas.",
    },
    {
        question: "Eu acredito que...",
        choice1: "O destino é mais importante que a jornada.",
        choice2: "A jornada é mais importante que o destino.",
        choice3: "Um centavo economizado é um centavo ganho.",
        choice4: "Basta um navio e uma estrela para navegar.",
    },
    {
        question: "Eu acredito também que...",
        choice1: "Aquele que hesita está perdido.",
        choice2: "De grão em grão a galinha enche o papo.",
        choice3: "O que vai, volta.",
        choice4: "Um sorriso ou uma careta é o mesmo para quem é cego.",
    },
    {
        question: "Eu acredito ainda que...",
        choice1: "É melhor prudência do que arrependimento.",
        choice2: "A autoridade deve ser desafiada.",
        choice3: "Ganhar é fundamental.",
        choice4: "O coletivo é mais importante que o individual.",
    },
    {
        question: "Eu penso que...",
        choice1: "Não é fácil ficar encurralado.",
        choice2: "É preferível olhar, antes de pular.",
        choice3: "Duas cabeças pensam melhor do que uma.",
        choice4: "Se você não tem condições de competir, não compita.",
    },
]

const MAX_PERGUNTAS = 25;

iniciarJogo = () => {
    contadorPerguntas = 0
    perguntasDisponiveis = [...perguntas]
    novaPergunta()
}

stopDefault = () => {
    proximoBtn.addEventListener("click", function(event){
        event.preventDefault()
    });
}

aceitarResposta = () => {
    
    if(opcao1.checked === true) {
        aceitandoRespostas = true
        novaPergunta()
    }
    if(opcao2.checked === true) {
        aceitandoRespostas = true
        novaPergunta()
    }
    if(opcao3.checked === true) {
        aceitandoRespostas = true
        novaPergunta()
    }
    if(opcao4.checked === true) {
        aceitandoRespostas = true
        novaPergunta()
    }
}

enableDisable = () => {
    /*proximoBtn.disabled = !opcao1.checked
    proximoBtn.disabled = !opcao2.checked
    proximoBtn.disabled = !opcao3.checked
    proximoBtn.disabled = !opcao4.checked*/
    console.log(opcao)
}

novaPergunta = () => {

    aceitandoRespostas = false

    opcao1.checked = false;
    opcao2.checked = false;
    opcao3.checked = false;
    opcao4.checked = false;

    if(perguntasDisponiveis.length === 0 || contadorPerguntas > MAX_PERGUNTAS) {
        console.log('Fim do Jogo')

        return window.location.assign('/end.html')
    }
    
    contadorPerguntas++
    progressText.innerText = `${contadorPerguntas}/${MAX_PERGUNTAS}`

    const indexPerguntas = 0
    perguntaAtual = perguntasDisponiveis[indexPerguntas]
    question.innerText = perguntaAtual.question // Puxando a question da array de perguntas

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = perguntaAtual['choice' + number]
    })

    perguntasDisponiveis.splice(indexPerguntas, 1) // Remove a pergunta index 0

    //aceitandoRespostas = true

    stopDefault()
}

choices.forEach(choice => {
    choice.addEventListener('click', e => { // Para cada escolha
        if(!aceitandoRespostas) return

        aceitandoRespostas = false
        const selectedChoice = e.target // Seleciona a resposta clicada
        const selectedAnswer = selectedChoice.dataset['number']

        setTimeout(() => {
            novaPergunta()
        }, 1000)
    })
})

iniciarJogo()

