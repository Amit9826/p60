//   let num = 0;
//   function increase() {
//     num = num + 1;  
//     document.getElementById("count").textContent = num;
//   }
//   function decrease() {
//     if (num > 0) { 
//       num = num - 1; 
//       document.getElementById("count").textContent = num;
//     }
// }



 var count = document.getElementById("count")
let num = 0;
  function increase() {
    count.innerHTML = ++num;
  }
  function decrease() {
    if (num > 0) { 
      count.innerHTML = --num;
    }else{
      alert("not less then 0")
    }
}