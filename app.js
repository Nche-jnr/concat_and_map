// CONCAT AND MAP:
// The concat() method combines two arrays into a single array.
// The forEach() method then iterates(to perform or repeat) through the concatenated array and logs each item to the console
const array1 = [1,2,3];
const array2 = [4,5,6];

// Concatenate the array
const concatenatedArray = array1.concat(array2);

// Map and display each item
concatenatedArray.forEach((item,index)=>{
    console.log(`Item${index + 1}:${item}`);
});

// SORT AND REVERSE:
// The sort() method sort an array in ascending order by default.
// The reverse() method reverses the order of the element in the array

const unsortedArray = [9,3,5,8,1];

// Sort the array in ascending order
const sortedArray = unsortedArray.sort((a,b)=> a - b);
console.log(sortedArray) // Output [1,3,5,8,9]

// Reverse the sorted array
const reversedArray = sortedArray.reverse();
console.log(reversedArray); // Output [9,8,5,3,1]

// MAP AN ARRAY OF OBJECTS;
// The forEach() method iterates(to perform or repeat) through the userInfo array.
// inside the loop, we access each user's properties and log them on the console.

const userInfo = [
    {name: "JOSHUA", age:24},
];

// Map and display each user's information
userInfo.forEach((user,index)=>{
    console.log(` User ${index + 1}`);
    console.log(`NAME: ${user.name}`);
    console.log(`AGE: ${user.age}`); 
});