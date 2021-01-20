/*
This a binary search representation in java script with Time complexity O (log n) on search (GET)
Note1: binary search works on sorted lists
Note2: this will by default work on array on numbers
Note3: search element should be number for arithmetic operation or return a number on comparator
*/

const binarySearch = (array, search, comparator = null) => {
  //setting start to element 0 and end to ast element of array
  let start = 0;
  let end = array.length - 1;

  // loop till end or start are not equal
  while (start <= end) {
    //get the middle element index to do comparison on it
    let mid = Math.floor((start + end) / 2);

    // console.log(`Mid : ${array[mid]}, search: ${search}, comp res: ${comparator(array[mid], search)}`);
    // If it is found retrun the element
    if (
      comparator ? comparator(array[mid], search)   ===   0 : array[mid] === search
    ) {
      return array[mid];
    }

    // if middle element is less than search element we need to search the upper half of the array
    // then set start to one index after middle index
    // if it is less than middle element then we need to search the lower half of the array
    if (comparator ? comparator(array[mid], search)   <   0 : array[mid] < search) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // if not found return -1
  return -1;
};

// Testing with array of numbers with no comparator passed
const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchResultA = binarySearch(arrayTest, 9);
console.log(searchResultA);

//Testing with array of object with comparator passed
const arrObj = [
  { a: "Jack", b: 12 },
  { a: "Ali", b: 14 },
  { a: "Bob", b: 15 },
  { a: "Sarah", b: 15 },
  { a: "Jill", b: 19 },
  { a: "Emma", b: 22 },
  { a: "Dave", b: 26 },
  { a: "Simon", b: 30 },
];
const searchResultB = binarySearch(arrObj, { b: 30 }, (obj1, obj2) => obj1.b - obj2.b);
console.log(searchResultB);