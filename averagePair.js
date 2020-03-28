function averagePair([...args], target) {
    if (args.length < 2) {
        return false;
    }
    let first = 0;
    let last = args.length - 1;

    while (first < last) {
        let sum = (args[first] + args[last]) / 2;
        if (sum === target) {
            return true;
        } else if (sum < target) {
            first++;
        } else {
            last--;
        }
    }
    return false;
}

console.log(averagePair([1,2,3], 2.5))
console.log(averagePair([], 2.5))