module.exports = function toReadable (number) {
  var arr = number.toString().split('');


  const upTen = [ "zero", "one", "two", "three", "four",
                      "five", "six", "seven", "eight", "nine"];
  const upTwenty =["ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const upHun = ["ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

 if (arr.length === 1 ){
   var str = upTen[parseInt(arr[0], 10)];
   return str;
 }

//готовы однозначные числа до 9

 if (arr.length === 2 ){

   if (parseInt(arr.join(''), 10) < 20){
   var str = upTwenty[parseInt(arr[1], 10)];
  return str;}

//готовы двухзначные числа до 19

  else if (parseInt(arr.join(''), 10) > 20 && parseInt(arr[1], 10) !== 0){
    var str = upHun[parseInt(arr[0], 10) - 1] + " " + upTen[parseInt(arr[1], 10)];
   return str;}

   else if (parseInt(arr.join(''), 10) >= 20 && parseInt(arr[1], 10) === 0){
     var str = upHun[parseInt(arr[0], 10) - 1];
    return str;}
  }
// готовы двухзначные числа до 99

if (arr.length === 3 ){
  if (parseInt(arr[1], 10) === 0 && parseInt(arr[2], 10) === 0){
  var str = upTen[parseInt(arr[0], 10)] + " hundred";
  return str;}

  if (parseInt(arr[1], 10) === 0){
  var str = upTen[parseInt(arr[0], 10)] + " hundred " + upTen[parseInt(arr[2], 10)];
  return str;}

  if (parseInt(arr[1], 10) !== 0 && parseInt(arr[2], 10) === 0){
  var str = upTen[parseInt(arr[0], 10)] + " hundred " + upHun[parseInt(arr[1], 10)-1];
  return str;}


  if (parseInt(arr[1], 10) < 2 && parseInt(arr[2], 10) !== 0){
var str = upTen[parseInt(arr[0], 10)] + " hundred " + upTwenty[parseInt(arr[2], 10)];
return str;}
  if (parseInt(arr[1], 10) >= 2 && parseInt(arr[2], 10) !== 0){
var str = upTen[parseInt(arr[0], 10)] + " hundred " + upHun[parseInt(arr[1], 10)-1] + " " + upTen[parseInt(arr[2], 10)];
return str;}



}







}
