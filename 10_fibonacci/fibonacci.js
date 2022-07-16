const fibonacci = function(n) {
    let array = [];
    if (Math.sign(n)!== -1){;
    array[0] = 1;
    array[1] = 1;
    for (let i = 2; i < n; i++){
        array[i] = array[i-1] + array[i-2];
    };
    console.log(array[n-1])
    return array[n-1]
    }else return "OOPS";
};

// Do not edit below this line

module.exports = fibonacci;
