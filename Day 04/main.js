var number1 = prompt("Enter the first number:");
var number2 = prompt("Enter the second number:");

// Convert the input strings to numbers
number1 = Number(number1);
number2 = Number(number2);

document.write("<h1>Answer for the 1st question is : ");
if (number1===number2)
{
    document.write(number1*6);
}
else{
    document.write(number1+number2);

}
document.write("</h1> <hr>");

document.write("<h1>Answer for the 2nd question is : </h1>");

var userName = prompt("Enter ur name :");
var number = prompt("Enter the number:");
// Convert the input strings to numbers
number = Number(number);
if(!isNaN(number)){
document.write("<ul>");
for (let index = 0; index < number; index++) {
    document.write("<li>");
    document.write("Hello, "+ userName);
    document.write("</li>");
}
document.write("</ul>");
}