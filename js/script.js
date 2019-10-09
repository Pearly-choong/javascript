// alert ('Hello from external JS file');

/* multiple lines commnet
Alert() products output in an alert box
document. write() produces on othe browser window
*/

document.write('Greeting from document.write()');

console.log('Hi, I am happy to help you with debugging');

console.log('you can\'t delete me');

//  changing the html document from js script
// by adding plus + , to include html h1 text and changing from js

// not a secured way
//document.getElementById('heading').innerHTML+="</br>Learning JS </br> ";

// secured but reduced performance
//document.getElementById('heading').innerText += 'Hi, I am produced by innerText';

// secured and increase performance
//document.getElementById('heading').textContent += 'Hello from textContent';

/* Data types
data - raw values, facts, and figures
after processing data will be called as information
numeric type eg: +1, -5, 5.4 (no space or special characters)
string type - can contain alphabets, numbers, special characters eg:
boolean or logical type - yes/no, true/false, 1/0
date format
time format
currency format - $, pound symbol
*/

// semicolon is used at the end of every statementto denote the end
// camelcase is preferred for Javascript
// values to be stored in a variable should be declare

var name = 'Daniel'; // var is a keyword used to declare a variable
// A variable is a name used to store a value/ data
var firstName = 'Choong';
var myName = 'Pearly'; // double or single quotes can be used to store a string value
var myAge = 16; //number values are not written with quotation mark, only string are
var yourAge = 20;
var a = 5;
var b = 12;
var c = a + b;

console.log('c'); // produces the letter c, treats as a string values
console.log(c); // produces the value of c that is calculated

console.log(myName + ' ' + firstName); //adding strings i called string concatenation

var x = '650'; //string value

var y ='50'; //string value
var z = x + y;
console.log(z);

/*operators
Mathematical / arithmetic operators ... + ... - ... *(asterisk: times) .../ (slash: divide)
relational oprators .... <(less than)... > (greater than)....
<=(less than or equal)..... >= (greater than or equal)....
==(equal)
*/

var myExpression = a + 25 - 3 * 2; //60 or 24? follow BODMAS
console.log(myExpression);

var ageResult = myAge < yourAge;
console.log(ageResult);

var licenseAge = 16;
var myEligibility = myAge >= licenseAge;
console.log(myEligibility);

if (myAge >= licenseAge) {
  alert ('Yes, you can drive');

} else {
  alert ('Sorry, you can\' drive');
}
