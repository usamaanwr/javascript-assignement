// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


var num = 10;
newNumer = (++num);
console.log( "pre Increnent " + newNumer);

var num1 = 11;
newNumer1 = (num1++);
console.log( "post Increnent " + num1);

var num2 = 12;
newNumer2 = (--num2);
console.log( "pre decrement " + newNumer2);
var num3 = 12;
newNumer3 = (--num3);
console.log( "post decrement " + newNumer3);

// 2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 20;
var b = 12;
a= 2,b = 1;
b = 2, a = 1;

var results = (a , b)
--a;
--a - --b;
--a - --b + + + b;
--a - --b + + + b + b--;
console.log( "The value is a " + a);
console.log( "the value is b " + b);
console.log( "the value results is  " + results);



// 3. Write a program that takes input a name from user &
// greet the user.

var user_number = Number(prompt("Enter a number"));
var user_name = prompt("Emter a name");
// var Wellcom = prompt("Wellcom to ");
alert(user_number)
alert( user_name)
alert("Wellcom to " + " " + user_name)

// 4.
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var tabel = 5;
console.log(tabel + " X " + 1 + " = " + tabel * 1) ;
console.log(tabel + " X " + 2 + " = " + tabel * 2) ;
console.log(tabel + " X " + 3 + " = " + tabel * 3) ;
console.log(tabel + " X " + 4 + " = " + tabel * 4) ;
console.log(tabel + " X " + 5 + " = " + tabel * 5) ;
console.log(tabel + " X " + 6 + " = " + tabel * 6) ;
console.log(tabel + " X " + 7 + " = " + tabel * 7) ;
console.log(tabel + " X " + 8 + " = " + tabel * 8) ;
console.log(tabel + " X " + 9 + " = " + tabel * 9) ;
console.log(tabel + " X " + 10 + " = " + tabel * 10) ;


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject1 = 100
var subject2 = 100
var subject3 = 100
total_subject = (subject1 + subject2 + subject3)
console.log(("total marks is " + total_subject));

var mark1 = 57;
var mark2 = 52;
var mark3 = 53;
total_marks = (mark1 + mark2 + mark3);
console.log("Total marks "  + total_marks);

console.log( "Your percentage is " +  total_marks / total_subject * 100 );


