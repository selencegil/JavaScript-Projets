const quizData = [
    {
        question: 'Bu özelliklerden hangisine sahipsin?',
        a: 'Dobra',
        b: 'İnatçı',
        c: 'Negatif',
        d: 'Sinirli',
        e: 'Mesafeli',
        correct: 'a',
    },
    {
        question: 'Biri önemli bir hata yaptığında nasıl tepki verirsin?',
        a: 'Muhtemelen bağırırım.',
        b: 'Sinirlenirim ama belli etmem.',
        c: 'İğneleyici laflar söylerim.',
        d: 'Sakin kalırım ama bakışlarımla belli ederim.',
        e: 'Olabilir asla bir şey demem de yapmam da...',
        correct: 'b',
    },
    {
        question: 'Bunlardan hangisini yaptın?',
        a: 'Dedikodu kesin zaten...',
        b: 'Birine iftira atmış olabilir.',
        c: 'Bana güvenen birine yalan söyledim.',
        d: 'İşim olmadığı halde "işim var" dedim.',
        e: 'Arkasından konuştuğum biriyle sonradan arkadaş oldum.',
        correct: 'c',
    },
    {
        question: 'Hayalin nedir?',
        a: 'Çok başarılı olmak.',
        b: 'Mutlu bir aileye sahip olmak.',
        c: 'Çok zengin olmak.',
        d: 'Farklı bir ülkeye yerleşmek.',
        e: 'Maddi durum düşünmeden sınırsız gezebilmek.',
        correct: 'd',
    },
    {
        question: 'Burcun Nedir?',
        a: 'Koç',
        b: 'Boğa',
        c: 'Aslan',
        d: 'İkizler',
        e: 'Diğer',
        correct: 'c',
    },

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEls = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswer()

    questionEls.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswer() {
    answerEls.forEach((answerEls) => (answerEls.checked = false))
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
            `
        }
    }
})
