// console.log("async Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000); // Asynchronous operation

// console.log("async End");

console.log("Start");

function doTask() {
  for (let i = 0; i < 1000000000; i++) {
    // Simulate a time-consuming task
  }
  console.log("sync Task finished");
}

doTask(); // This blocks the execution until the task is finished

console.log("sync End");
