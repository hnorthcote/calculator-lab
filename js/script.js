const operations = {
    '+': function(a, b) {
         return a + b
     },
    '-': function(a, b) {
         return a - b
    },
    '*': function(a, b) {
         return a * b
    },
    '/': function(a, b) {
         return a / b
    }
 }

 const calculator = {
     displayValue: '0',
     firstValue: null,
     secondvalue: false,
     operator: null,
   };
   function inputDigit(digit) {
     console.log(calculator.displayValue);
     if (calculator.displayValue === '0')
     calculator.displayValue = digit
     else calculator.displayValue = calculator.displayValue + digit
     console.log(digit);
   }


   function updateDisplay() {
     const display = document.querySelectorAll('.calculator-screen');
     console.log(display);
     display.value = calculator.displayValue;
   }
   updateDisplay();
   
   const buttons = document.getElementById('buttongrid');
    buttons.addEventListener('click', buttonClick);

   function buttonClick(evt) {
   
     if (!evt.target.matches('button')) {
       return;
     }
   
     if (evt.target.classList.contains('operator')) {
       console.log('operator', evt.target.value);
       return;
     }
   
     if (evt.target.classList.contains('decimal')) {
       console.log('decimal', evt.target.value);
       return;
     }
   
     if (evt.target.classList.contains('all-clear')) {
       console.log('clear', evt.target.value);
       return;
     }

     inputDigit(evt.target.value);
     
     updateDisplay();

   };
