const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const span = document.querySelector('span')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value, form.q3.value, form.q4.value,];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        } 

     // MOJE rozwiązanie
    span.textContent = score + '%';

    })

    // MOJE rozwiązanie
    result.classList.remove("d-none"); 
    // pow. funkcja zmienia display const result; ALE wyrzucał błąd,
    // bo nie potrzebnie dodałem to .classList.add("d-block")

    // NET NINJA rozwiązanie
    // result.querySelector('span').textContent = '%{score}';
    // result.classList.remove('d-none');


});


