const sumAll = function(numOne, numTwo) {
    let result = 0;
    if (typeof numOne === "number" 
        && typeof numTwo === "number"
        && numOne >= 0 
        && numTwo >= 0 
        && numOne % 1 === 0 
        && numTwo % 1 === 0) {
        if (numOne > numTwo) {
            for (let i = numTwo; i <= numOne; i++) {
                result += i;
            }
            return result;
        } else {
            for (let i = numOne; i <= numTwo; i++) {
                result += i;
            }
            return result;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
