// Button variables
const numBtn = document.querySelectorAll('.numbtn')
const opBtn = document.querySelectorAll('.opbtn')
const equalBtn = document.getElementById('equalbtn')
const decBtn = document.getElementById('decbtn')
const clearBtn = document.getElementById('clearbtn')
const deleteBtn = document.getElementById('deletebtn')

// Display Variables
const displayValue = document.getElementById('displayvalue')
const storedValue = document.getElementById('storedvalue')

//Storage Values
let num1 = null;
let num2 = null;
let operator = null;
let total = null;

numBtn.forEach((button) => button.addEventListener('click', (e) => storeValue(button.textContent)))

opBtn.forEach((button) => button.addEventListener('click', (e) => getOperator(button.textContent)))

decBtn.addEventListener('click', button => {
  decimal()
})

equalBtn.addEventListener('click', button => {
  evaluate(operator,num1,num2)
})


clearBtn.addEventListener('click', button => {
  num1 = null;
  num2 = null;
  operator = null;
  displayValue.textContent =''
  storedValue.textContent = ''
})


deleteBtn.addEventListener('click', button => {
  let delValue = displayValue.textContent.slice(0, displayValue.textContent.length - 1)
  if (num2 === null && operator === null){
    displayValue.textContent = delValue
    num1 = Number(displayValue.textContent)
  }
  
  if (num1 !== null && operator !== null){
    displayValue.textContent = delValue
    num2 = Number(displayValue.textContent)
  }
})
  

function storeValue(number){
  //Store first value
  if (operator === null && num2 === null){
  displayValue.textContent += number;
  num1 = Number(displayValue.textContent);
  }
  //Store second value
  if (num1 !== null && operator !== null){
    // storedValue.textContent = num1 + operator
    displayValue.textContent += number
    num2 = Number(displayValue.textContent)
  }
//   console.log(num1)
//   console.log(num2)
}

function getOperator(operVal) {
  if (num1 !== null & num2 === null){
    operator = operVal
    storedValue.textContent = num1 + operator
    displayValue.textContent = ""
  }
  // console.log(operator)
}

function decimal(){
  let searchValue = displayValue.textContent
  if (searchValue.includes('.') === false) {
      displayValue.textContent += '.'
      }
  return
}







function evaluate(operator,num1,num2){
  if (operator === '+'){
    total = addition(num1,num2)
  }
  
  if (operator === '-'){
    total = subtraction(num1,num2)
  }
  
  if (operator === 'X'){
    total = multiplication(num1,num2)
  }
  
  if (operator === '/'){
    total = division(num1,num2)
  }
  displayValue.textContent = total
  storedValue.textContent = ''
  // console.log(total)
}


// Basic Math Functions
function addition(a,b){
    return a + b
}

function subtraction(a,b) {
    return a - b
}

function multiplication(a,b) {
    return a * b
}

function division(a,b) {
    return a / b
}

