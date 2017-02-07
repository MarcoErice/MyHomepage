"use strict";

var Today = new Date();
var hourNow = Today.getHours();
var hourNow2 = Today.getHours();
var minuteNow =  Today.getMinutes()
var secondNow = Today.getSeconds();
var greeting = "";
if (hourNow > 17 && hourNow < 24){
    greeting = 'Nu är det kväll..';
}
else if (hourNow === 17) {
    greeting = '17';
}
else if (hourNow === 16){
    greeting = '16';
}
else if (hourNow === 15){
    greeting = '15';
}
else if (hourNow === 14){
    greeting = '14';
}
else if (hourNow === 13){
    greeting = '13';
}
else if (hourNow === 12){
    greeting = '12';
}
else if (hourNow === 11){
    greeting = '11';
}
else if (hourNow === 10){
    greeting = '10';
}
else if (hourNow === 9){
    greeting = '9';
}
else if (hourNow > 5 && hourNow < 9){
    greeting = 'Nu är det tidig morgon..';
}
else {
    greeting = 'annan tid';
}
document.getElementById("day").innerHTML = '<h2>' + greeting + '</h2>';
document.getElementById("hour").innerHTML = '<h2>' + hourNow2 + ':' + minuteNow + '</h2>';