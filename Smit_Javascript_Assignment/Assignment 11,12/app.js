//  Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122). 

var str = prompt("Enter a  Alpha and check this code a to z small and Capital");
console.log(str.charCodeAt(str));

// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

var firstnumber =  +prompt("Enter firstnumber")
var secondnumber =  +prompt("Enter Secondnumber")
if (firstnumber > secondnumber) {
    console.log(firstnumber+" first number is greater than secondnumber");
    
} else {
    console.log(secondnumber+" Second number is greater than firstnumber");
    
}

var time = 24 +prompt("Enter a time please morning/niight");

if (time = 12) {
    console.log("good morning");
    
}
else if (time <= 6){
console.log("good Afternoon");

}
else {
    console.log("soory");
    
}
var number = 0;
var num1 =  prompt("Enter a postive value is 0/ lessthan");

if (num1 = 0) {
    console.log("positive value" + number);
    
} 
else if (num1 >= 0 ){
console.log("negative value "+ number );

}
else {
    console.log("sorry invalid number");
    
}


// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.   Validate the two passwords: i. Check if user has entered password. If not, then 
// give message “ Please enter your password” ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.
var corecct_password = "osama123"
var password = prompt("Enter a correct password");

if (password == corecct_password) {
    console.log(" correct password");
    
} 
else if (password == ""){
console.log("Enter  fll a  password");

}
else {
    console.log("wrong password");
    
}
// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 

// }6. This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
console.log(greeting);

}
else {
greeting1 = "Good evening"; 
console.log(greeting1);

}