// 1.  Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number   

var number = 3.45214;
var round_number = Math.round(number);
var floor_number= Math.floor(number);
var ceil_number = Math.ceil(number)
console.log(" dicimal Number "+ number);

console.log( "convert to Math.Round " + round_number);
console.log( "convert to Math.floor " + floor_number);
console.log( "convert to Math.ceil " + ceil_number);
//complete  

// 2. Write a program that takes a negative floating point 
// // number from user & display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the number   

var neg_number = -2.673;
var neg_Round = Math.round(neg_number)
var neg_floor = Math.floor(neg_number);
var neg_ceil = Math.ceil(neg_number);
console.log("Negative decimal Number is " +neg_number);
console.log( "convert to Math.Round " +neg_Round);
console.log( "convert to Math.Floor " +neg_floor);
console.log( "convert to Math.Ceil " +neg_ceil);
//complete 
// 3. Write a program that displays the absolute value of a 
// number. 
 var positive_number = -4.5;
 var number = Math.abs(Math.round(positive_number));

 console.log(positive_number + " convert to poitive number " + number);
 //complete 
//4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:
 var dice = Math.floor(Math.random() *4 +1)
 var dicetwo = Math.floor(Math.random() *6 +1)
 console.log("rondom dice value is " + dice );
 console.log("rondom dice value is "+ dicetwo);
  //complete 

// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser 
// var user_input = prompt("Entr head/tail");

// var result = Math.round(Math.random()*2 +1)
// console.log(result);

// if (user_input === "head" && result=== 0) {
//     alert("you won");
// }
// else if (user_input === "tail" && result=== 1){
// alert("you won")
// }
// else if (user_input === "tail" && result=== 1 || user_input === "head" && result=== 0){
// alert("you won");
// }
// else{
//     alert("invalid number");
// }
// 6. Write a program that shows a random number between 1 
// and 100 in your browser.
var random = Math.floor(Math.random()*100 + 1);

console.log("1 and 100 random number " + random);
if (random <= 84) {
    console.log("1 and 84 range  number "+ random);
    
}
//7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be

var userInput = prompt("Enter your weight (e.g . 50, 50kgs , 50.2kg:)");

var weight = parseFloat(userInput);

console.log("your weight is " + weight + " kilogram");

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user. 
var secretNumber = Math.floor(Math.random() * 10) +1;
var user = prompt("Enter a secret number");

if (user === secretNumber) {
  alert(" 🎉 You won")
}
else {
  alert(" ❌ Soory! Your secret  number is " + secretNumber)
}