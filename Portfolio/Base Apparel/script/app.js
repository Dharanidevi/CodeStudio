const form = document.querySelector(".newsLetter");
const input = document.querySelector(".form-control");
const message = document.querySelector(".info");

form.addEventListener('submit', e => {
    e.preventDefault();

    // console.log(e);

    const email = form.emailAddress.value.toLowerCase();
    // console.log(email);

    const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if(emailPattern.test(email)){
       form.emailAddress.classList.add("class","success"); 
       message.classList.add("class","successMessage"); 
       message.classList.remove("class","errorMessage"); 
       message.innerHTML = "Thank you! We will update you soon.";
    }
    else{
        form.emailAddress.classList.add("class","error"); 
        message.classList.add("class","errorMessage");
        form.emailAddress.classList.remove("class","success");
        message.classList.remove("class","successMessage"); 
        message.innerHTML = "Invalid Email Address!";
        form.reset();
    }

});
