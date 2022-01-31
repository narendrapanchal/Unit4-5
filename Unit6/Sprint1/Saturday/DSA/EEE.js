function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line=0;
        let n=+input[line++];
        let arr=input[line].trim().split(" ").map(Number);
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
      let sum=0;
      if(arr[0])
      sum+=(5*110);
      if(arr[1])
      sum+=(2*120);
      if(arr[2])
      sum+=(2*42);
      if(arr[3])
      sum+=(3*53);
      if(arr[4])
      sum+=(2*40);
      if(arr[5])
      sum+=(5*32);
      if(arr[6])
      sum+=(2*126);
      console.log(n*sum)
  }