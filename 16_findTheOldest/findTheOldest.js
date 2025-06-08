const findTheOldest = function(arr) {

    for (const obj of arr) {
        if (typeof obj.yearOfDeath === 'undefined') {
            obj.yearOfDeath = new Date().getFullYear();
        }
    }

    arr.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return arr[0];

};

// Do not edit below this line
module.exports = findTheOldest;
