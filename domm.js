  let num = 0;
  function increase() {
    num = num + 1;  
    document.getElementById("count").textContent = num;
  }
  function decrease() {
    if (num > 0) { 
      num = num - 1; 
      document.getElementById("count").textContent = num;
    }
}