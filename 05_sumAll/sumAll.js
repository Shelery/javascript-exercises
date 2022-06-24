const sumAll = function(intStart, intEnd) {
    
    if (Number.isInteger(intStart) && Number.isInteger(intEnd)){
        if (intStart >= 0 && intEnd >= 0){
            let sum = 0;
            if (intEnd > intStart){
                for (let i = intStart; i <= intEnd; i++){
                    sum += i;
                }
            } else if (intStart > intEnd){
                for (let i = intEnd; i <= intStart; i++){
                    sum+=i;
                } 
            } else {
                sum = intStart;
            }
            return sum;

        } else return "ERROR";
    } else return "ERROR";
};
// Do not edit below this line
module.exports = sumAll;
