function isSubsequence(first, second) {
    // good luck. Add any arguments you deem necessary.
    if (first.length > second.length) {
        return false;
    }
    let firstIndex = 0;
    let secondIndex = 0;

    while (secondIndex < second.length) {    

        if (first[firstIndex] === second[secondIndex]) {
            firstIndex++;
            secondIndex++;
        } else {
            secondIndex++;
        }
    }

    return firstIndex === first.length;

}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "acb"))