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







function rectangleArea() {
    let length = parseFloat(prompt("Enter length of rectangle:"));
    let breadth = parseFloat(prompt("Enter breadth of rectangle:"));
    // let area = length * breadth;
    // console.log("Area of Rectangle = " + area);
    // alert("Area of Rectangle = " + area);
    console.log(length*breadth)
}
rectangleArea();
