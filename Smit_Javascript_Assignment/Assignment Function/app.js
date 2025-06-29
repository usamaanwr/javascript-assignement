// // 1. Write a function that takes an array of numbers and returns their sum.

function sum(arr_numbr) {
  var arr_numbr = [2, 6];
  return 2 + 5;
}
console.log(sum());

function toFindString(str) {
  var str = "hello";
  var reverse = "";
  for (var i = str.length-1; i >= 0; i--) {
    reverse += str[i]
    
  }
 return reverse
}
console.log(toFindString());
// // 3. Write a function that finds the largest number in an array.
function ToFindLargest() {
  var random = [10, 29, 30, 40, 98, 20];
  var largestNumber = random[0];
  for (var i = 0; i < random.length; i++) {
    if (random[i] > largestNumber) {
      largestNumber = random[i];
    }
  }
  return largestNumber;
}
console.log(ToFindLargest());

// // 4. Write a function that counts the number of vowels in a string.
function countVowels(str) {
  var vowelsCount = 0;
  vowels = ["a","e","i","o","u"];
  // str = str.toLowerCase();
  for(var i =0; i < str.length; i++){
    for(var j = 0; j< vowels.length; j++){
if (str[i] === vowels[j]) {
vowelsCount++;
}
    }
  }
  return vowelsCount
}
var totalCountvowels =  countVowels("Muhammad osama Anwar")
console.log(totalCountvowels);



// // 5. Write a function that removes duplicates from an array.

function removeDuplicate(arr) {
  var emptyArr = [];
  for(var i = 0; i < arr.length; i++){
    if (emptyArr.includes(arr[i]) === false) {
      emptyArr.push(arr[i]);
    }
  }
  return emptyArr
}
var removes = removeDuplicate([2,3,4,4,5,6]);
console.log(removes);

   



// // 6. Write a function that capitalizes the first letter of each word in a sentence.
function capitalizes(str) {
  var capitalized = str.charAt(0).toUpperCase();

  capitalized = capitalized + str.slice(1);
  return capitalized;
}
var capitalized = capitalizes("osama");
console.log(capitalized);




