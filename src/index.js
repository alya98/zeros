module.exports = function getZerosCount(number) {
  var a=5, count=0;
  while(number>=a){
    count+=Math.floor(number/a);
    a*=5;
  }
  return count;
}
