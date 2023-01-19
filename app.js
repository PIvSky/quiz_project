// references
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');
const span = document.querySelector('span')


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        } 
        
    // Changing display of div with result
    result.classList.remove("d-none"); 
    scrollTo(0,0);

    })



    // animation of score 
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

// 'whip' joke :)
setTimeout(() => {
    alert('Hi fellow! You should do it faster! :P')
}, 6500);