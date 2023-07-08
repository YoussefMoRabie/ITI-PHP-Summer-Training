// Calculate the area of a circle
var radius = prompt("Enter the radius of the circle:");
var area = Math.PI * Math.pow(radius, 2);
alert("The area of the circle is: " + area.toFixed(2));

// Calculate the square root of a number
var number = prompt("Enter a number to find its square root:");
var squareRoot = Math.sqrt(number);
alert("The square root of the number is: " + squareRoot.toFixed(2));

// Calculate the cosine of an angle
var angle = prompt("Enter an angle in degrees to calculate its cosine:");
var radians = angle * (Math.PI / 180);
var cosine = Math.cos(radians);
document.write("The cosine of the angle "+angle+" is: " + cosine.toFixed(2));
