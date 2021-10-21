function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currVal = arr[i];

        for (let j = i + 1; j > -1 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currVal;
    }

    return arr;
}

module.exports = insertionSort;