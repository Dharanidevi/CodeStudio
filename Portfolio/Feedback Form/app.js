
const form = document.querySelector('.feedback-form');
const result = document.querySelector('.result');



form.addEventListener('submit', e => {

    e.preventDefault(); // prevent page from refreshing once user click submit

    let score = 0;  //set score to 0
    const feedbacks = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]; //get the answers user submitted

    //check answers
    feedbacks.forEach(feedback => { //compare the answers between actual answer and user submitted
        // if(feedback !== null){
        //     score += (feedback/20)*100;        //add the scores
            
        // }else{
        //     score = 0;
        // }

        if(feedback===''){
            console.log('error');
            result.querySelector('.result-info').classList.add('d-none');  
            result.querySelector('.error').classList.remove('d-none');  
            
        }else{
            score += (feedback/20)*100;
        }

    })
    
    // console.log(score);

    //move to the top of the page
    scrollTo(0,0);

    //display the result of the feedback

    //to remove class 
    result.classList.remove('d-none');


    let outputResult = 0;

    const timer = setInterval(() => {

        // result.querySelector('span').textContent = `${outputResult}%`;  
        rate = result.querySelector('span');

        if(outputResult > 50 )
        {
            rate.style.color = 'limegreen';
        }
        else{
            rate.style.color = 'crimson';
        }
       
        rate.textContent = `${outputResult}%`;

        if(outputResult === score)
        {
            clearInterval(timer);
        }
        else{
            outputResult++;
        }
    }, 10);


});



