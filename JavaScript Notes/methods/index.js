 //Data Methods and Properties
 
//Main methods with string data

console.log('----------Methods with String Data Notes--------')
 var sentence = 'I love my cat.'

 console.log(sentence);
 //prints cat

 console.log(sentence.length);
 //prints the number of characters in my string.

 console.log(sentence.indexOf('cat')); 
 //prints the index of the word cat in my string. 
 // I can also indexOf 'i' to index a particular letter within my string. 

 console.log(sentence.replace('cat', 'dog'));
 //replaces cat with dog. Prints I love my dog. 
 
 console.log(sentence.toUpperCase());
 //capitalizes every letter in my string. PRINTS I LOVE MY CAT. 

 console.log(sentence.slice(0, 8));
 //will literally slice at the index provided. Prints I love m

console.log(sentence.split(' '));
//will put every word into a seperate element of an array. Could play around with what goes in the paranthesis

console.log('-----------END of String Notes---------------');

//Main methods with numerical data

console.log('--------Using Methods with Numerical Data------');

num = 25;

console.log(num*2);
console.log(num / 2);
console.log(num - 2);
console.log(num + 2);
console.log(num % 3);


console.log(Number.isInteger(num));
//this will print out boolean true of false to confirm if number is an integer (whole number)

console.log(typeof num.toString());
//will convert my number to a string. I added typeOf to confirm that it's in fact, a string

console.log(Math.pow(2, 2));
//will print the power of 2 or 2^2

console.log(Math.pow(num, 2))
//will print 25 to power of 2 or 25^2

console.log(Math.abs(-2));
//will print 2 because that's the absolute value

console.log(Math.round(2.56));
//will print out 3 because this method rounds up.

console.log(Math.floor(2.54));
//will round down and print 2

console.log(Math.min(3,4,5));

console.log(Math.min(33,4,5));
//Will print out the min of the numbers (4)

console.log(Math.max(33,4,5));
//will print out the max number, 33

console.log(Math.random());
//will print out random number

console.log(Math.round(Math.random()* 20));
//will print a rounded random number up to 20;

console.log('-----------End of Methods Using Numerical Data------------')

//Main methods with arrays

console.log('---------Methods with Arrays Notes------------');

var fruits = ['apple', 'cherry', 'banana'];

console.log(fruits.length);
// will print 3 because i have three elements in my array

console.log(fruits.reverse());
// will reverse my array. must use another set of paranthesis and empty

console.log(fruits.reverse());

console.log(fruits.indexOf('banana'));
//prints index of banana

fruits.push('stawberry')
//adds new element to array

console.log(fruits);
//testing my array for push method above

fruits.pop();

console.log(fruits);

fruits.unshift('beginning');
//adds that word to the beginning of my array

console.log(fruits); 

fruits.shift();

console.log(fruits);
//removed element from the beginning of my array

console.log(fruits.join());

console.log('---------End of Methods with Arrays---------')

//Objects
console.log('--------Objects---------');

var student = {
    'name': 'Victoria Ditmer',
    'age': 16,
    'profession': 'student',
    'grades': [90, 97, 30]
}

console.log(student['age']);
console.log(student.age);
//both will give me the age value

student['hobby'] = 'swimming';
//this will add new property, hobby, and new value, swimming, to my student object. 
console.log(student);

delete student.age;
delete student['age'];
//both wil delete the age property and value from the student object
console.log(student);








