const fibonacci = function(target) {
    let targetNum = Number(target);
    if (targetNum < 0) {
        return "OOPS";
    }
    if (targetNum === 1 || targetNum === 0){
        return targetNum;
    }
    return fibonacci(targetNum - 1) + fibonacci(targetNum - 2);
};

// Do not edit below this line
module.exports = fibonacci;
