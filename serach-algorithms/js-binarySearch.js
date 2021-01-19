const binarySearch = (array, search) => {
  let start = 0;

  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === search) {
      return array[mid];
    }

    if (array[mid] < search) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const searchResult = binarySearch(arrayTest, 5);

console.log(searchResult);
