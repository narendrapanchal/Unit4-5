function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
 
       let n=+input[0];
       let arr=input[1].trim().split(" ").map(Number);
       output(n,arr);
    
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
      for(let i=0;i<n;i++){
          if(arr[i]<0)
          arr[i]=0;
      }
      console.log(arr.join(""));
  }