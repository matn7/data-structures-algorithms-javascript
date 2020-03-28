function maxSubarraySum([...arr], windowLength){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < windowLength) {
        return null;
    }
    let tempSum = 0;
    for (let i = 0; i < windowLength; i++) {
        tempSum += arr[i];
    }

    console.log("tempSum: " + tempSum);
    let max = -10000;
    let first = 0;
    let second = windowLength;

    max = Math.max(max, tempSum);

    for (let i = second; i < arr.length; i++) {
        console.log("arr[first]: " + arr[first] + ", arr[second]: " + arr[second]);

        tempSum = tempSum - arr[first] + arr[second];

        console.log(tempSum);

        max = Math.max(max, tempSum);
        first++;
        second++;
    }

    return max;
}

// console.log(maxSubarraySum([100,200,300,400], 2));
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
// console.log(maxSubarraySum([2,3], 3));