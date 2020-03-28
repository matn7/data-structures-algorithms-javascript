function capitalizeFirst(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        
        result.push(helperInput[0].charAt(0).toUpperCase() + helperInput[0].slice(1));
        
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

console.log(capitalizeFirst(['car','taco','banana']));