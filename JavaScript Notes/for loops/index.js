//for loops
/*
for (i = 0; i <= 15; i++) {
    //initializer; condition to bet met; incrementing/decrementing 
    console.log (i);
}
//prints every iteration from 0 to 15

var fruits = ['mango', 'banana', 'apple'];

for (i = 0; i < 3; i++) {
    console.log (i);
}
//prints the number of indexes in my array, which is 0, 1, 2

var total = 0;
//total is going to be a collector

for (var num = 1; num < 11; num++) {
    total = total += num;
}

console.log ('The total is: ' + total);
//prints 55

*/

//loop through an object

var data = {
    name: 'John',
    age: 28,
    maritalStatus: true
} 

for (var elem in data) {
    console.log (elem, data[elem]);
    //elem will only output the properties. If I add comma and add name of onject and elem in square brackets, i'll be able to access values
}