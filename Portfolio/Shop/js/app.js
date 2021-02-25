const btnHamburger = document.querySelector('#btnHamburger');
const btnToggler = document.querySelector('.navbar-toggler');


$(function(){

    AOS.init({
        
        easing: 'ease-in-out-back',
        duration: 1000, 
    });

});

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
   
    if(btnToggler.classList.contains('open')){  //Close
        btnToggler.classList.remove('open');
    }
    else{ 
        btnToggler.classList.add('open'); //Open
    }  
})
