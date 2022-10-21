//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice(0); //creats the new array and sets it equal to the sliced values including and proceeding the 0 index of favColors

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push('forest green'); //appends the colorCopy array with my favorite color, forest green. It's better than just green and technically could be considered a diff color!!
// console.log(colorCopy); //Checks that the array was set properly

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

let middleNums = numbers.slice(1,4) //creats the new var, sets it equal to the 1-3 indexes of numbers array using the slice method
console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
//create loop, sets iterator to 0 for zero indexing, condition makes it so it will run so long as iterator is less than length (uses .lenght method), increment by 1
//within loop check is indexed num is > 100, if so push 'big' to answers array
//within loop if indexed num is < 100 or equal to 100, push 'small' to answers array

let answers = []; // creates an empty array
for(let i = 0; i < bigOrSmallArray.length; i++){
  if (bigOrSmallArray[i] > 100){
    answers.push('big');
  } else {
    answers.push('small');
  }
}
// console.log(answers); // to check results
