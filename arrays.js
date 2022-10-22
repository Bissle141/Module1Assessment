//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice();

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push('forest green');

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

let middleNums = numbers.slice(1,-1) 
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

const bigOrSmallArray = [1, 99, 'HI', 42, 69, 102, -10, 159, 352]

// CODE HERE
//create loop, sets initial num to 0 for zero indexing, condition makes it so it will run so long as initial num is less than length (uses .lenght method), increment by 1
//within loop check is indexed num is > 100, if so push 'big' to answers array
//within loop if indexed num is < 100 or equal to 100, push 'small' to answers array

let answers = []; 
for(let i = 0; i < bigOrSmallArray.length; i++){
  if (bigOrSmallArray[i] > 100){
    answers.push('big');
  } else if(bigOrSmallArray[i] <= 100) {
    answers.push('small');
  } else {
    answers.push(NaN);
  }
}
// console.log(answers); // to check results
