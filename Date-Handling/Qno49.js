// 49. Write a JavaScript function to get time differences in years between two dates.

dt1 = new Date("June 17, 2015 08:10:00");
dt2 = new Date("October 11, 2017 10:13:00");
function getYearDiff ( date1, date2){
   let dat1= date1.getFullYear()
   let dat2=date2.getFullYear()
   let yearDiff= dat2-dat1
   return yearDiff
}
console.log( getYearDiff(dt1, dt2));
