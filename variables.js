//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

const myName = "Alyssa"; //set var to my name, used const, becuase as much as I have thought about it, this aint changing for a long

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

const faveNum = 13; //sets new var equal to my fave number, 13. Used const because this has been my fav number since i was a kid and it will not be changing. 

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
if(faveNum === 13){ //code block will only run if my fave num is = 13, it is
  console.log("lucky 13!"); //will console log only if above condition is met
} else { //i chose an else, but i could have done an !==, idk why you would when you could just use else, but yeah. Else will be a catch all for all other conditions, which in this case is if the num is set to anything besides 13
  console.log('not lucky 13');
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for(let i = 0; i < 5; i++){ //creates a for loop, sets iterator to 0 for zero indexing, condition will have loop run so 5 times, increments by 1 after every run through of loop
  console.log(faveNum); //for every loop cycle, my fave num will be console logged
}
