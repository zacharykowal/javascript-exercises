const palindromes = function (str) {
    let lowerCase = str.toLowerCase();
    let withoutPunctuation = lowerCase.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    let withoutSpaces = withoutPunctuation.replaceAll(" ", "");
    let reversed = withoutSpaces.split('').reverse().join('');
    return reversed === withoutSpaces;
};

// Do not edit below this line
module.exports = palindromes;
