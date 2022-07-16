const getTheTitles = function(array) {
    const titles =  array.map(item => {
        return item["title"]
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
