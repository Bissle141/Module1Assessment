//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

const myName = "Alyssa";

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

const faveNum = 13; //sets new var equal to my fave number, 13.

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

let lovesCode = true; //sets new var equal to boolean (true or false), i chose true by default, could have done false. used let because unless otherwise needed booleans should be able to go between true or false

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
//I swear 13 is my favorite num. 
if(faveNum === 13){ 
  console.log("lucky 13!"); 
} else { 
  console.log('not lucky 13');
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for(let i = 0; i < 5; i++){ 
  console.log(faveNum); 
}
