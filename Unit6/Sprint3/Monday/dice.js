function runProgram(input) {
    // Write code here
   input=input.trim().split(" ").map(Number);
   output(input);
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
  function output([a,b,c]){
      if(a==b){
          console.log(c);
      }else if(a==c){
          console.log(b);
      }else if(b==c){
          console.log(a);
      }else{
          console.log(0);
      }
  }