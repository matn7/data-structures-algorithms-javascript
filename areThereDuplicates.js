function areThereDuplicates(...args) {
    if (args.length < 2) {
        return false;
    }
    var obj = {};

    for (var l of args) {
        if (obj[l]) {
            return true;
        } else {
            obj[l] = 1;
        }
    }
    return false;
}

// Freq
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

// Multiple pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}  

console.log(areThereDuplicates('a','b','c', 'a'))