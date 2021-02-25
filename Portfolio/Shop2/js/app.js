const btnHamburger = document.querySelector('#btnHamburger');
const btnToggler = document.querySelector('.navbar-toggler');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
   
    if(btnToggler.classList.contains('open')){  //Close
        btnToggler.classList.remove('open');
    }
    else{ 
        btnToggler.classList.add('open'); //Open
    }  
})

$(function(){

AOS.init({
    duration: 1000, 
    easing: 'ease'
});

});