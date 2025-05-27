var sum = 3 + 5
// console.log(sum);

alert( "Number of sum  "  + sum)
var substraction = 3 - 5;
alert( "subtraction  "  + substraction)
var multiplication = 4 * 5;
alert( " multiplication "  + multiplication)
var division = 12 / 4;
alert( "division "  + division)
var modulus = 12 % 6;
alert( "modulus "  + modulus)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value

var value;

var interval = 20;

++interval;

console.log(interval);

interval + 11;

--interval;

console.log(interval);

var output = interval % 3;
console.log(output);

// console.log(output);
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var price = 600;

var total_tickets = 5;

var total_cost = price * total_tickets;

console.log(total_cost);

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var tabel = 3;
console.log(tabel + " X " + 1 + " = " + tabel * 1);
console.log(tabel + " X " + 1 + " = " + tabel * 2);
console.log(tabel + " X " + 1 + " = " + tabel * 3);
console.log(tabel + " X " + 1 + " = " + tabel * 4);
console.log(tabel + " X " + 1 + " = " + tabel * 5);
console.log(tabel + " X " + 1 + " = " + tabel * 6);
console.log(tabel + " X " + 1 + " = " + tabel * 7);
console.log(tabel + " X " + 1 + " = " + tabel * 8);
console.log(tabel + " X " + 1 + " = " + tabel * 9);
console.log(tabel + " X " + 1 + " = " + tabel * 10);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var temp = 38;
var celsius = ((temp - 32) * 5) / 9;
var Fahrenheit = (temp * 9) / 5 + 32;
temp_output = celsius + Fahrenheit;
console.log(temp_output);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

var item1 = 650;
var item2 = 100;

var qty_item1 = item1 * 3;
var qty_item2 = item2 * 7;
var shiping_cahrges = 100;
total = qty_item1 + qty_item2 + shiping_cahrges;

console.log("Total cost of your order is" + total);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var marks = 980;
var marks_obtained = 804;
total_marks = (marks_obtained / marks) * 100;
console.log("Persentage is " + total_marks);

//  9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var dollars = 104.8;
var Saudi = 28;

var dollars_convert = dollars * 10;
var Saudi_convert = Saudi * 25;
console.log("convert Currency is dollar to pkr " + dollars_convert);
console.log("convert Currency is saudi to pkr " + Saudi_convert);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var arithmetic = (5 * 10) / 2;
console.log("arithmetic " + arithmetic);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

var birth_year = 2001;
var year = 2025;
my_age = birth_year - year;
console.log("my-age is  " + my_age);

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var circle = 20;
var radius = 125.167;
area = circle * radius;

console.log("Radius area in circle " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var snak = "cocomo";
var curent_age = 24;
var max_age = 65;
var amount = 5;

console.log(
  "you will need " +
    curent_age * amount +
    " " +
    snak +
    " to last you until the ripe old age  of " +
    max_age
);
