/**
 * @param {number[]} arr 
 * @param {boolean} reversed 
 * @returns {number[]}  
 */
module.exports.insertionSort = function (arr, reversed = false) {
    for (let i = 1; i < arr.length; i++) {
        let elem = arr[i];
        let j = i;
        if (!reversed) {
            while (j > 0 && arr[j - 1] > elem) {
                arr[j] = arr[j - 1];
                j--;

            }

        } else {
            while (j > 0 && arr[j - 1] < elem) {
                arr[j] = arr[j - 1];
                j--;

            }

        }
        arr[j] = elem;
    }
    return arr;
}