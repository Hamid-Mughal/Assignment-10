// 8. Write a JavaScript function to get difference between two dates in days.  

let date1= new Date('12/05/2017');
let date2= new Date('11/08/2017');
var dayInDt1= date1.getTime();
var dayInDt2= date2.getTime();
var diffInSec= dayInDt1> dayInDt2 ? dayInDt1-dayInDt2 : dayInDt2 - dayInDt1;
var diffInDays= diffInSec/86400000
console.log(diffInDays);
