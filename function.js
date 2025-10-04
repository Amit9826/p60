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



// function sum() 
// {
//     let num = parseInt(prompt("Enter a number:"));
//     if (num >= 11 && num <= 20) {
//         for (let i = 20; i >= 1; i--) {
//             console.log(i);
//         }
//     } else if (num >= 1 && num <= 10){
//         for (let i = 10; i >= n; i--) {
//             console.log(i);
//         }
//     } else {
//         console.log("Invalid");
//     }
// }
// sum();



//  let a = parseInt(prompt("Enter a number"));
// function sum(b) {
    
//     if (a % 2 == 0 ) {
//         console.log(a + "even");
//     } else {
//         console.log(a + "odd");
//     }
// }
// sum(a)



// let num = parseInt(prompt("Enter a number")); // user input
// // b is variable 
// function sum(b) {
//     for (let a = 10; a >= 1; a--) {  // using loop
//         console.log(num * a);       
//     }
// }
// sum(num); // argument




// 3 
// function demo(name){
//     return name 
// }
// let recive = demo("Amit");
// // console.log(recive);

// // or direct print the value
// console.log(demo("Rahul"));





// let n = parseInt(prompt("enter a number"))
// function add(num)
// {
//     let sum = 0;
//     if(num%2==0){
//         for(let i=1; i<=15; i++){  
//             sum = sum + i
//         }
//     return  sum;          

//     }
//     else {
//         console.log(num + "even")  
//     }
// }
// console.log(add(n));



// function checkNumber(num) {
//     if (num >= 1 && num <= 5) {
//         for (let i = 1; i <= num; i++) {
//             if (i % 2 == 0) {
//             console.log(i + " even")
//             }
//         }
//     } 
//     else if (num > 1 && num <= 15) {
//         let sum = 0;
//         for (let i = 1; i <= num; i++) {
//             sum += i;
//         }
//         return sum;
//     } 
//     else {
//         console.log("invalid")
//     }
// }
// let n = parseInt(prompt("Enter a number between 1 and 15:"));
// let result = checkNumber(n); 
// console.log(result);           



// No arg and with return 
// function demo()
// {
//     let a = 9;
//     return a+a
// }
// console.log(demo())




// function demo()
// {
//     let a = parseInt(prompt("Enter a number"))
//     return 3.14*a*a;
// }
// console.log(demo())








// function areaOfTriangle(base, height) {
//     return 0.5 * base * height;
// }
// let base = parseFloat(prompt("Enter base of triangle:"));
// let height = parseFloat(prompt("Enter height of triangle:"));
// let area = areaOfTriangle(base, height);
// console.log("Area of triangle = " + area);




function areaOfTriangle() {
    let base = parseFloat(prompt("Enter the base of the triangle:"));
    let height = parseFloat(prompt("Enter the height of the triangle:"));

    return 0.5 * base * height; 
}
let area = areaOfTriangle(); 
console.log("Area of triangle = " + area);
alert("Area of triangle = " + area);













