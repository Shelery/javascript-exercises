const sumAll = function(intStart, intEnd) {
    let sum = 0;
    if (Number.isInteger(intStart) && Number.isInteger(intEnd)){
        
        if (intEnd > intStart){
            for (let i = intStart; i <= intEnd; i++){
                sum += i;
            }
        } else if (intStart > intEnd){
            for (let i = intEnd; i <= intStart; i--){
                sum+=i;
            } 
        } else {
            sum = intStart;
        }



    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
