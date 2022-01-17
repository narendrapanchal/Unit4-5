function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
  
  
       let str=input[1].trim().split(" ").map(Number);
       let wet=input[2].trim().split(" ").map(Number);
      output(str,wet,+input[0]);
   
  
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
  function output(str,wet,n){
      let sum=0;
      for(let i=0;i<n;i++){
          sum+=str[i]*wet[i];
      }
      console.log(sum);
  }
 