function flatten(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (Array.isArray(helperInput[0])) {
            console.log(helperInput[0].slice(0));
            helper(helperInput[0].slice(0));
        } else {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// console.log(flatten([1, 2, 3, [4, 5] ]));
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) );