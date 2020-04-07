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

**Binary Search BIG O**

- Worst and Average Case O(log n)
- Best Case O(1)

### String Searching

**Naive String Search**

- Suppose you want to count the number of times a smaller string appears in a larger string
- Check pairs of characters individually

**Pseudocode**

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return count

***

## Sorting Algorithms

**JavaScript sort**

- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    - If it returns a negative number, a should come before b
    - If it returns a positive number, a should come after b
    - If it returns 0, a and b are the same as far as the sort is concerned

**By value**

```js
function numberCompare(num1, num2) {
    return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```

**By length**

```js
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort(compareByLen);
```

### Bubble Sort

- A sorting algorithm where the largest values bubble up to the top!

**Swap**

- Many sorting algorithms involve some type of swapping functionality (e.g. swapping two numbers to put them in order)

```js
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

**BubbleSort Pseudocode**

- Start looping from a variable called `i` the end of the array towards the beginning
- Start an inner loop with a variable called `j` from the beginning until `i - 1`
- If arr[j] is greater than arr[j + 1], swap those two values!
- Return sorted array

**BIG O**

- Best case O(n)
- Worst, average O(n^2)

### Selection Sort

- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
- Minimise number of swaps

**Selection Sort Pseudocode**

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

**Big O**

- Worst, average case O(n^2)

### Insertion Sort

- Builds up the sort by gradually creating a larger left half which is always sorted

**Insertion Sort Pseudocode**

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, itarate through the sorted portion (i.e. the left side) to place the element in the correct place

**Big O**

- Worst, average case O(n^2)
- Best case O(n)

### Comparing Bubble, Selection and Insertion Sort

- Nearly sorted data fine Bubble and Insertion

| Algorithm | Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
|---|---|---|---|---|
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) | O(1) |

## Intermediate Sorting Algorithms

- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
- There is a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and take longer to understand

### Merge Sort

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

**How does it work?**

```
            [ 8, 3, 5, 4, 7, 6, 1, 2 ]
    [ 8, 3, 5, 4 ]              [ 7, 6, 1, 2 ]
[ 8, 3 ]        [ 5, 4 ]    [ 7, 6 ]        [ 1, 2 ]
[ 8 ] [ 3 ]    [ 5 ] [ 4 ] [ 7 ] [ 6 ]     [ 1 ] [ 2 ]

[ 3, 8 ]        [ 4, 5 ]    [ 6, 7 ]     [ 1, 2 ]
        [ 3, 4, 5, 8]               [ 1, 2, 6, 7 ]
            [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

**Merging Arrays**

- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in two input arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it

**Merging Arrays Pseudocode**

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array

**mergeSort Pseudocode**

- Break up the array into halves until you have arrays that are empty of have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

```
                                    [10,24,73,76]
                                mergeSort([10,24,76,73])
                    [10,24]             merge               [73,76]                              
                mergeSort([10,24])                      mergeSort([76,73])
            [10]         merge    [24]               [76]      merge     [73]
        mergeSort([10])      mergeSort([24])    mergeSort([76])     mergeSort([73])
```

**Big O of mergeSort**

| Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
|---|---|---|---|
| O(n log n) | O(n log n) | O(n log n) | O(n) |

```
O(log n) decompositions
O(n) comparisions per decomposition
```

### Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array 
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

```
s - sorted
                                [ 5, 2, 1, 8, 4, 7, 6, 3 ]
                                  *
                                [ 3, 2, 1, 4, 5, 7, 6, 8]
                                  *           s
                                [ 1, 2, 3, 4, 5, 7, 6, 8]
                                  *     s     s
                                [ 1, 2, 3, 4, 5, 7, 6, 8]
                                  s     s     s

                                [ 1, 2, 3, 4, 5, 7, 6, 8]
                                  s     s     s  *
                                [ 1, 2, 3, 4, 5, 6, 7, 8]
                                  s     s     s     s
``` 

**Pivot Helper**

- In order to implement merge sort, it's useful to first implement a function responsible arrainging elements in an array on either side of pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrenge elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

**Picking a pivot**

- The runtime of quick sort depends in part how one selects the pivot
- Ideally, the pivot should be chosen so that it's rough;y the median value in the data set you're sorting
- For simplicity, always choose the pivot to be the first element

**Pivot Pseudocode**

- Accept three arguments: an array, a start index, and an end index
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
    - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index    
- Return pivot index

**Quicksort Pseudocode**

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
- Base case occurs when consider a subarray with less than 2 elements

**Big O of Quicksort**

| Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
|---|---|---|---|
| O(n log n) | O(n log n) | O(n^2) | O(log n) |

- O(log n) decompositions
- O(n) comparisions per decomposition
- Worst Case: Data already sorted O(n^2)
    - O(n) decompositions and O(n) comparisions per decomposition

### Radix Sort

**Comparision sort**

- Average Time Complexity
    - Bubble Sort - O(n^2)
    - Insertion Sort - O(n^2)
    - Selection Sort - O(n^2)
    - Quick Sort - O(n log(n))
    - Merge Sort - O(n log(n))

- We can do better but not by making comparisions

**Radix Sort**

- Radix sort is a special sorting algorithm that works on  lists of numbers
- It never makes comparisions between elements!
- It exploits the fact that information about the size of a number is encoded in the number of digits
- More digits means a bigger number!

```
[ 1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29 ]

|    |    |    |    |    |    | 86 |    |    |    |
|    |    |    |    |    |    |4386|9637|    |    |
|    |    |    |    |    |    |3556|8157|    |    | 
|    |    |902 |593 | 4  |    |1556|  7 |408 | 29 |
+----+----+----+----+----+----+----+----+----+----+
   0    1    2    3    4    5    6    7    8    9

[ 902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]

|408 |    |    |    |    |    |    |    |    |    |
| 7  |    |    |    |    |6157|    |    |    |    |
| 4  |    |    |    |    |3556|    |    | 86 |    | 
|902 |    | 29 |9637|    |1556|    |    |4386|593 |
+----+----+----+----+----+----+----+----+----+----+
   0    1    2    3    4    5    6    7    8    9

[ 902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593 ]

| 86 |    |    |    |    |    |    |    |    |    |
| 29 |    |    |    |    |593 |    |    |    |    |
| 7  |    |    |    |    |3556|    |    |    |    | 
| 4  |8157|    |4386|408 |1556|9637|    |    |902 |
+----+----+----+----+----+----+----+----+----+----+
   0    1    2    3    4    5    6    7    8    9

[ 4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]

|902 |    |    |    |    |    |    |    |    |    |
|593 |    |    |    |    |    |    |    |    |    |
|408 |    |    |    |    |    |    |    |    |    |      
| 86 |    |    |    |    |    |    |    |    |    |
| 29 |    |    |    |    |    |    |    |    |    |
| 7  |    |    |    |    |    |    |    |    |    | 
| 4  |1556|    |3556|4386|    |    |    |8157|9637|
+----+----+----+----+----+----+----+----+----+----+
   0    1    2    3    4    5    6    7    8    9

[ 4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]   
```

**Radix sort helpers**

- `getDigit(num, place)` - returns the digit in num at the given place value

```js
getDigit(12345, 0);     // 5
getDigit(12345, 1);     // 4
```

```js
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```

- `digitCount(num)` - returns the number of digits in num

```js
digitCount(1);      // 1
digitCount(312);    // 3
```

```js
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

- `mostDigits(nums)` - Given an array of numbers, returns the number of digits in the largest numbers in the list

```js
mostDigits([1234, 56, 8]);      // 4
mostDigits([2, 33, 12345, 6]);  // 5
```

```js
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
```

**Radix sort pseudocode**

- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- return list at the end

**Radix sort Big O**

| Time Complexity (Best) | Time Complexity (Avg) | Time Complexity (Worst) | Space Complexity |
|---|---|---|---|
| O(nk) | O(nk) | O(nk) | O(n + k) |

- n - length of array
- k - number of digits (average)

***

## Data Structures

- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
- Different data structures excel at different things. Some are highly specialized, while other (like arrays) are more generally used

### Class syntax

- ES2015 class syntax
- Classes are blueprints that when created make objects known as instances
- Classes are created with the new keyword
- The constructor function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the static keyword

**What is a class?**

- A blueprint for creating objects with pre-defined properties and methods
- We're going to implement data structures as classes!

```js
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

- The method to create new objects **must** be called constructor
- The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

**Creating objects from classes**

- We use the  **new** keyword

```js
let firstStudent = new Student("Majk", "Majki");
let secondStudent = new Student("Puszek", "Seb");
```

**Instance Methods**

- Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance)

```js
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Mike", "Pusz");

firstStudent.fullName();    // Mike Pusz
```

**Class Methods**

- Utility function for application
- Not related to single student instance (particular)

```js
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents(...students) {
        // ...
    }

    static enrollStudents() {
        return "Enrolling Students";
    }
}

let firstStudent = new Student("Mike", "Pusz");
let secondStudent = new Student("Bill" "Setag");

firstStudent.fullName();    // Mike Pusz
Student.enrollStudents([firstStudent, secondStudent]);
```

## Singly Linked List

**What is a linked list?**

- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

**Lists**

- Do not have indexes!
- Connected via nodes with a next pointer
- Random access is not allowed

**Arrays**

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Pushing

**Pushing pseudocode**

- Function should accept a value
- Create a new node using value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be newly created node
- Increment the length by one
- Return the linked list

### Popping

- Removing a node from the end of the Linked List!

**Popping pseudocode**

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail 
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

### Shifting

- Removing a new node from the beginning of the Linked List!

**Shifting pseudocode**

- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

### Unshifting

- Adding a new node to the beginning of the Linked List

**Unshifting pseudocode**

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newely created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newely created node
- Increment the length of the list by 1
- Return the linked list

### Get

- Retrieving a node by it's position in the Linked List!

**Get pseudocode**

- This function should accept an index
- If the index is less than zero or greater than of equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index

### Set

- Changing the value of a node based on it's position in the Linked List

**Set pseudocode**

- This function should accept a value and an index
- Use your get function to find the specific node
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true

### Insert

- Adding a node to the Linked List at a specific position

**Insert pseudocode**

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise, using the get method, access the node at the index -1 (prev)
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true

###  Remove

**Remove pseudocode**

- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length-1, pop
- If the index is 0, shift
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed

### Reverse

- Reversing the Linked List in place!

**Reverse pseudocode**

- Swap the head and tail
- Create a variable called next
- Create a variable called prev
- Create a variable called node and initialize it to the head property
- Loop through the list
- Set next to be the next property on whatever node is
- Set the next property on the node to be whatever prev is
- Set prev to be the value of the node variable
- Set the node variable to be the value of the next variable

### Big O of Singly Linked Lists

- Insertion - O(1)
- Removal - It depends O(1) or O(N)
- Searching - O(N)
- Access - O(N)

**Recap**

- Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index wheras Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

## Doubly Linked List

- Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!

```
More memory === More Flexibility
```
- It's almost always tradeoff!

### Pushing

- Adding a node to the end of the Doubly Linked List

**Pushing pseudocode**

- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newely created node
- Increment the length
- Return the Doubly Linked List

### Popping

- Removing a node from the end of the Doubly Linked List

**Popping pseudocode**

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node.
- Set the newTail's next to null
- Set oldTail (step 2) prev to null
- Decrement the length
- Return the value removed

### Shift

- Removing a node from the beginning of the Doubly Linked List

**Shifting pseudocode**

- If length is 0, return undefined
- Store the current head property in a variable (oldHead) 
- If the length is one
    - set the head to be null
    - set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to null
- Set old head's next to null
- Decrement the length
- Return old head

### Unshift

- Adding a node to the beginning of the Doubly Linked List

**Unshifting pseudocode**

- Create a new node with the value passed to the function
- If the length is 0
    - Set the head to be the new node
    - Set the tail to be the new node
- Otherwise
    - Set the prev property on the head of the list to be the new node
    - Set the next property on the new node to be the head property
    - Update the head to be the new node
- Increment the length
- Return the list

### Get

- Accessing a node in a Doubly Linked List by its position

**Get pseudocode**

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to the half length of the list
    - Loop through the list starting from the head and loop towards the middle
    - Return the node once  it is found
- If the index is greater than half length of the list
    - Loop through the list starting from the tail and loop towards the middle
    - Return the node once it is found

### Set

- Replacing the value of a node in a Doubly Linked List

**Set pseudocode**

- Create a variable which is the result of the get method at the index passed to function
    - If the get method returns a valid node, set the value of that node to be the value passed to the function
    - Return true;

### Insert

- Adding a node in a Doubly Linked List by a certain position

**Insert pseudocode**

- If the index is less than zero or greater than (or equal to)* the length return false
- If the index is 0, unshift
- If ubdex us the same as the length, push
- Use the get method to access the index - 1 (previous)
- Set the next and prev properties on the correct nodes to link everything together
- Increment the length
- Return true

### Remove

- Removing a node in a Doubly Linked List by a certain position

**Remove pseudocode**

- If the index is less than zero or greater than or equal to the length return undefined
- If the index is 0, shift
- If the index is the same as the length - 1, pop
- Use the get method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Set next and prev to null on the found node
- Decrement the length
- Return the removed node

### Big O of Doubly Linked Lists

- Insert - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)     Searching is O(N/2) actually, but this means O(N)

**Recap**

- Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer previous nodes
- Better than Singly Linked Lists for finding nodes and can be done in half the time!
- However, they do take up more memory considering extra pointer

## Stacks

- A LIFO data structure!
- The last element added to the stack will be the first element removed from the stack 

**Where stacks are used**

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

### Creating a Stack with an Array

### Linked List Implementation

```js
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
```

```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

### Pushing

- Add a value to the top of the stack!

**Pushing pseudocode**

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previous created variable
- Increment the size of the stack by 1

### Popping

- If there are no nodes in the stack, return null
- Create a temporary variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement the size by 1
- Return the value of the node removed

### Big O of Stacks

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

**Recap**

- Stacks are a LIFO data structure where the last value in is always the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built in data structure in JavaScript, but are relatively simple to implement

## Queues

- A FIFO data structure!
- Background tasks
- Uploading resources
- Printing / Task processing

```js
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
```

```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

### Creating a Queue using array

```js
// PUSH with SHIFT
var q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

q.shift();  // FIRST

// OR
// UNSHIFT with POP

q.unshift("FIRST");
q.pop();
```

### Creating a Queue using Linked List

```js
class Queue {
    constructor() {
        this.first = null;
        this.second = null;
        this.size = 0;
    }
}
```

```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

### Enqueue

**Enqueue pseudocode**

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

### Dequeue

**Dequeue pseudocode**

- If there is no first property, return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the value of the node dequeued

### Big O of Queues

- Inserting - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

**Recap**

- Queues are a FIFO data structre, all elements are first in first out.
- Queues are useful for processing tasks and are foundational for more complex data structures
- Insertion and Removal can be done in O(1)

## Trees

- A data structure that consists of nodes in a parent / child relationship
- Lists - linear
- Trees - nonlinear

**Tree terminology**

- Root - The top node in a tree
- Child - A node directly connected to another node when moving away from the Root
- Parent - The converse of a child
- Siblings - A group of nodes with the same parent
- Leaf - A node with no children
- Edge - The connection between one node and another

**Uses for tree**

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artifical Intelligence
- Folders in Operating Systems

### Binary Trees

**How BST works**

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

### Binary Search Tree

```js
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}
```

```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    } 
}
```

### BST Inserting

**Steps - Iteratively or Recursively**

- Create a new node
- Starting at the root:
    - Check if there is a root, if not - the root now becomes that new node!
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it is greater:
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the right property
        
    - If it is less:
        - Check to see if there is a node to the left:
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the left property    

### BST Finding a Node

**Steps - Iteratively or Recursively**

- Starting at the root
    - Check if there is a root, if not - we're done searching!
    - If there is a root, check if the value of the node is the value wa are looking for. If we found it, we're done!
    - If not, check to see if the value is greater than or less than the value of the root
    - If it is greater
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching!
    - If it is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching!


### Big O of BST

- Insertion - O(log n)
- Searching - O(log n)
- Not guaranteed!

## Tree Traversal

- Breadth-first search
- Depth-first search
    - InOrder   
    - PreOrder
    - PostOrder

### Breadth First Search

**Steps - Iteratively**

- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the node
    - If there is a left property on the node dequeue - add it to the queue
    - If there is a right property on the node dequeue - add it to the queue
- Return the variable that stores the values

### Depth First Search

#### PreOrder

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable    
- Return the array of values

#### PostOrder

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - If the node has a right property, call the helper function with the right property on the node
    - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable    
- Return the array of values

#### InOrder

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - Push the value of the node to the variable that stores the values
    - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable    
- Return the array of values

### BFS and DFS

**Which is better?**

- Breadth First
    - Lots of node to keep track of!
- Depth First
    - Fewer nodes to keep track of (Space)
    - InOrder - Used commonly with BST's we got all nodes in the tree in their underlying order
    - PreOrder - Can be used to "export" a tree structure so that it is easily reconstructed or copied (immediately know what the root is)

**Recap**

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search through Trees using BFS abd DFS
