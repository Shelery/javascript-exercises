const palindromes = function (text) {
    cleanedText = text.toLowerCase().replace(/[^a-z]/g, "");
    return (cleanedText.split("").reverse().join() == cleanedText);

};

// Do not edit below this line
module.exports = palindromes;
