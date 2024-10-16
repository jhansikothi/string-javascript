/*var str1="everything"
var slicepartstr1=str1.slice(-3);
var upper_case_slice=slicepartstr1.toUpperCase();
var str2="cat";
var concatstr=upper_case_slice.concat(str2);
var lowercase_concat_str=concatstr.toLowerCase();
console.log(lowercase_concat_str)*/

var a="Bahubali";
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())
/* trim */
var a="      jhansi"
var trimstr=a.trimStart();
console.log(a)
console.log(trimstr)
var b="briyani    "
var trimstr2=b.trimEnd();
console.log(b)
console.log(trimstr2)
var c="      mandi      "
var c1=c.trim();
console.log(c1)
/* char at */
var a="10kcoders";
var a1=a.charAt(2)
console.log(a1)
/* charcode at*/
var a="A10kcoders";
var a1=a.charCodeAt(4)
console.log(a1)

/* concat*/
var a="janu";
var b="jhansi";
var concatstr=a.concat(b);
console.log(concatstr)
/* slice */
var a="bahubali";
var a1=a.slice(2,6);
var a1=a.slice(-3)
var a1=a.slice(-2)
console.log(a1)
