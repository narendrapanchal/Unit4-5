function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   for(let i=1;i<=test;i++){
       let arr=input[i].trim().split(" ").map(Number);
       output(arr);
   }
  }
  if (process.env.USER === "Narendra") {
    runProgram(``);
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
      process.exit(0) ;
    });
  }
  function output(arr){
      arr.sort();
      if(arr[2]>arr[0]+arr[1]){
          console.log("Yes")
      }else{
          console.log("No")
      }
  }