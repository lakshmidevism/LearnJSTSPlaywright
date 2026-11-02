let num = prompt("Enter a number: ");
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
 // prompt works only in browser environment, not in node.js environment.