const leapYears = function(year) {
    if (Number.isInteger(year)){
        if (year % 4 === 0){
            if (year % 100 === 0){
                if (year % 400 === 0){
                    return true
                }
            } else return true
        }
    return false
    } else return `ERROR`
};

// Do not edit below this line

module.exports = leapYears;
