//while loops

//for loop structure review

/*
for (x = 0; x <= 10; x++) {
    console.log (x)
}

//while loop

var num = 0; //initializer 
while (num < 11) { //condition
    console.log (num);
    num++ //incrementing
}



var sum = 0; //initializer // store all the addition of numbers //final value
var num = 0; //counter

while (num < 10) {
    sum += num;
    num++
}

console.log(sum);
// 0 + 0 = 0
// 0 + 1 = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 1 = 4
// 4 + 1 = 5
// 5 + 1 = 6
// 6 + 1 = 7
// 7 + 1 = 8
// 8 + 1 = 9
// add the sum of each iteration to output 45

// loop through an array with a while loop




var randomStuff = ['apple', 3.2414, 9999, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastObject']; 

/*
console.log(randomStuff);

var x = 0;

while (x < randomStuff.length) {
    console.log (randomStuff[x]);
    //will output each element in my array
    x++
}


var otherStuff = ['apple', 3.2414, 9999, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastObject']; 

var num = otherStuff.length;

while (num >= 0) {
    //10 >= 0
    console.log (otherStuff[num]);
    num--;
}

*/

var cars = ['lambo', 'BMW', 'tesla'];

var num = 0

while (num < cars.length) {
    console.log (cars[num]);
    num++
}