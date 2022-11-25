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
    // span.textContent = score + '%';

    })

    // MOJE rozwiązanie
    result.classList.remove("d-none"); 
    scrollTo(0,0);

    // NET NINJA rozwiązanie
    // result.querySelector('span').textContent = '${score}%';
    // result.classList.remove('d-none');

    // animacja 
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    },10)
});

setTimeout(() => {
    alert('Hi Ninja! You should do it faster! :P')
}, 6500);