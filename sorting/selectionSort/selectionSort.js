
module.exports.selectionSort1 = function (arr, reversed = false) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (reversed) {
                if (arr[i] < arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }

            } else {
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }

            }
        }
    }
    return arr;
}

module.exports.selectionSort2 = function (arr, reversed = false) {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxOrMinIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (reversed) {
                if (arr[maxOrMinIdx] < arr[j]) {
                    maxOrMinIdx = j;
                   
                }

            } else {
                if (arr[maxOrMinIdx] > arr[j]) {
                    maxOrMinIdx = j;
                }
                
            }
        }
        [arr[i], arr[maxOrMinIdx]] = [arr[maxOrMinIdx], arr[i]];
    }
    return arr;
}