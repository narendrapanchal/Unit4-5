function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   let line=1;
   for(let i=0;i<test;i++){
       let n=input[line++];
       let arr=input[line++].trim().split(" ").map(Number);
       output(n,arr);
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
  function output(n,arr){
      let inc=arr[0];
      let exc=0;
      for(let i=1;i<n;i++){
           let ninc=exc+arr[i];
           let nexc=Math.max(exc,inc);
           inc=ninc;
           exc=nexc;
      }
      console.log(Math.max(exc,inc));
  }