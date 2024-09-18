function createCounter() {
    let count = 0; // Variable inside outer function's scope
    
    return function() {
      count++; // Inner function "remembers" and can modify outer variable
      console.log(count);
    };
  }
  
  const counter = createCounter(); // `createCounter` returns the inner function
  
  counter(); // 1
  counter(); // 2
  counter(); // 3
  
  function setupButton() {
    let clickCount = 0;
    document.getElementById("myButton").addEventListener("click", function() {
      clickCount++;
      console.log(`Button clicked ${clickCount} times`);
    });
  }
  
  setupButton();
  