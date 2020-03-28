// tacocat
function isPalindrome(str) {
    // str[0] == str[length - 1]
    if (str.length === 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1,str.length - 1));
    } else {
        return false;
    }
}

function isPalindrome2(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome2(str.slice(1,-1))
    return false;
}

console.log(isPalindrome("awesome"));