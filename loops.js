// document.write("<h1> this is <br> &nbsp class the </h1>")


// nasted for loop
// for(let a=1 ; a<=5; a++){
//     // for(let b = 1; b<=a; b++){
//         document.write("*")
//     // }
// }




// for(let a=1 ; a<=3; a++){
//     for(let b = 1; b<=5; b++){
//         document.write("*")
//     }
//     document.write("<br>")
// }




for(let r=1 ; r<=5; r++){
    for(let c = 1; c<=5; c++){
        if(r==1||r==5||c==1||c==5){
        document.write("* ")
    }else{
        document.write("&nbsp&nbsp&nbsp")
    }
    }
    document.write("<br>")

}