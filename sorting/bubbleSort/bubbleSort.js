/**
 * 
 * @param {number[]} arr 
 * @param {boolean} reversed 
 * @returns {number[]}  
 */
module.exports.bubbleSort = function (arr, reversed = false) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (reversed) {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                }
            } else {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                }
            }
        }
    }
    return arr;
}

/**
 * 
 * @param {number[]} arr 
 * @param {boolean} reversed 
 * @returns {number[]}  
 */
module.exports.optimizedBubbleSort = function (arr, reversed = false) {
    let swapped; 
    do {
        swapped = false;
        for (let j = 0; j < arr.length; j++) {
            if (reversed) {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;

                }
            } else {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;

                }
            }
        }

    } while (swapped)

    return arr;

}

