//1.  Write a program that takes two user inputs for first and 
//last name using prompt and merge them in a new variable 
//titled fullName. Greet the user using his full name.

// var first_name = prompt("Enter a first name ");
// var last_name = prompt("Enter a last name ")
// var Greet = first_name + last_name;
// alert("welcome to " + Greet);
// complete 
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobile_model = prompt("Tell me about your favorite mobile phone and model");
// var lenght = mobile_model.length;
// alert("your favorite Phone is " + mobile_model + "lenght of string " + lenght);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var words = "pakistani";
var index = words.indexOf("n")
console.log("your letter words is 'n' " + index);


//4. Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

var words = "hello World";
var index_word = words.lastIndexOf("l");
console.log("your letter words is 'l' " + index_word);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var character = "pakistani";
var index_character = character.charAt(3);

// 
console.log("character at index '3' "  + index_character);

//7. Write a program to replace the “Hyder” to “Islam” in the 
//word “Hyderabad” and display the result in your browser.

var city = "hyderabad";
var replace_city = city.replace("hyder" , "islam");
console.log("the original city is " + city + " replace is " +  replace_city);

// Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser.

var para = "Ali and sami are best friend the play circket and footbal together";
var replace_para = para.replaceAll("and" , "&" )
console.log(replace_para);



//9. Write a program that converts a string “472” to a number 
//472. Display the values & types in your browser.   
 
var num = 123;
var str = num.toString();
console.log( "convert to " + typeof str+  " " + str);

var number = 123;
var con_number = +number;
console.log( "convert to " + typeof con_number+  " " + num);




//10. Write a program that takes user input. Convert and 
//show the input in capital letters. 
var capital_letter = prompt("Enter a any words and convert to capital letter");
var letter = capital_letter.toUpperCase()
alert("conver to capital words " + letter)

//11. Write a program that takes user input. Convert and 
//show the input in title case.
//  var user1 = prompt("Enter a any words");
// var user1 = user1.toLowerCase();

// alert(" your words is convert to title case " + user1);



// First letter uppercase + rest lowercase
// var  capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// var capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

// alert(capitalized); // Output: Pakistan

// 12. Write a program that converts the variable num to 
// string. 
var num_dot = 32.24;
var str_num = num_dot.toString().replace("." , "");
// var str_num = num_dot.toString().replace(".","");
console.log(" type of " + typeof str_num +  " "+ num_dot+  " remove this dot  " + str_num);

// 4. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]

// var bakers = ["cake"," apple pie", " cookie" , "chips" , " patties"];
// var bakers_user = prompt("Welcome to abc bakkers what do you want to order sir/maam");
// var bakers_user = bakers_user.toLocaleLowerCase();

// for (var i = 0; i < bakers.length; i++ ){
//     if (bakers_user === bakers[i]) {
        
//     } else {
        
//     }
// }

// for (var i = 0; i<bakers.length; i++){
//     if (bakers_user === bakers[0]) {
//         alert(bakers[i] + " is avalaible is index 0")
//     }
//     else if (bakers_user === bakers[1]){
//         alert(bakers[i] + " is avalaible is index 1")
//     }
//     else if (bakers_user === bakers[2]){
//         alert(bakers[i] + " is avalaible is index 2")
//     }
//     else if (bakers_user === bakers[3]){
//         alert(bakers[i] + " is avalaible is index 3")
//     }
//     else if (bakers_user === bakers[4]){
//         alert(bakers[i] + " is avalaible is index 4")
//     }
//     else if (bakers_user === bakers[5]){
//         alert(bakers[i] + " is avalaible is index 5")
//     }
//     else{
//         alert("soory is note availabe ")
//     }
//     break
// }

//16. Write a program to convert the following string to an 
//array using string split method. 
// var uni = "university of karachi";

// var arr = uni.split("");
// console.log(arr);

// .17. Write a program to display the last character of a user 
// input.  
var last_word = "pakistan"
var new_words = last_word.charAt(7);
console.log("pakistan last index is " + new_words);

// var user_int = prompt("Enter any text");

// var lastchart = user_int.charAt(user_int.length-1);

// console.log("last character is " + lastchart);

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string. 

var sentance = "The quick brown fox jumps over the lazy dog";
var wordtofind = "the";
var count = 0

var lowersentence = sentance.toLowerCase();
var split_words = lowersentence.split(" ");
for (var i = 0; i < split_words.length; i++) {
    if (split_words[i] == wordtofind) {
        count++
    }
    
}
console.log(count);

// var user_input = prompt("Entr head/tail");

// var result = Math.round(Math.random()*2 +1)
// console.log(result);

// if (user_input == "head" && result=== 0) {
//     alert("you won");
// }
// else if (user_input == "tail" && result=== 1){
// alert("you won")
// }
// else if (user_input == "tail" && result=== 1 || user_input == "head" && result=== 0){
// alert("you won");
// }
// else{
//     alert("invalid number");
// }