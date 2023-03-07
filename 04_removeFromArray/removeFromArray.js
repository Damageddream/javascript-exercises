const removeFromArray = function(aray, ...args) {
    return aray.filter(ele => !args.includes(ele))
};

// Do not edit below this line
module.exports = removeFromArray;
