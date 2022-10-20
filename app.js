'use strict'

// VARIABLES
let email = document.getElementById('email')
let form =document.getElementById('form')
let submitBtn = document.querySelector('#submit-btn')


submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  validateInput()
})

//VALIDATE INPUT FUNCTION 
const validateInput = () => {
  if(email.value.trim() === '') {
    onError(email,'Whoops! It looks like you forgot to add your email')
  } else {
    if(!isValidEmail(email.value.trim())) {
      onError(email,'Please provide a valid email address')
    } else {
      onSuccess(email)
    }
  }
}


// SUCCESS FUNCTION 
const onSuccess = (input) => {
  let parent = input.parentElement 
  let messageElement = parent.querySelector('small')
  messageElement.style.visibility = 'hidden'
  messageElement.style.marginTop = '0'
  messageElement.style.marginBottom = '0'
  parent.classList.remove('error')
  parent.classList.add('success')
}

//ERROR FUNCTION 
const onError = (input,message) => {
  let parent = input.parentElement
  let messageElement = parent.querySelector('small')
  messageElement.style.visibility = 'visible'
  messageElement.innerText = message
  messageElement.style.marginTop = '.5rem'
  messageElement.style.marginBottom = '1rem'
  parent.classList.add('error')
  parent.classList.remove('success')
}

// VALIDATE EMAIL FUNCTION
const isValidEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}