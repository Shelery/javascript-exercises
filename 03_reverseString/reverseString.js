const reverseString = function(text) {
    // length = text.length;
    // reversedArray = [];
    // for (let i = 0; i < length; i++){
    //     //reversedArray[i] = text[length-1-i]
    //     reversedArray.unshift(text[i])
    //  }
    //  // Here reversedArray is already empty
    //result = reversedArray.join('');
    result = text.split('').reverse().join('');
    return result;
};
// Do not edit below this line
module.exports = reverseString;
