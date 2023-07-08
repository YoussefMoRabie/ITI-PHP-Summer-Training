number1=4;
number2=8;
number3=1;
sum = number1+number2+number3;
mul = number1*number2*number3;
div = number1/number2/number3;
document.write("<span>Sum of 3 values </span> "+number1+"+"+number2+"+"+number3+" = "+ sum );
document.write("<br>")
document.write("<span>mul of 3 values </span> "+number1+"*"+number2+"*"+number3+" = "+ mul );
document.write("<br>")
document.write("<span>div of 3 values </span> "+number1+"/"+number2+"/"+number3+" = "+ div );

document.write("<hr>")
document.write("<hr>")

document.write("<h1>Sorting</h1>");

var nums = [5, 7, 1 , 9 , 4];
document.write("<span>values is </span> "+ nums.join(" , "));
document.write("<br>")
document.write("<span>values after sort descending  </span> "+ nums.sort(function(a, b) {
    return b - a;
  }).join(" , "));
document.write("<br>")
document.write("<span>values after sort ascending  </span> "+ nums.sort(function(a, b) {
    return a - b;
  }).join(" , "));
