const question = document.querySelector('#question'); // Pergunta
const choices = Array.from(document.querySelectorAll('.choice-text')); // Array das opções de resposta.
const progressText = document.querySelector('#progressText'); // Perguntas/Total de perguntas
const scoreText = document.querySelector('#score'); // Pontuação
const progressBarFull = document.querySelector('#progressBarFull'); // Barra de progresso
const opcao = Array.from(document.querySelectorAll('.opcao'));
const proximoBtn = document.querySelector('#proximo-btn'); // Botão próximo
const escolhas = document.getElementsByName('caixa');

let perguntaAtual = {} // Lista
let aceitandoRespostas = true
let pontuacao = 0
let contadorPerguntas = 0
let perguntasDisponiveis = [] // Array
var checkado = false

console.log(escolhas)

let perguntas = [
    {
        question: "A sua saúde, o quanto ela representa de qualidade neste momento?",
        choice1: "De 0 a 3 - Tenho dependência de medicamentos para diversas situações médicas.",
        choice2: "De 4 a 5 - Uso esporadicamente medicamentos, pois a minha saúde está sob controle.",
        choice3: "De 6 a 7 - Não uso medicamentos e nenhum tipo de droga (lícita ou ilícita).",
        choice4: "De 8 a 10 - A minha saúde está 100%.",
    },
    {
        question: "Você ama o que faz?",
        choice1: "De 0 a 3 - Ainda estou procurando algo que me desafie.",
        choice2: "De 4 a 5 - Percebo o meu potencial mas não encontrei um lugar que os explore.",
        choice3: "De 7 a 7 - Faço as minhas entregas e entendo que elas contribuem para a empresa.",
        choice4: "De 8 a 10 - Não mudaria o que faço, mesmo que ficasse rico hoje.",
    },
    {
        question: "A sua família é um refúgio para você?",
        choice1: "De 0 a 3 - Infelizmente não há mais família para mim.",
        choice2: "De 4 a 5 - Ainda tenho uma certa relação com meus familiares.",
        choice3: "De 6 a 7 - Tenho encontros frequentes com minha família.",
        choice4: "De 8 a 10 - A minha família está constantemente na minha vida.",
    },
    {
        question: "Os seus amigos estão atentos e próximos de você?",
        choice1: "De 0 a 3 - Atualmente só há conhecidos.",
        choice2: "De 4 a 5 - Me restou apenas um amigo(a) mas não compartilho tudo com ele(a).",
        choice3: "De 6 a 7 - Compartilho frequentemente a minha vida com um amigo(a).",
        choice4: "De 8 a 10 - Tenho uma relação crescente com velhos e novos amigos.",
    },
    {
        question: "A sua prosperidade financeira lhe garante uma subsistência por alguns meses/anos?",
        choice1: "De 0 a 3 - Pago 90% das contas e acabo precisando de mais dinheiro todo mês.",
        choice2: "De 4 a 5 - Tenho conseguido pagar as contas mas não sobra nada.",
        choice3: "De 6 a 7 - Pago as contas e consigo comprar algumas coisas a mais.",
        choice4: "De 8 a 10 - Consigo realizar alguns investimentos todos os meses.",
    },
]

const MAX_PERGUNTAS = 5;

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

ifChecked = () => {
    for(let x = 0; x < MAX_PERGUNTAS; x++) {
        checkado = true;
        proximoBtn.removeAttribute("disabled");
    } 
}

aceitarResposta = () => {
    if(checkado === true){
        aceitandoRespostas = true
        novaPergunta()
    }
}

novaPergunta = () => {

    proximoBtn.setAttribute("disabled", "disabled")
    checkado = false;
    for(let i = 0; i < escolhas.length; i++) {
        escolhas[i].checked = false;
    }
    aceitandoRespostas = false

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

