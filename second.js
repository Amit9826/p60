//  console.log("This is internal js page")

//          alert("Warning message") 
           
//          document.write("Form JS")



// var num = 12
// var num = 90
// console.log(num)


// let n1 = 90
// n1 = "Amit"
// console.log(n1)


// const name = "Rahul"
// console.log(name)



// let num1 = (parseInt(prompt("Enter 1st number")))
// let num2 = (parseInt(prompt("Enter 2nd number")))
// console.log(num1+num2)
// console.log(num1*num2)




// let r1 = parseInt(prompt("Enter redius of circle"))
// console.log("Area of circle = " +3.14*r1*r1)






// let x = 90;
// let y = 8;
// let z;
// console.log("Value Of x is " + x,"value of new y is " + y);
// z=x;
// x=y;
// y=z;
// console.log("Value of new x is " + x, "value of new y is " + y)






// let n1 = parseInt(prompt("Enter a no"))
// console.log(n1%2)




// let l = parseInt(prompt("Enter the length"))
// let b = parseInt(prompt("Enter the Breadth"))
// console.log("Area of rectangle = " + l*b)





// let a = parseInt(prompt("Enter a number"))
// if(a>0)
// {
//     console.log("Positive number")
// }
// else
// {
//     console.log("Nagitive no")
// }




// let a1 = parseInt(prompt("Enter a Number"))
// let b1 = parseInt(prompt("Enter a Number"))
// if(a1>b1)
// {
//     console.log("a1 is greater then b1")
// }else{
//     console.log("b1 is greater then a1")
// }





// let a = parseInt(prompt("Enter a Number"))
// let b = parseInt(prompt("Enter 2nd Number"))
// let c = parseInt(prompt("Enter 3rd Number"))
// if(b%2==0)
// {
//     console.log(a*b*c)
// }
// else{
//     console.log(a+b+c)
// }





// let a = parseInt(prompt("Enter a Number"))
// if(a>0)
// {
//     console.log("+ ve")
// }else if(a<0){
//     console.log("- ve")
// }else{
//      console.log("neutral")
// }




// let a = parseInt(prompt("Enter a Number"))
// let b = parseInt(prompt("Enter another Number"))
// if(a>b)
// {
//     console.log("a is greater")
// }else if(a<b){
//     console.log("b is greater")
// }
// else{
//     console.log("Both are equal")
// }




// let a = parseInt(prompt("Enter a Number"))
// let b = parseInt(prompt("Enter 2nd Number"))
// let c = parseInt(prompt("Enter 3rd Number"))
// let d = parseInt(prompt("Enter 4th Number"))
// let e = parseInt(prompt("Enter 5th Number"))
// let f = (a+b+c+d+e)/5;

// console.log(f + "%")
// if(f>=90)
// {
//     console.log("A Grade")
// }else if(f>=75 && f<90)
// {
//     console.log("B Grade")
// }
// else if(f>=60 && f<75)
// {
//     console.log("C Grade")
// }
// else if(f>=40 && f<60){
//     console.log("D Grade")
// }
// else
// {
//     console.log(" E Grade")
// }









// let age = parseInt(prompt("enter age "))
// if(age>=18)
// {
//     let b = parseInt(prompt("Press 1 for indian"))

//     if(b==1)
//     {
//         alert("Eligible for voting")
//     }else{
//         alert("Not Eligible for voting")
//     }
// }
// else{
//     alert("U r Underage")
// }






// let num = parseInt(prompt("Enter a number"))
// if(num>0){
// if(num%2==0)
// {
//     console.log("Square = " + (num * num ))
// }else{
//     let area = Math.PI*num*num;
//     console.log("Area of circle = " + area.toFixed(2))
//    }
// }
// else{
//     if(num == -3){
//         console.log("Equal -3")
//     }else{
//         console.log("Not equal -3")
//     }
// }




// let a=1
// do{
//     console.log(a)
//     // document.write("Tv")
//     a++
// }
// while (a<=10)






// let a=10
// do{
//     console.log(a)
//     // document.write("Tv")
//     a--
// }
// while (a>=1)






// let num = 0;
// do {
//     num = parseInt(prompt("Enter number"))
//     // if (num !== 0) {   
//         console.log(num);
// } while (num != 0);







// let num = 0;
// do {
//     num = parseInt(prompt("Enter number")) 
//         console.log(num);
// } while (num != 0);






// let a = 1
// let num =  parseInt(prompt("enter a number"))
// while(a<=10){
//     console.log(num*a)
//     a++
// }





// let a = 15
// let sum = 0
// while(a>=1){
//     sum = sum+a
//     a--
// }
// console.log(sum)





let sum = 0
for(let a=1; a<=15; a++)
{
    if(a%2 != 0)
    {
        sum = sum + a
    }
}
 console.log(sum)
