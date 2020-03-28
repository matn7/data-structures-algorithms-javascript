function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}

// console.log(Object.keys(obj1))
// console.log(Object.keys(obj1)[0])
// console.log(obj1['obj'])
// Object.keys(obj1)[1]   ===> obj
// Object.keys(obj)[0]    ===> inner 
// Object.keys(obj)[1]    ===> otherObj      
// console.log(Object.keys(Object.keys(obj1)[1])[0])


console.log(nestedEvenSum(obj1));
