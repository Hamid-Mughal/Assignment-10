// 18. Write a JavaScript program to calculate age.
let DOB= new Date(2002, 11, 10)
let currDate=new Date()
let age= currDate.getFullYear() - DOB.getFullYear()
console.log(age);
