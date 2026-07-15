const prompt = require('prompt-sync')();
function calculator(x, y, operator){
    if (operator == "+"){
        return x + y;
    }
    else if(operator == "-"){
        return x - y;
    }
    else if(operator == "*"){
        return x * y;
    }
    else if(operator == "/"){
        return x / y;
    }
    else if(operator == "%"){
        return x % y;
    }
    else{
        return "Invalid operator!"
    }
}

while (true) {
    let firstNumber = Number.parseInt(prompt("Enter the first number: "));
    let secondNumber = Number.parseInt(prompt("Enter the second number: "));
    let operator = prompt("Enter the operator for respective operation: ");

    let result = calculator(firstNumber, secondNumber, operator);
    console.log(result);
}