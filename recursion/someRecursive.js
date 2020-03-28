const isOdd = val => val % 2 !== 0;

function someRecursive(arr, expression) {
    let result = false;
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        console.log(expression(helperInput[0]));
        console.log(helperInput[0]);
        if (expression([helperInput[0]])) {
            // console.log(expression);
            result = true;
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

function someRecursive2(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive2(array.slice(1),callback);
}

// console.log(someRecursive([4,6,8,10,11], val => val > 10))
someRecursive([1,2,3,4], isOdd)