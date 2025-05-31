//1.  Declare an empty array using JS literal notation to store 
//student names in future.

var array = [];
console.log(array);


//1.  Declare an empty array using JS object notation to store 
//student names in future.

var student_name = ["Osama","Shaheer","Ahsan", "Waqas","Haziq"];
console.log(student_name);

//Declare and initialize a strings array. 

var strings = ["Mango","Banana","Apple","Pinapple"];
console.log(strings);
//Declare and initialize a numbers array
var numbers_array = [1.2,3,4,5,6,6,7,10];
console.log(numbers_array);

//5.  Declare and initialize a boolean array. 
var boolean = [true , false];
console.log(boolean);

//6. Declare and initialize a mixed array.
var mixed_array = ["ture","strings",1.2,]
console.log(mixed_array);


//7. Declare and Initialize an array and store available 
//education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//BS, BCOM, MS, M. Phil., PhD). Show the listed 
//qualifications in your browser like:  
 var education_array = ["SSC", "HSC" ,"BCS" , "BS" , "BCOM" , "MS" , "M. Phil" , "PhD"]
 
 document.write(education_array)

 //Write a program to store 3 student names in an array.Take 
//another array to store score of these three students. 
//Assume that total marks are 500 for each student, display 
//the scores & percentages of students like:

var student_name = ["Ali" ,"Osama" , "Zubair"];

var student_score = [420 , 360 , 400];

var total_marks = 500;
console.log("Score of " + student_name[0]+ " is " + student_score[0] + " Percentage "+ (student_score[0]*100) / total_marks +"%");
console.log("Score of " + student_name[1]+ " is " + student_score[1] + " Percentage "+ (student_score[1]*100) / total_marks +"%");
console.log("Score of " + student_name[2]+ " is " + student_score[2] + " Percentage "+ (student_score[2]*100) / total_marks +"%");

//Initialize an array with color names. Display the array 
//elements in your browser.
//a. Ask the user what color he/she wants to add to the 
//beginning & add that color to the beginning of the array.
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 

var color_name = ["red", "Blue", "Orange","green","black"];
var add = color_name.push("pink","yellow")
console.log(color_name)
console.log(add);


// d. Delete the first color in the array. Display the updated 
// array in your browser. 
var colur_del = ["red", "Blue", "Orange","green","black"];
var del = colur_del.pop(2);
console.log(colur_del);
// console.log(del);

// e. Delete the last color in the array. Display the updated 
// array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 
var colur_add = ["red", "Blue", "Orange","green","black"];
colur_add.splice(1,0,"borwn","green")
console.log(colur_add);

// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. ThenArrays | JAVASCRIPT  
//remove the same number of color(s) from user-defined 
//position/index. . Display the updated array in your 
//browser.
var colur_add2 = ["red", "Blue", "Orange","green","black"];
colur_add2.splice(2 , colur_add2.length-1)
console.log(colur_add2);

//  10 Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
var student_score = [430 ,530 , 200 , 900,];
student_score.sort()
console.log(student_score);





// 11. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.


var cities = ["karachi" , "quetta" , "peshawar", "lahore" , "islamabad", "kpk" ,];
console.log(cities);

select_cities = cities.slice(1 ,4)
console.log(select_cities);

// 12.Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)

var array = ["this","is","my","cat"];
console.log("array method "+array);

var str = ["this is my cat"];
console.log("array string "+str);

// Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var accessories = ["monitor","mouse" , "keyboard", "lcd"];
console.log(accessories);
accessories.unshift("laptop")
console.log(accessories);

// 14.Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-
// First Out) 


var accessories = ["monitor","mouse" , "keyboard", "lcd"];
console.log(accessories);
accessories.push("laptop")
console.log(accessories);

// Write a program to store phone manufacturers (Apple, 
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method

var program = ["Samsung", "Motorola","Nokia", "Sony","Haier"];
console.log(program);


