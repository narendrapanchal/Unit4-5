function findMaxLength(arr) {
    console.log(arr);
    let sum = 0;
    let obj = {};
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if(sum==0){
          max=i+1;
          continue;
      }
      if (obj[sum]) {
        max = Math.max(max, 1+i - obj[sum]);
      } else {
        obj[sum] = i+1;
      }
    }
  //   console.log(obj);
    console.log(max);
  }
  
  function runProgram(input) {
    // Write code here
    input = input.split("\n");
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
      let n = +input[line++];
      let arr = input[line++]
        .trim()
        .split(" ")
        .map((n) => {
          if (n == 0) return -1;
          else return 1;
        });
      // console.log("arr:", arr);
      findMaxLength(arr);
    }
  }
  if (process.env.USERNAME === "Raj Savsani") {
    runProgram(`1
      5
      1 0 0 1 0`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }