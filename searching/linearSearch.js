function linearSearch(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([ 5, 8, 1, 100, 12, 3, 12 ],12));