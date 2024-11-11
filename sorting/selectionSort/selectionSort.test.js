const { selectionSort1, selectionSort2 } = require('./selectionSort');


describe('Selection sort', () => {
    it('try to execute with empty array', () => {
        const unsortedArray = []
        const sortedArray = selectionSort1(unsortedArray);
        expect(sortedArray).toEqual([]);
    });

    it('sorts an array of numbers in asecending order (default) - approach 1', () => {
        const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
        const sortedArray = selectionSort1(unsortedArray);
        expect(sortedArray).toEqual([2, 2, 4, 5, 5, 9, 12, 23, 43, 55, 57, 65, 77, 88, 98, 32323]);
    });

    it('sorts an array of numbers in descending order - approach 1', () => {
        const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
        const sortedArray = selectionSort1(unsortedArray, reversed = true);
        expect(sortedArray).toEqual([32323, 98, 88, 77, 65, 57, 55, 43, 23, 12, 9, 5, 5, 4, 2, 2]);
    });
    it('sorts an array of numbers in asecending order (default) - approach 2', () => {
        const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
        const sortedArray = selectionSort2(unsortedArray);
        expect(sortedArray).toEqual([2, 2, 4, 5, 5, 9, 12, 23, 43, 55, 57, 65, 77, 88, 98, 32323]);
    });

    it('sorts an array of numbers in descending order - approach 2', () => {
        const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
        const sortedArray = selectionSort2(unsortedArray, reversed = true);
        expect(sortedArray).toEqual([32323, 98, 88, 77, 65, 57, 55, 43, 23, 12, 9, 5, 5, 4, 2, 2]);
    });

});