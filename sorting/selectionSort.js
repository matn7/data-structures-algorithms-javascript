function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }
    }
    return arr;
}

function selectionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                // figure out lowest item index
                lowest = j;
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

function selectionSort3(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;

}

// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// console.log(selectionSort([4, 10, 15, 6]))
console.log(selectionSort3([34,22,10,19,17]))