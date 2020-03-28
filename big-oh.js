const {performance} = require('perf_hooks');

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Gauss formula
function addUpToGauss(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6))
console.log(addUpToGauss(6))

// which is better
let t1 = performance.now();
addUpToGauss(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)


