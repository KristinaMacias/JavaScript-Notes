//if and logical operators
console.log ('---if statements notes---');

//if statements
//equality operators and assignment operators
//logical operators


/********************************************************/

/*
//first example

var num = prompt('Enter a Number')
// prompt to have user input a number of their choosing


if (num > 0) {
    console.log ('the number is positive')
} else if (num < 0) {
    console.log ('the number is negative');
} else {
    console.log ('the number is zero')
}  


//using alert instead of console.log

if (num > 0) {
    alert('the number is positive')
} else if (num < 0) {
    alert('the number is negative');
} else {
    alert('the number is zero')
}  

*/

/********************************************************/

/*
// Example 2

var isRaining = prompt ('Is it raining?');

if (isRaining == 'yes') {
    alert ('Bring an umbrella')
} else {
    alert ('Leave your umbrella at home.')
}

/**********************************************************/

// && (and), || (or), ! (not)

/*
true && true == true
true && false == false
false && true == false
false && false == false

true || true == true
true || false == true
false || true == true
false or false == false

!false == true
!true == false

*/

//job at apple
//must be at least 18 years old and have high school degree

var name = 'Kristina';
var age = 16;
var highSchool = true;

if (age >= 18 && highSchool == true) {
    alert('You are able to apply at apple');
} else {
    alert ('You must be at least 18 years old and have a high school degree to apply at apple');
}

//job at amazon
//job requirements are at least 18 years old or someone that has a high school degree

if (age <= 18 || highSchool == true) {
    alert ('you are able to apply at amazon')
}