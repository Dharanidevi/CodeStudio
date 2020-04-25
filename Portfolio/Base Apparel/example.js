// Example #1:
function checkEmail() {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#mail').value)) {
		document.querySelector('.error').style.display = 'none';
		document.querySelector('.error_para').style.display = 'none';
	} else {
		document.querySelector('.error').style.display = 'block';
		document.querySelector('.error_para').style.display = 'block';
		document.querySelector('#mail').style.borderColor = '#f96262';
		document.querySelector('#mail').style.borderWidth = '2px';
	}
}


// Example #2:
const validaForm = document.querySelector('form').addEventListener('submit', function(event){
    const input = document.getElementById('email')
    const div = document.querySelector('.email')
    const msgError = document.querySelector('.msg__error')
    const iconError = document.querySelector('.icon__error')

    if(input.value === '') {
        msgError.style.display = 'block'
        div.classList.add('email__error')
        iconError.style.display = 'block'
        event.preventDefault()
    }
})


// Example #3:
function checkEmail() {
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          document.querySelector("#mail").value
        )
      ) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error_para").style.display = "none";
      } else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error_para").style.display = "block";
        document.querySelector("#mail").style.borderColor = "#f96262";
        document.querySelector("#mail").style.borderWidth = "2px";
      }
    }