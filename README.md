# Big O

```
We say that an algorithm is O(f(n)) if the
number of simple operations the
computer has to do is eventually less than
a constant times f(n), as n increases
```

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different !

**O(1)**
```js
fundtion addUpToGauss(n) {
    return n * (n + 1) / 2;
}
```

**O(n)**
```js
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```

## Simplifing Big O

- Constants Don't Matter
- Smaller Terms Don't Matter
    - O(n+10)           O(n)
    - O(1000n + 50)     O(n)
    - O(n^2 + 5n + 8)   O(n^2)

```
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
```

## Space Complexity

```
We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate
in order to run the code in our algorithm?
```

- Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

**O(1) space!**

```js
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

**O(n) space!**

```js
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArray;
}
```

## Logarithms

```
log2(8) = 3                     2^3 = 8

log2(value) = exponent          2^exponent = value

log === log2
```

- Logarithmic time complexity is great

- Certain searching algorithms have logarithmic time complexity
- Efficient sorting algorithms involve logarithms
- Recursion sometimes involves logarithmic space complexity

## The Big O of Objects

- Unordered, key value pairs!

```js
let instructor {
    firstName: "Mike",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```

- When to use objects
    - When you don't need order
    - When you need fast access / insertion and removal

```
Insertion   -   O(1)
Removal     -   O(1)
Searching   -   O(N)
Access      -   O(1)
```

- When you don't need any ordering, objects are an excellent choice!

### Big O of Object Methods

```
Object.keys     -   O(N)
Object.values   -   O(N)
Object.entries  -   O(N)
hasOwnProperty  -   O(1)
```

### Arrays

- Ordered lists!

```js
let names = ["Majki", "Puszek", "Sebastian"];

let values = [true, {}, [], 2, "animals"];
```

- When to use arrays
    - When you need order
    - When you need fast access / insertion and removal

```
Insertion   -   It depends ...
Removal     -   It depends ...
Searching   -   O(N)
Access      -   O(1)
```    

## Problem solving

```
1. Divise a plan for solving problems
2. Master common problem solving patterns
```

- Understand the Problem
- Explore Concrete Examples
- Break it down
- Solve / Simplify
- Look Back and Refactor

**STEP 1. Understand the Problem**
- Can I restate the problem in my own word?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from ithe inputs? Do I have enough information to solve the problem?
- How should I label the important pieces of data that are a part of the problem?

**STEP 2. Explore Examples**
- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

**STEP 3. Break It Down**
- Explicitly write out the steps you need to take

**STEP 4. Solve/Simplify**
- Find the core difficulty in what you're trying to do
- Temporaily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

**STEP 5. Refactor**
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you imporve the performance of your solution?
- Can you think of other ways of refactor?
- How have other people solved this problem?

```js
function charCount(str) {
    var obj = {}
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}
```

```js
function charCount2(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }        
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&    // numeric (0-9)
        !(code > 64 && code < 91) &&    // upper alpha (A-Z)
        !(code > 96 && code < 123)) {   // lower alpha (a-z)
        return false;
    }
    return true;     
}
```

## Problem Solvin Patterns

### Frequency Counters

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops of O(N^2) operations with arrays / strings
- anagram

### Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well
- sumZero find the first pair where the sum is 0
- countUniqueValues

### Sliding Window

- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.
- maxSubarraySum

### Divide and Conquer

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- This pattern can tremendously descrease time complexity

***

## Recursion

### What is recursion?

- A process (a function in our case) that calls itself
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Used in more complex data structure
- Alternative to iteration

### The Call Stack

- In almost all program languages, there is a built in data structure that manages what happend when functions are invoked
- It's name **the call stack**
- It's a stack data structure
- Any time a fnction is invoked it is placed (pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

**Base Case**

- The condition when the recursion ends.
- Most important concept.

```
(3142 5798 6550 5912)
     (5798 6550 5912)
          (6550 5912)
               (5912)
                   ()
```

**Two essential parts of recursive function!**

- Base Case
- Different Input

```js
function countDown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

- Base case: `if (num === 1) return 1;`
- Recursive call: `return num + sumRange(num-1);`

```js
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1);
}
```

**Recursion Pitfalls**

- No base case
- Forgetting to return or returning the wrong thing
- Stack overflow!

### Helper method recursion

```js
function outer(input) {
    var outerScopedVariable = []
    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable;
}
```

- Collect all of the odd values in an array!

```js
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}
```

### Pure Recursion

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them

```js
function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArray;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```

***

## Searching Algorithms

### Linear search

- Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

**JavaScript has search!**

- There are many different search methods on arrays in JavaScript:
    - indexOf
    - includes
    - find
    - findIndex

- Let's search for 12:

```
[ 5, 8, 1, 100, 12, 3, 12 ]
```

**Linear Search BIG O**

- Best O(1)
- Worst O(n)
- Average O(n)

### Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

**Divide and Conquer**

- Let's search for 15:

```
[ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]
                    **
                      [ 12, 15, 16, 17, 18, 19 ]
                                    **
                      [ 12, 15, 16 ]
                            **  <---- FOUND !
```

**Binary Search Pseudocode**

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
    - Create a pointer in the middle
    - If you find the value you want, return the index
    - If the value is too small, move the left pointer up
    - If the value if too large, move the right pointer down
- If you never find the value, return -1    