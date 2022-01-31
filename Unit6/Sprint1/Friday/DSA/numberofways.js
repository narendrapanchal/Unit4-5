function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
    let n=+input[line++];
   let arr=input[line++].trim().split(" ").map(Number);
   let str=input[line++].trim().split(" ").map(Number);
   output(n,arr,str);
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
  function output(n,arr,enrgy){
      let dis=0;
      let sum=0;
      for(let i=n-1;i>=0;i--){
          sum+=enrgy[i];
        if(arr[i]+sum>=100000){
            dis++;
        }
      }
      
      console.log(dis)

  }