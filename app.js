// importing a module calculator class  
import Calculator from './js/calculator.js'


// getting all the number buttons

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const negateButton = document.querySelector("[data-negate]");
const pecentageButton = document.querySelector("[data-percent]");



// creating a new calculator class

let newCalculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

// number input event
numberButtons.forEach((number)=>{
  number.addEventListener('click',(e)=>{
      newCalculator.appendNumber(e.currentTarget);
      newCalculator.updateDisplay();
  });
})

// operation input event
operationButtons.forEach((operator)=>{
  operator.addEventListener('click',(e)=>{
      newCalculator.chooseOperation(e.currentTarget);
      newCalculator.updateDisplay();
  });
})

// equall button event
equalButton.addEventListener("click",()=>{
  newCalculator.compute();
  newCalculator.updateDisplay();
})

//  all clear event
allClearButton.addEventListener('click',()=>{
    newCalculator= new Calculator(previousOperandTextElement,currentOperandTextElement);
    currentOperandTextElement.innerText = "0";
    previousOperandTextElement.innerText = "";
})

// negate event
negateButton.addEventListener('click',(e)=>{
  newCalculator.appendNegate(e.currentTarget.dataset.negate)
  newCalculator.updateDisplay();
})


// pecentage event
pecentageButton.addEventListener('click',(e)=>{
    newCalculator.calculatePercentage();
    newCalculator.updateDisplay();
})
