function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   for(let i=0;i<+input[0];i++){
       if(+input[1][i]<=15 && +input[2][i]<=7){
           console.log("Stop");
       }else{
           console.log("Boarding")
       }
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