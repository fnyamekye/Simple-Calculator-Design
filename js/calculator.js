export default class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
 

  // clear function to reset calculator
  clear(){
    this.currentOperand ="";
    this.previousOperand ="";
    this.operation = null;
  }

  // update current operand function
  appendNumber(number){
    if(number.innerText === "." && this.currentOperand.includes(".")) return ;
    this.currentOperand += number.innerText;
  }
  

  //input calculator function
  chooseOperation(operation){
    if(this.currentOperand === "") return;
    if(this.previousOperand !==" ") this.compute();
    this.operation = operation.dataset.operation;
    this.previousOperand = this.currentOperand
     + ` ${this.operation}`;
    this.currentOperand = "";
    
  }

  // add or remove negative function
  appendNegate(negate){
    let current = this.currentOperand+"";
    if(current.includes(negate)){
     this.currentOperand = current.slice(1);

    }else{
    this.currentOperand = negate + this.currentOperand;
  }
   }

 // calculate percentage on current operand function
 calculatePercentage(){
  if(this.currentOperand.length===0) return;
 
  let current = parseFloat(this.currentOperand);
  this.currentOperand = current /100;
  
 }

// compute all the baseic operations
  compute(){
    let computation;

    //change strings to numbers 
    let prev = parseFloat(this.previousOperand);
    let curnt = parseFloat(this.currentOperand);
    
    
    if(isNaN(prev)|| isNaN(curnt)) return;


    // switch statement to check for the operator in order to calculate 
    switch(this.operation){
      case "+":
        computation = prev+curnt;
        break;
      case "-":
        computation = prev-curnt;
        break;
      case "/":
        computation = prev / curnt;
        break;
      case "*":
        computation = prev*curnt;
        break;
      default:
        return;
      

    }
    
    this.currentOperand = computation;
    this.operation = "";
    this.previousOperand = null;

  }

// update display on the screen
  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
    
  }
}
