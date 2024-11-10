const {bubbleSort, optimizedBubbleSort} = require('./bubbleSort');


describe('bubbleSort', () => {
    it('try to execute with empty array', () => {
      const unsortedArray = []
      const sortedArray = bubbleSort(unsortedArray);
      expect(sortedArray).toEqual([ ]);
    });

    it('sorts an array of numbers in asecending order (default)', () => {
      const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
      const sortedArray = bubbleSort(unsortedArray);
      expect(sortedArray).toEqual([2,  2, 4, 5, 5,  9, 12,23, 43, 55, 57, 65, 77, 88, 98, 32323 ]);
    });

    it('sorts an array of numbers in descending order ', () => {
      const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
      const sortedArray = bubbleSort(unsortedArray, reversed=true);
      expect(sortedArray).toEqual([32323, 98, 88, 77, 65, 57, 55, 43, 23, 12,  9,  5, 5,  4,  2,  2 ]);
    });
    it('sorts an array of numbers using optimized method in  asecending order (default)', () => {
      const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
      const sortedArray = optimizedBubbleSort(unsortedArray);
      expect(sortedArray).toEqual([2,  2, 4, 5, 5,  9, 12,23, 43, 55, 57, 65, 77, 88, 98, 32323 ]);
    });

    it('sorts an array of numbers using optimized method in descending order ', () => {
      const unsortedArray = [23, 32323, 12, 5, 77, 55, 57, 88, 9, 98, 65, 43, 2, 2, 4, 5]
      const sortedArray = optimizedBubbleSort(unsortedArray, reversed=true);
      expect(sortedArray).toEqual([32323, 98, 88, 77, 65, 57, 55, 43, 23, 12,  9,  5, 5,  4,  2,  2 ]);
    });
  });