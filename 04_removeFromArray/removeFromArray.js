const removeFromArray = function(array, element) {
    if (arguments.length > 1){
        
        let args = Array.from(arguments)
        // First argument is always the coreArray
        coreArray = args[0];
        // Store the other arguments in searchedArray
        searchedArray = [];
        for (let i = 1; i < args.length; i++){
                    searchedArray.push(args[i])
                }

        // Check if is in searchedArray
        function isNotSearched(item){
            if (!(searchedArray.includes(item))){
                return item;
            }
        }
        // Filter items that are not in searchedArray
        newArray = coreArray.filter(isNotSearched);
        return newArray;
    }
    return
};
removeFromArray([1,2,3],1, 2)
// Do not edit below this line
module.exports = removeFromArray;
