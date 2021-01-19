/*
This a binary search representation in java script with Time complexity O (log n) on search (GET)
Note1: binary search works on sorted lists
Note2: this will by default work on array on numbers

*/

const binarySearch = (array, search) => {
  //setting start to element 0 and end to ast element of array
  let start = 0;
  let end = array.length - 1;

  // loop till end or start are not equal
  while (start <= end) {
    //get the middle element index to do comparison on it
    let mid = Math.floor((start + end) / 2);

    // If it is found retrun the element
    if (array[mid] === search) {
      return array[mid];
    }

    // if middle element is less than search element we need to search the upper half of the array
    // then set start to one index after middle index 
    // if it is less than middle element then we need to search the lower half of the array
    if (array[mid] < search) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // if not found return -1
  return -1;
};

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const searchResult = binarySearch(arrayTest, 5);

console.log(searchResult);
