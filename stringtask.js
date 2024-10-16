/*1.take two strings with spaces at starting of one string and 
at the ending of another string remove the spaces and 
concat the both string and 
convert the combined string into uppercase string*/

var a= "   jhansi";
var trimstr=a.trimStart();
console.log(a)
console.log(trimstr)
/* trimend */
var b="janu       ";
var trimstr2=b.trimEnd();
console.log(trimstr2)
/* Concat both strings */
var concatstr=a.concat(b);
console.log(concatstr)
/* convert uppercase str */
var c= concatstr.toUpperCase();
console.log(c)
/*2.Extract Middle Portion of the string and
 get the last index of char of extracted string and
 Convert the portion to Lowercase*/
 var string="jhansi"
 var slice=string.slice(2,4)
 console.log(slice)
 console.log(slice.indexOf("n"))
 console.log(slice.toLowerCase())
 /*3.take a single char and concat string to that char and 
convert the resulted string to uppercase and 
then extract the last second char */
var a='k'
var b="hello"
var concat=a.concat(b);
console.log(concat)
var uppercase=concat.toUpperCase()
console.log(uppercase)
var c=uppercase.charAt(5)
console.log(c)
/*4.4.we have 2 string and extract first 3 chars of first string and
 extra last 3 chars of another string and concat those 2 results together
 and first char and last char of the resulted concatinated string should as uppercase*/
 var str1="paris";
 var str2="washington";
 var slice1=str1.slice(0,3);
 var  slice2=str2.slice(7,10);
 var concat=slice1.concat(slice2);
 var concat1=concat.charAt(0).toUpperCase()+concat.slice(1,5)+concat.charAt(5).toUpperCase();
 console.log(concat1);
 /*5.5.You are given a string with extra spaces at the beginning and end.
 You need to trim the string, make the first and last characters uppercase, 
 extract a specific part of the string, 
 concatenate it with another string*/
var str="      helloworld           "
var str1=str.trim();
console.log(str1)
var uppercase=str1.charAt(0).toUpperCase()+str1.slice(1,9)+str1.charAt(9).toUpperCase()
console.log(uppercase)
var str1_slice=str1.slice(1,8)
var str2="program"
var concat=str1_slice.concat(str2);
console.log(concat)
 
/*6."hello there , how are you " find the index of are word in the sentence*/
var index="hello there , how are you " 
console.log(index.indexOf("are"))

/*     Research Topic :  what is indexOf (),lastIndexOf(), replace(), padStart(), padEnd() methods in js
indexof():The indexOf() method returns the position of the first occurrence of a value in a string.
the indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.
let text = "Hello world, welcome to the universe.";
text.indexOf("e");

lastIndexof():The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
The lastIndexOf() method searches the string from the end to the beginning.
The lastIndexOf() method returns the index from the beginning (position 0).
The lastIndexOf() method returns -1 if the value is not found.
The lastIndexOf() method is case sensitive.
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet", 20);

replace():The replace() method searches a string for a value or a regular expression.

The replace() method returns a new string with the value(s) replaced.

The replace() method does not change the original string.

padStart():
The padStart() method pads a string from the start.
The padStart() method pads a string with another string (multiple times) until it reaches a given length.
let text = "5";
let padded = text.padStart(4,"0");

padEnd():
The padEnd() method pads a string at the end.
The padEnd() method pads a string with another string (multiple times) until it reaches a given length.*/

