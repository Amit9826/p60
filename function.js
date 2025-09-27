// function printNumbers() 
// {
//     let num = parseInt(prompt("Enter a number:"));
//     if (num >= 11 && num <= 20) {
//         for (let i = 11; i <= 20; i++) {
//             console.log(i);
//         }
//     } else if (num >= 1 && num <= 10){
//         for (let i = 10; i >= 1; i--) {
//             console.log(i);
//         }
//     } else {
//         console.log("Please enter a number between 1 and 20.");
//     }
// }
// printNumbers();







// function rectangleArea() {
//     let length = parseFloat(prompt("Enter length of rectangle:"));
//     let breadth = parseFloat(prompt("Enter breadth of rectangle:"));
//     // let area = length * breadth;
//     // console.log("Area of Rectangle = " + area);
//     // alert("Area of Rectangle = " + area);
//     console.log(length*breadth)
// }
// rectangleArea();



// function printNumbers() 
// {
//     let num = parseInt(prompt("Enter a number:"));
//     if (num >= 11 && num <= 20) {
//         for (let i = 11; i <= 20; i++) {
//             console.log(i);
//         }
//     } else if (num >= 1 && num <= 10){
//         for (let i = 10; i >= 1; i--) {
//             console.log(i);
//         }
//     } else {
//         console.log("Please enter a number between 1 and 20.");
//     }
// }
// printNumbers();


//  let a = parseInt(prompt("Enter a number"));
// function sum(b) {
    
//     if (a % 2 == 0 ) {
//         console.log(a + "even");
//     } else {
//         console.log(a + "odd");
//     }
// }
// sum(a)

let num = parseInt(prompt("Enter a number")); // user input
// b is variable 
function sum(b) {
    for (let a = 10; a >= 1; a--) {  // using loop
        console.log(num * a);       
    }
}
sum(num); // agr 

