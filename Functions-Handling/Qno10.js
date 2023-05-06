// 10. Write a js program to find power of any number using function.
let base= 8;
let exponenet=9;
let result=1
function findPower (base, exponenet){
   for( let i = 1; i<=exponenet; i++){
    result= result * base
   }
   return result
}
console.log(findPower( base , exponenet));