///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//create a for loop, each cycle should take the indexed number and add it to a running total (totalAcres) which will be logged after the loop ends
//create our total var and set to 0
let totalAcres = 0;

//condition could use length, but becuase this is related to days of the week i will use 7.
for(let i = 0; i < 7; i++){
    //go through each array and add the num at the index of i, to the total
    totalAcres += fujiAcres[i];
    totalAcres += galaAcres[i];
    totalAcres += pinkAcres[i];
}
console.log('total acres harvested over the week,', totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
//to find avg, devide total by num of days per week, 7. This will give us the avg across the three acereages
let averageDailyAcres = totalAcres/7;
console.log('average num of acres harvested daily is,', averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    1- Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    2-On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
//floowing steps above, first creat while loop which runs as long as acres left is > 0, inside it will add to days and subtract the avg from acres left

//Another way to do it, which i perfer bc it's one line is to use the Math.round() function built into javascript, this will round the outcome of your equation to the nearest integer.
//you could also use Math.floor() to round down to the nearest integer, but in this case i left in on round because if it takes more than half a day to complete the final bit i think the number should reflect that by rounding up.
days = Math.round(174/averageDailyAcres);

console.log('It will take about', days, 'to complete the harvesting.');

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
//set new vars =  0, then using a for loop to iterate through the arrays, take the given indexed num multiply by 6.5 and add it too the corisponding var 
let fujiTons = 0;
let galaTons = 0;
let pinkTons = 0;

for(let i = 0; i < 7; i++){
    fujiTons += fujiAcres[i]*6.5;
    galaTons += galaAcres[i]*6.5;
    pinkTons += pinkAcres[i]*6.5;
}

console.log('Fuji acres yilds:', fujiTons, 'tons.');
console.log('Gala acres yilds:', galaTons, 'tons.');
console.log('Puji acres yilds:', pinkTons, 'tons.');

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
//just take tons times 2000 and set to the pounds var
let fujiPounds = fujiTons*2000;
let galaPounds = galaTons*2000;
let pinkPounds = pinkTons*200;

console.log('Fuji yeilds,', fujiPounds, 'pounds.');
console.log('Gala yeilds,', galaPounds, 'pounds.');
console.log('Pink yeilds,', pinkPounds, 'pounds.');




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//take price * pounds, round in the console log, so that the raw var is reflects the exact num for future calculations

let fujiProfit = fujiPrice*fujiPounds;
let galaProfit = galaPrice*galaPounds;
let pinkProfit = pinkPrice*pinkPounds;

console.log('Pink Profit:', Math.round(pinkProfit));
console.log('Gala Profit:', Math.round(galaProfit));
console.log('Fuji Profit:', Math.round(fujiProfit));

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//decalre the new var and set to the sum of the individual profits. 
let totalProfit = galaProfit + fujiProfit + pinkProfit;

//round within the console log. Again so that the raw var will reflect the true number for any possible future calculations or utilizations.
console.log('Total Profits:', Math.round(totalProfit), '$');

//you coulds also remove the need for the overall total var and do this all in one line of code see line
// console.log('Total Profits:', Math.round(galaProfit + fujiProfit + pinkProfit), '$');
