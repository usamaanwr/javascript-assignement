// 1. Write a program that displays current date and time in 
// your browser. 

var now = new Date();
var date = now.toDateString();
var time = now.toTimeString()
console.log(date);
console.log(time);

///simple
var now = new Date();
console.log(now);

// 2. Write a program that alerts the current month in words. 
// For example December.

var now = new Date();
 var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var currentMonth = months[now.getMonth()];
  console.log(" Current Month is "+ currentMonth);

//   3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun.

  var today = new Date()
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var currentDAy = days[today.getDay()];
  console.log(" Today is " + currentDAy);
  
//   4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today. 
var currentDAy = prompt("Enter a days")
if (currentDAy === "sunday" || currentDAy === "saturday"  ) {
    console.log( "Today is funday ");
}
else {
console.log( " its a working days");

}

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

var last_date = new Date()
var less = last_date.getDay()
if (less < 16) {
    console.log("fifteen days months");
    
}
else {
    console.log("last day of month");
    
}


// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object. 

var d = new Date ();
var Minutes = Math.floor(d.getTime() / 60000);
console.log("since midnight , jan. 1 , 1970 " + Minutes);

// .7 Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”. 

var now = new Date();
var Hours = now.getHours();

if (Hours  < 12) {
    console.log("Its AM" );
    
}
else{
    console.log("Its PM");
    
}

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.
var laterdate = new Date (2020 , 11 , 31);
console.log(laterdate);

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015
var ramdanStart = new Date(2015, 5 , 18);
var today = new Date();

var timeDiff = today.getTime() - ramdanStart.getTime();
var Daypassed = Math.floor(timeDiff/(1000 * 60 * 60 * 24))
console.log(Daypassed + " days have passed since 1st Ramadan, 2015.");

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015
var start = new Date();
var refrence = new Date (2012 , 0 , 1);

var nowdiff = start.getTime() - refrence.getTime();
var Count_second = Math.floor(nowdiff/1000);
console.log( "Seconds elapsed since Jan 1, 2015: " + Count_second);

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

var current_date = new Date();
var current_hours = current_date.getHours();
current_date.setHours(current_hours +1);
console.log(current_date);

 
// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

var back_date = new Date();
back_date.setFullYear(back_date.getFullYear()-100);
console.log("Date 100 years back" + back_date.toDateString());


// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

var age = +prompt("Enter your age");
var birthYr = d.getFullYear()-age;
console.log(birthYr);





// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 

// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 
 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
var bill = "K Electric"
var Cutomer_name = "Osama";
var Current_month = d.getMonth() .toLocaleString();
var NumberofUnits = 410;
var  chargeUnits = 16;
var netSurcharge = 340;
var Net_Amount = NumberofUnits * chargeUnits;
var Gross_Amount = Net_Amount + netSurcharge;
// console.log("Customer name is " + Cutomer_name);
// console.log("Current Month  " + currentMonth);
// console.log("Current units  " + NumberofUnits);
// console.log("Charge of units  " + chargeUnits);
// console.log("Net charge (after due date) " + Net_Amount);
// console.log("late payemnet Surcharge is " + netSurcharge);
// console.log("net charge (Befor due date )" + Gross_Amount);

console.log(
   bill + "\n" +
  "Customer Name: " + Cutomer_name + "\n" +
  "Current Month: " + currentMonth + "\n" +
  "Number of Units: " + NumberofUnits + "\n" +
  "Charges per Unit: " + chargeUnits + "\n" +
  "Net Amount Payable (within due date): " + Net_Amount + "\n" +
  "Late Payment Surcharge: " + netSurcharge + "\n" +
  "Gross Amount Payable (after due date): " + Gross_Amount
);





