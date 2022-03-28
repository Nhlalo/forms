const passwordVisibilityHidden = document.querySelector('.fa-eye-slash');
const passwordVisibility = document.querySelector('.fa-eye');
const text = document.querySelector('.inputContainer :nth-child(5) .passwordText');
const firstpassword = document.querySelector('#firstpassword');
passwordVisibility.addEventListener('click', () => {
  passwordVisibilityHidden.classList.remove('hidden');
  text.textContent = 'Hide';
  passwordVisibility.classList.add('hidden');
  if(firstpassword.type === 'password'){
    firstpassword.type = 'text';
  }
})
passwordVisibilityHidden.addEventListener('click', () => {

  passwordVisibilityHidden.classList.add('hidden');
  passwordVisibility.classList.remove('hidden');
  text.textContent = 'Show';
  if(firstpassword.type === 'text'){
    firstpassword.type = 'password';
  }
})
 
 function confirmPasswordMatch(){
    
 const passwordConfirmation = document.querySelector('#confirmPassword');

 passwordConfirmation.addEventListener('input', () => {
   const validitySignal = document.querySelector('.validitySignal')
   if(passwordConfirmation.value.length < 1){
     validitySignal.textContent = ' '
     passwordConfirmation.style['border-color'] = 'gray';
   }
   else if(firstpassword.value != passwordConfirmation.value ){
     passwordConfirmation.style['border-color'] = 'red';
     validitySignal.textContent = 'Passwords do not match.'

   }
   else{
     passwordConfirmation.style['border-color'] = 'gray';
     validitySignal.textContent = ' '
   }
 })
}
confirmPasswordMatch();





