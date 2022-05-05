const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text')); // Array das opções de resposta.
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const opcao1 = document.querySelector('#opcao-1');
const opcao2 = document.querySelector('#opcao-2');
const opcao3 = document.querySelector('#opcao-3');
const opcao4 = document.querySelector('#opcao-4');
const proximoBtn = document.querySelector('#proximo-btn');

var opcoes = [opcao1, opcao2, opcao3, opcao4]
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Eu sou...",
        choice1: "Idealista, criativo e visionário.",
        choice2: "Divertido, espiritual e benéfico",
        choice3: "Confiável, meticuloso e previsível",
        choice4: "Focado, determinado e persistente",
        answer: 2,
    },
    {
        question: "Eu gosto de...",
        choice1: "Ser piloto",
        choice2: "Conversar com os passageiros.",
        choice3: "Planejar a viagem.",
        choice4: "Explorar novas rotas.",
        answer: 2,
    },
    {
        question: "Se você quiser se dar bem comigo...",
        choice1: "Me dê liberdade.",
        choice2: "Me deixe saber sua expectativa.",
        choice3: "Lidere, siga ou saia do caminho.",
        choice4: "Seja amigável, carinhoso e compreensivo.",
        answer: 2,
    },
    {
        question: "Para conseguir obter bons resultados é preciso...",
        choice1: "Ter incertezas.",
        choice2: "Controlar o essencial.",
        choice3: "Diversão e celebração.",
        choice4: "Planejar e obter recursos.",
        answer: 2,
    },
    {
        question: "Eu me divirto quando...",
        choice1: "Estou me exercitando.",
        choice2: "Tenho novidades.",
        choice3: "Estou com outros.",
        choice4: "Determino as regras.",
        answer: 2,
    },
    {
        question: "Eu penso que...",
        choice1: "Unidos venceremos, divididos perderemos.",
        choice2: "O ataque é melhor que a defesa.",
        choice3: "É bom ser manso, mas andar com um porrete.",
        choice4: "Um homem previnido vale por dois.",
        answer: 2,
    },
    {
        question: "Minha preocupação é...",
        choice1: "Gerar a ideia global.",
        choice2: "Fazer com que as pessoas gostem.",
        choice3: "Fazer com que funcione.",
        choice4: "Fazer com que aconteça.",
        answer: 2,
    },
    {
        question: "Eu prefiro...",
        choice1: "Perguntas e respostas.",
        choice2: "Ter todos os detalhes.",
        choice3: "Vantagens ao meu favor.",
        choice4: "Que todos tenham a chance de serem ouvidos.",
        answer: 2,
    },
    {
        question: "Eu gosto de...",
        choice1: "Fazer progresso.",
        choice2: "Construir memórias.",
        choice3: "Fazer sentido.",
        choice4: "Tornar as pessoas confortáveis.",
        answer: 2,
    },
    {
        question: "Eu gosto de chegar...",
        choice1: "Na frente.",
        choice2: "Junto.",
        choice3: "Na hora.",
        choice4: "Em outro lugar.",
        answer: 2,
    },
    {
        question: "Um ótimo dia para mim é quando...",
        choice1: "Consigo fazer muitas coisas.",
        choice2: "Me divirto com meus amigos.",
        choice3: "Tudo segue conforme o planejado.",
        choice4: "Desfruto de coisas novas e estimulantes.",
        answer: 2,
    },
    {
        question: "Eu vejo a morte como...",
        choice1: "Uma grande aventura misteriosa.",
        choice2: "Oportunidade para rever os falecidos.",
        choice3: "Um modo de receber recompensas.",
        choice4: "Algo que sempre chega muito cedo.",
        answer: 2,
    },
    {
        question: "Minha filosofia de vida é...",
        choice1: "Há ganhadores e perdedores, e eu acredito ser um ganhador.",
        choice2: "Para eu ganhar, ninguém precisa perder.",
        choice3: "Para ganhar é preciso seguir as regras.",
        choice4: "Para ganhar, é necessário inventar novas regras.",
        answer: 2,
    },
    {
        question: "Eu sempre gostei de...",
        choice1: "Explorar.",
        choice2: "Evitar surpresas.",
        choice3: "Focalizar a meta.",
        choice4: "Realizar uma abordagem natural.",
        answer: 2,
    },
    {
        question: "Eu gosto de mudanças se...",
        choice1: "Me der uma vantagem competitiva.",
        choice2: "For divertido e puder ser compartilhado",
        choice3: "Me der mais liberdade e variedade.",
        choice4: "Melhorar ou me der mais controle.",
        answer: 2,
    },
    {
        question: "Eu gosto de mudanças se...",
        choice1: "Se colocar na frente.",
        choice2: "Se colocar os outros na frente.",
        choice3: "Mudar de ideia.",
        choice4: "Ser consistente.",
        answer: 2,
    },
    {
        question: "Eu gosto de buscar conselhos de...",
        choice1: "Pessoas bem-sucedidas.",
        choice2: "Anciões e conselheiros.",
        choice3: "Autoridades no assunto.",
        choice4: "Lugares, os mais estranhos.",
        answer: 2,
    },
    {
        question: "Meu lema é...",
        choice1: "Fazer o que precisa ser feito.",
        choice2: "Fazer bem feito.",
        choice3: "Fazer junto com o grupo.",
        choice4: "Simplesmente fazer.",
        answer: 2,
    },
    {
        question: "Eu gosto de...",
        choice1: "Complexidade, mesmo se confuso.",
        choice2: "Ordem e sistematização.",
        choice3: "Calor humano e animação.",
        choice4: "Coisas claras e simples.",
        answer: 2,
    },
    {
        question: "Tempo para mim é...",
        choice1: "Algo que detesto disperdiçar.",
        choice2: "Um grande ciclo.",
        choice3: "Uma flecha que leva ao inevitável.",
        choice4: "Irrelevante.",
        answer: 2,
    },
    {
        question: "Se eu fosse bilionário...",
        choice1: "Faria doações para muitas entidades.",
        choice2: "Criaria uma poupança avantajada.",
        choice3: "Faria o que desse na cabeça.",
        choice4: "Me exibiria bastante para algumas pessoas.",
        answer: 2,
    },
    {
        question: "Eu acredito que...",
        choice1: "O destino é mais importante que a jornada.",
        choice2: "A jornada é mais importante que o destino.",
        choice3: "Um centavo economizado é um centavo ganho.",
        choice4: "Basta um navio e uma estrela para navegar.",
        answer: 2,
    },
    {
        question: "Eu acredito também que...",
        choice1: "Aquele que hesita está perdido.",
        choice2: "De grão em grão a galinha enche o papo.",
        choice3: "O que vai, volta.",
        choice4: "Um sorriso ou uma careta é o mesmo para quem é cego.",
        answer: 2,
    },
    {
        question: "Eu acredito ainda que...",
        choice1: "É melhor prudência do que arrependimento.",
        choice2: "A autoridade deve ser desafiada.",
        choice3: "Ganhar é fundamental.",
        choice4: "O coletivo é mais importante que o individual.",
        answer: 2,
    },
    {
        question: "Eu penso que...",
        choice1: "Não é fácil ficar encurralado.",
        choice2: "É preferível olhar, antes de pular.",
        choice3: "Duas cabeças pensam melhor do que uma.",
        choice4: "Se você não tem condições de competir, não compita.",
        answer: 2,
    },
]

const SCORE_POINTS = 25 // Pontos recebidos por pergunta certa
const MAX_QUESTIONS = 25 // Máximo de perguntas



startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

acceptAnswer = () => {
    proximoBtn.addEventListener("click", function(event){
        event.preventDefault()

        acceptingAnswers = true

        getNewQuestion()
        
    });
}

getNewQuestion = () => { // Buscar nova pergunta

    acceptingAnswers = false;
    
    opcao1.checked = false;
    opcao2.checked = false;
    opcao3.checked = false;
    opcao4.checked = false;

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score) // Adiciona a pontuação para armazenamento

        return window.location.assign('/end.html')
    }

    // Adiciona +1 no contador de perguntas
    // Barra de progresso é preenchida conforme o contador aumenta

    questionCounter++
    console.log(questionCounter)
    progressText.innerText = `${questionCounter} / ${MAX_QUESTIONS}`
    //progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    //const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    const questionsIndex = 0
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    
    //acceptingAnswers = true
    acceptAnswer()

    if(questionsIndex > 0) {
        questionsIndex++
    }

    
}



choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer  /* == currentQuestion.answer ? 'correct' : 'incorrect' */

        if(classToApply === selectedAnswer) {
            incrementScore(SCORE_POINTS)
        }

        

        //selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            //selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    //scoreText.innerText = score
}



startGame()
//