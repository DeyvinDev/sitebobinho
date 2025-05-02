const data = [
    {
        question: "qual desses itens foi o primeira que você esqueceu, ja na maldade q eu sei ",
        a: "calça de shopi",
        b: "blusinha da burbery",
        c: "blusa da escola",
        d: "brinco de cocota",
        ans: "op2"
    },
    {
        question: "qual foi a comparação q vc fez com minha peça?",
        a: "cano pvc",
        b: "coca 3l ZERO",
        c: "tromba de elefante",
        d: "copo stanley",
        ans: "op2"
    }
    ,
    {
        question: "quem desses a gente viu cantar juntos PRIMEIRO",
        a: "djonga",
        b: "major rd",
        c: "hungria",
        d: "mc ig",
        ans: "op3"
    }
    ,
    {
        question: "qual minha comida favorita?",
        a: "istrogonof com coca gelada",
        b: "chocolate branco com oreo",
        c: "churrascada",
        d: "paozinho",
        ans: "op4"
    }
    ,
    {
        question: "seguingo a logica da Karla com K complete (xxxxxxxx) ou ver minha muie interagindo com outro homem",
        a: "comer caco de vidro",
        b: "cair de moto pelado ",
        c: "acido sulfurico",
        d: "sentar num tronco com pregos",
        ans: "op3"
    }
    ,
    {
        question: "na foto que vc tirou minha na academia me seguindo, qual era a cor da minha blusa e o texto acima do meu @",
        a: "preta e (frango)",
        b: "verde e (treino de bests)",
        c: "cinza e (trina fofo)",
        d: "verde e (franguinho)",
        ans: "op4"
    }
    ,
    {
        question: "qual o vulgo atual da sua",
        a: "carne mijada",
        b: "prikito",
        c: "xebiu",
        d: "paozinho",
        ans: "op1"
    },
    {
        question: "qual desses lugares vc n entro na chapa",
        a: "sala",
        b: "golzera",
        c: "casa da sula",
        d: "tabocas",
        ans: "op2"
    }
    ,
    {
        question: "qual era o nome do seu parceiro na sanfona",
        a: "joao",
        b: "klebim",
        c: "pq caralho vc ta lembrano nome de homem ein porra",
        d: "pedrinho :)",
        ans: "op3"
    }
    ,
    {
        question: "pq eu te amo?",
        a: "rabona",
        b: "pepetos",
        c: "n amo",
        d: "pq a vida com vc é  mais leve, em meio a esses caos que eu vivo, eu penso em vc como algo que vai muito além disso, um lugar pra eu voltar, um lugar que eu me sinto bem, e os peitão tb gostosa ",
        ans: "op4"
    }
];

let arrayvalues = 0;
let score = 0;


// Getting Acces to elements from DOM 


let question = document.getElementById('qust');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let submit = document.getElementById('submit-btn');
let scoreis = document.getElementById('score');
let starting = document.getElementById('start');
let restart = document.getElementById('restart');
let highScore = document.querySelector(".high-score");
let start = document.querySelector("#start-next");
let container = document.querySelector(".container");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let scorecomplete = document.querySelector(".score");
let answer = document.querySelectorAll(".button");




// Getting ID of checked radio button

const getAnswer = () => {
    let count = 0;
    let ansis = null;
    answer.forEach((curEle) => {

        if (curEle.checked) {
            ansis = curEle.id;
        }
    });

    return ansis;



};



// By clicking on submit checking answer by comparing (checked id of radio button with array Ans value)
// also loading next questions
submit.addEventListener('click', () => {


    const checkAnswer = getAnswer();
    if (checkAnswer === null) {

    } else {

        if (checkAnswer === data[arrayvalues].ans) {
            score++;
            scoreis.innerText = score;
            result.classList.replace("hidding", "correct");
            result.innerHTML = `<h3>acertou, safada 8===D</h3> `;

        } else {
            result.classList.replace("hidding", "wrong");
            result.innerHTML = `<h3>errou amoi :(</h3> `;


        }
        setTimeout(() => {
            arrayvalues++;
        if (arrayvalues < data.length) {
            answer.forEach((curEle) => {

                if (curEle.checked) {
                    curEle.checked = false;
                }
            });
            loadquestion();

            result.classList.replace("correct", "hidding");
            result.classList.replace("wrong", "hidding");        } else {
        result.classList.add("hidden");
            container.classList.add('hidden');
            scorecomplete.classList.remove("hidden");
            restart.classList.remove("hidden");
        }
            
        }, 2000);
        
        


       
    }


});



// Loading Questions 
function loadquestion() {

    let questionValue = data[arrayvalues];
    question.innerText = questionValue.question;
    option1.innerText = questionValue.a;
    option2.innerText = questionValue.b;
    option3.innerText = questionValue.c;
    option4.innerText = questionValue.d;
}



// By Clicking on Restart website Refresh & some content display hidden
restart.addEventListener("click", () => {
    scorecomplete.classList.add("hidden");
    restart.classList.add("hidden");

})

// This is for navbar which comes from upper side (for hidding navbar)
result.addEventListener("click", () => {
    result.classList.replace("correct", "hidding");
    result.classList.replace("wrong", "hidding");
})



// First Program start from here when user click on Start Button
starting.addEventListener("click", () => {
    starting.classList.add('hidden');

    loadquestion();
    container.classList.remove('hidden');


});
