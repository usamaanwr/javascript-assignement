// Posted 10:01 PM
// Assigned
// 1. Create a program that asks for the user's birth year using `prompt()`, then calculates and alerts their age.

var birthyr = prompt("Enter a birth year ");
var current_yr = 2025;
var substracion_birthyr = current_yr - birthyr;
alert("Your age is " + substracion_birthyr);
//✅

// 2. Use `prompt()` to get 5 numbers from the user, store them in an array, and then calculate and log the average using a loop.
var arr_num = [];
var sum = 0;
for (var i = 0; i < 5 ; i++){
    var user_number = +prompt("Enter a any number");
    arr_num.push(user_number)
}
for (var j = 0; j< arr_num.length;j++){
sum += arr_num[j];
var average = sum / arr_num.length;
}
console.log(arr_num);
alert("calculate the number average"+average);
 // ✅

// 3. Declare an array of 10 numbers. Use a loop to print only the numbers that are divisible by 3.
var number =  [];
var divisibleby3 = [];
for (var i = 0; i < 5; i++){
    var user_input = +prompt("Enter a divided by number 3");
    number.push(user_input);
    
    if (user_input % 3===0) {
        divisibleby3.push(user_input);
    }
    
}

console.log(divisibleby3);
console.log(number);


///✅
// // 4. Write a `for` loop to calculate the factorial of a number entered by the user.
var user_factorial = +prompt("Calculate the factorial number ")
var factorial = 1;
for (var i = 1; i <= user_factorial; i++){
    factorial = factorial * i

}
console.log(user_factorial + " Find factorial number is  " + factorial);
///✅
// loops se reverse kar k bh factorial number nikal saktay h part 2///
// var fact_number = +prompt("Enter a Factorial Number")
// var factorial = 1;
// for(var i = fact_number; i > 0; i--){
//     factorial = factorial * i
// }
// console.log(  fact_number + " Find factorial number is "  + factorial);
//✅

// 
// 5. Create a program that uses `prompt()` to accept a string from the user and prints the string **in reverse** using a loop.
var str = prompt("Enter a any words and reverse this string");
var reverse = "";
for(var i = str.length-1; i>= 0; i-- ){
    reverse += str[i]
}
alert(str + " reverse " + reverse)
//

// 6.How many times a specific letter appears in a given string. Use this in a prompt-based program.

var letter = prompt("Enter a specific sentence");
var specific_letter = "a" ;
var flag = 0;

for (var i = 0; i < letter.length; i++){
    if (letter[i]=== specific_letter) {
        flag++;
    }
}
console.log("letter a appears " + flag + " time") ;
 //✅
// 7. Ask the user to enter five names (one by one using `prompt()`), store them in an array, then sort the array and display it using `console.log()`.

var name_arr = [];
for(var i = 0 ; i < 5; i++){
    var enter_name = prompt("Enter a name");
    name_arr.push(enter_name)
    name_arr.sort();
}
console.log(name_arr);

 //✅

// 8. Use `console.log()` to display a multiplication table (1 to 10) of a number entered by the user via `prompt()`.
// var mulitiplication = prompt("Enter a multiply number and print table");
for(var i = 1; i <= 10;i++){
console.log(mulitiplication + " x " + i + " = " + mulitiplication * i);

}
//✅

// 9. Write a program that asks the user for a sentence and checks how many vowels it contains. Output the count using `console.log()`.

var vowels_string = prompt("Enter a sentence");
var vowels = ["a", "e" ,"i" ,"o" , "u"];
var count = 0;
var new_vowels = vowels_string.toLocaleLowerCase()
for (var i = 0; i < vowels_string.length; i++) {
for (var j = 0; j< vowels.length; j++){
    if (new_vowels[i] === vowels[j]) {
        count++
    }

}
}
console.log(count);
// is ka part two not be use in nested loops 
// var letter = prompt("Enter a specific sentence");
// var specific_letter = ["a", "e", "i", "o", "u"];
// var count = 0;
// var new_letter = letter.toLowerCase();
// for (var i = 0; i < new_letter.length; i++){
//     if (specific_letter=== new_letter[i]) {
//     }
//     count++;
// }
// console.log("letter a appears " + count + " time") ;

//✅
// 10. Create two arrays: one with product names and one with prices. Display each product with its corresponding price using a loop.


var product_array = ["Shoes", "Bag", "Books", "stationary", "Dress"];
var prices_array = [1200, 1000, 800, 200, 1200];
for (var i = 0; i < prices_array.length; i++) {
      console.log(product_array[i] + " Rs. " + prices_array[i]);
    }
    //✅

// 11. Ask the user to enter a temperature in Celsius and convert it to Fahrenheit using the formula:
// `F = (C × 9/5) + 32`, and display the result with `alert()`.
var temperature = prompt("Enter a temperture");
var far_temperature = (temperature * 9/5) +32
console.log("Wheather temperature is convert " + far_temperature);
   //✅
// 12. Write a script to check whether a given string is a palindrome (e.g., “madam” or “racecar”).
var user_str = prompt("Enter a word to check if its apalindrome:");
var reverse = "";
for (var i = user_str.length-2; i >= 0; i--){
    reverse += user_str[i];
    if (user_str === reverse) {
        alert("yor word is palindorme")
    } else {
        alert("uour words is not palindrom")
    }
}

// 13. Ask the user for a number and determine if it is **prime** or not. Show the result using `alert()`.
// var user_check = prompt("Enter the number to check prime or not");
var user_prim = prompt("Enter a number to chexk prime number");
var isPrime = true;

if (user_prim <= 1) {
    isPrime = false
}
else {
  for(var i = 2; i< user_prim; i++){
    if (user_prim[i] % 2== 0) {
        isPrime = false
    }
  }
}
if (isPrime) {
    alert(user_prim + " its a prime number");
}
else{
    alert(user_prim + " its not a prime number")
}

// 14. Create an array of 10 random numbers between 1 and 100. Use a loop to find the largest number in the array.

var rondom_number = [1,2,4,5,66,10,56];
var largest_number = rondom_number[0];
for (var i = 0; i < rondom_number.length; i++){
    if (rondom_number[i] > largest_number) {
        largest_number = rondom_number[i]
    }
}
console.log(largest_number);
// 15. Write a program to simulate a simple calculator. Ask the user for two numbers and an operation (+, −, ×, ÷), and then perform and display the result.

var first_nmber = +prompt("Enter a first number")
var operation = prompt("Enter the operator")
var second_nmber = +prompt("Enter a second number")
if (operation === "+") {
    alert(first_nmber + second_nmber);
}
else if (operation === "-"){
    alert(first_nmber - second_nmber)
}
else if (operation === "*"){
    alert(first_nmber * second_nmber)
}
else if (operation === "/"){
    alert(first_nmber / second_nmber)
}
// else if (operation === "%"){
//     alert(first_nmber % second_nmber)
// }
else {
    alert("Enter a valid number")
}
// 16.Loop through an array of numbers and create a new array with only the numbers greater than 50. Use a `for` loop and `push()` method.

var new_number = [1,3,50,60,76,88,99,100,];
var old_number = [];

for(var i = 0; i< new_number.length; i++){
    if (new_number[i] > 50) {
        old_number.push(new_number[i])
    }
}

console.log(old_number);


var date = date();
console.log(date);
