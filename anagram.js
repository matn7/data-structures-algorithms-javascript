function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    var obj = {};

    for (var char of first) {
        obj[char] = ++obj[char] || 1;
    }

    for (let i = 0; i < second.length; i++) {
        let char = second[i];
        if (!obj[char]) {
            return false;
        } else {
            obj[char] = --obj[char] || 0;
        }
    }

    return true;

}

console.log(validAnagram("abcaaw", "cbaaaw"))