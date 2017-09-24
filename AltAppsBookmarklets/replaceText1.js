javascript: 
var a; 
var b; 
a = prompt("bad word?"); 
b = prompt("good word?"); 
$("body").html($("body").html().replace(new RegExp(a, "g"), b));