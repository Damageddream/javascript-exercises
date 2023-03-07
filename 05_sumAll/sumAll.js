const sumAll = function(num1, num2) {
    let nums = 0
    let number1 
    let number2
    if(num1 > num2){
        number1 = num2
        number2 = num1
    }
    else{
        number1 = num1
        number2 = num2
    }
    if (num1 < 0 || num2 < 0  || typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'ERROR'
    }
    for ( let i = number1; i < number2+1; i++ ){
        nums += i;
    }
    return nums
};


// Do not edit below this line
module.exports = sumAll;
