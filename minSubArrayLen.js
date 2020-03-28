function minSubArrayLen([...arr], target) {
    if (arr.length < 1) {
        return null;
    }
    let firstIndex = 0;
    let secondIndex = 1;
    let sum = arr[0] + arr[1];
    let min = Number.MAX_SAFE_INTEGER;
    let sumfound = false;
    while (secondIndex < arr.length && firstIndex < arr.length - 1) {
        console.log("sum:" + sum);
        if (sum >= target) {
            console.log("found, FI: " + firstIndex + ", SI: " + secondIndex);
            min = Math.min(min, secondIndex - firstIndex + 1);
            sum = sum - arr[firstIndex];
            firstIndex++;
            sumfound = true;
        } else {
            secondIndex++;
            sum = sum + arr[secondIndex];
        } 
    }

    return sumfound ? min : 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([2,1,6,5,4], 9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
console.log("---> 3")
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))
console.log("---> 5")
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55))
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95))