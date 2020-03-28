function sameFrequency(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    var firstFreq = first.toString().split("");
    var secondFreq = second.toString().split("");
    var obj = {};

    for (var char of firstFreq) {
        obj[char] = ++obj[char] || 1;
    }

    console.log(obj)
    for (let i = 0; i < secondFreq.length; i++) {
        let char = secondFreq[i];
        console.log(char);
        if (!obj[char]) {
            return false;
        } else {

            obj[char] = --obj[char] || 0;
        }
    }

    return true;

}

function sameFrequency2(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }


console.log(sameFrequency(1234, 3214))