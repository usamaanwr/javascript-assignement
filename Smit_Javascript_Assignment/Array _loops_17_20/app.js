// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arr = [[], []];
console.log(arr);

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var arr_matrixs = [
  [1, 2, 3, 4],
  [0, 2, 5, 6, 7],
];
console.log(arr_matrixs[0]);
// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i < 11; i++) {
  console.log(i);
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var table = +prompt("Enter a multiplication table in 2");
var  table_lenght = +prompt("Enter a mutiplictaion table lenght")

for (var i = 1; i <=table_lenght; i++) {
    console.log(table + "  * " + i + " = " + (table * i));

}

// Write a program to print items of the following array
// using for loop:

var fruits_name = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for (var i = 0; i < fruits_name.length; i++) {
  console.log(fruits_name[i]);
}
// 6. Generate the following series in your browser. See
// example output.
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 1; i < counting.length; i++) {
  console.log(counting[i]);
}
// reverse
var revere;
for (var i = 10; i > 0; i--) {
  console.log(i);
}
// odd & even
// var odd_numbe;
for (var i = 0; i < 20; i++) {
  if (i % 2 != 0) {
    
    console.log(" odd number is define " + i);
    // console.log(i);
  }
  
}
// even number
for (var i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    
    console.log(" even  number is define " + i);
    // console.log(i);
  }
  
}
// even number

for (var i = 2; i < 20; i++) {
  if (i % 2 === 0) {
    
    console.log(i+"k");
    // console.log(i);
  }
  
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var bakers = ["cake", "apple_pie", "cookie","chips", "patties"];
var user = prompt("Welcome to abc bakkers what do you want to order sir/maam");
for (var i = 0; i <bakers.length; i++) {
  if (user == bakers[0]) {
    alert(bakers[i] + "is avalaible at index 0")
  } 
  else if ( user == bakers[1]){
 alert(bakers[i] + "is avalaible at index 1")
  }
  else if ( user == bakers[2]){
 alert(bakers[i] + "is avalaible at index 2")
  }
  else if ( user == bakers[3]){
 alert(bakers[i] + "is avalaible at index 3")
  }
  else if ( user == bakers[4]){
 alert(bakers[i] + "is avalaible at index 4")
  }
  else {
    alert("soory is not avalaible")
  }
  break
}

// 8. Write a program to identify the largest number in the
// given array.
 var numbers = [21 , 34 ,99 , 78 , 56  ]
var larger_number = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > larger_number) {
  larger_number = numbers[i]
  }
  
}
console.log(larger_number);
// 9. Write a program to identify the smallest number in the
//given array.

 var numbers = [34 ,99 , 78 , 56 , 21  ]
var larger_number = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] < larger_number) {
  larger_number = numbers[i]
  }
  
}
console.log(larger_number);
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (let i = 0; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}