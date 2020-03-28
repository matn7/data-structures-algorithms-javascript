function reverse(string) {
    if (string.length === 1) {
        return string[0];
    }
    return string[string.length - 1].concat(reverse(string.slice(0, string.length - 1)));
    // return reverse(string.slice(1)) + string[0].consat(string.slice(1));
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool')) // 'loohcsmhtir'