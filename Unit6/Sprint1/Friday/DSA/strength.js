function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
    input[1]=input[1].trim().split(" ").map(Number);
    input[2]=input[2].trim().split(" ").map(Number)
   output(input[1],input[2],+input[0]);
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
  function output(str,chlo,n){
      str.sort();
      chlo.sort();
      let check=true;
      for(let i=0;i<n;i++){
          if(str[i]<chlo[i]){
              check=false;
              console.log("No");
              break;
          }
      }
      if(check){
          console.log("Yes");
      }
  }