// 1. Write a JavaScript function to check whether an `input` is a date object or not.   

// Test Data :

console.log(is_date("October 11, 2020 10:13:00"));

console.log(is_date(new Date(78900000)));
console.log(is_date(new Date(8,5,27,12,35,36,0)));

console.log(is_date([2, 4,6 , 0]));

Output :

false

true

true

false