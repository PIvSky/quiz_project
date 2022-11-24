const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    // result.removeClass("d-none").addClass("d-block"); -- wyświetla błąd "result.removeClass is not a function in HTMLFormElement"
    result.classList.remove("d-none").classList.add("d-block"); 
    // pow. funkcja zmienia display stałej result

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value, form.q3.value, form.q4.value,];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
    
        } 
    })
    
    // console.log(score);

});




