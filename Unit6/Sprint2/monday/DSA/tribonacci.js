function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   for(let i=1;i<=+input[0];i++){
       output(+input[i]);
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
  function output(n){
      let arr=[];
      arr.push(0);
      arr.push(1);
      arr.push(1);
      arr.push(2);
      arr.push(4);
      for(let i=5;i<=n;i++){
          arr.push(arr[i-1]+arr[i-2]+arr[i-3]);
      }
      console.log(arr[n]);
  }