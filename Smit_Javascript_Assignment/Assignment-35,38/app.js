// 1. Write a function that displays current date & time in your 
// browser.

function date() {
    var now = new Date(); 
    console.log(now);
}
date();


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function fullname(greet) {
    var firstname = "Osama";
    var lastname =  "Sheikh";
    var fullname = firstname + " " +lastname;
    console.log(greet  + " " +  fullname );
    
}
fullname("Wellcom to ")

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers. 

function sum(a ,b) {
    return a + b;
}
var result = sum(6 , 7)
console.log("Sum to number is " + result);
// 4. Calculator:  
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

function Calculate(num1 , num2 , Operator) {
    var results;
    if (Operator === "+") {
        results = num1 + num2
    }
    else if (Operator === "-"){
        results = num1 - num2;
    }
    else if (Operator === "*"){
        results = num1 * num2;
    }
    else if (Operator === "/"){
        results = num1 / num2;
    }
    else if (Operator === "%"){
        results = num1 % num2;
    }
    return results
}
var num1 = +prompt("Enter a first number");
var Operator = prompt("Enter a opetaror :+,-,/,*,%");
var num2 = +prompt("Enter a Second Number");

var add = Calculate(num1 , num2 , Operator);
console.log(add);

// 5. Write a function that squares its argument.

function squares(num ) {
    return num * num
}
var multiply = squares(6);
console.log(multiply);

function FindFatorialNumber() {
    var factorial  = 1;
    for(var i = 1; i<=userFactorial; i++ ){
        factorial = factorial *i
    }
    return factorial
}
var userFactorial = prompt("Enter a number and calculate the factorial number")
console.log(FindFatorialNumber());

// just a practice code in function even and odd number ;
function findEvenAndOddNumber(finduser) {
    if (finduser % 2===0) {
        return "even number"
    }
    return "odd number"
}
var finduser = prompt("Enter a number")
var res = findEvenAndOddNumber(finduser);
console.log(res);
// 7. Write a function that take start and end number as inputs 
// & display counting in your browser

function counting() {
    for(var i = 1; i <= 10; i++){
        console.log(i);
        
    }
}
counting()

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2
// / Take base and perpendicular as inputs.
//  Outer function : calculateHypotenuse()
//  Inner function: calculateSquare()
function Calhypotenuse(params) {
    var base = 40;
    var Perpendicular = 60;
    var hypotenuse = base + Perpendicular;
    function calSquare(params) {
        var square = hypotenuse * hypotenuse;
        return squares
    }
}
console.log(Calhypotenuse(6));



// 9. Write a function that calculates the area of a rectangle. 
//      A = width * height 
//     Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables


function AngleCalulate(width , height) {
    var rectangle = width * height;
    console.log("Area is " + rectangle);
    
}
AngleCalulate(5 , 10);

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

var user_string = prompt("Enter a Sentence");
function palindrome() {
    var rev =  "";
    for (var i = user_string.length-1; i >= 0; i--){
        rev += user_string[i];
    }
    console.log(rev);
    
    if (user_string === rev) {
        return "its palindrom"
    }
    return "its note palindrom"
}
console.log(palindrome());


// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development'
function String(params) {
    var CharString = "Web Development Tutorial"
    var arr = CharString.split(" ");
    var longestWord = arr[0];
    for (var i = 0; i< arr.length; i++){
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord
}
console.log(String());


// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 

function Countletter(params) {
    var letter = "How are You"
    var specificletter = "o"
    var count = 0;
    for(var i = 0; i< letter.length; i++){
        if (specificletter === letter[i]) {
            count++
        }
    }
return count
}
console.log(" Count of Specfic words " +Countletter());
// 14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 

function calcCircumference(radius) {
    var circumference = 2 * radius;
    return circumference
}
console.log(calcCircumference(5));

function calcArea(radius) {
    var Calculateofarea =  radius * radius;
    return Calculateofarea;
}
console.log(calcArea(6));

