function calculate(a, b, ops) {
   
    if (a == null || b == null) {
        return 'Error!!! Input a number';
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error!!! Input a valid number.';
    }

    if (ops === 'add') {
        return a + b;
    } else if (ops === 'subtract') {
        return a - b;
    } else if (ops === 'multiply') {
        return a * b;
    } else if (ops === 'divide') {
        if (b === 0) {
            return 'Error!! You cannot divide by zero.';
        }
        return a / b;
    } else {
        return `Error!!! ${ops} is an invalid operation. Use any of the following operation: "add", "subtract", "multiply", or "divide".`;
    }
}


console.log(calculate(500, 100, 'add'));    
console.log(calculate(500, 100, 'subtract'));   
console.log(calculate(500, 100, 'divide')); 
console.log(calculate(500, 0, 'divide')); 
console.log(calculate(500, 100, 'multiply'));    
console.log(calculate(500, 100, 'Integral'));  
