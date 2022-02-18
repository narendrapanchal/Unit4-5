function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   for(let i=0;i<+input;i++){
       superdigit(+input[i+1]);
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
      process.exit(0);
    });
  }
  function superdigit(n){
    n=n.toString();
  while (n.length!=1){
    let sum=0;
    for(let i=0;i<n.length;i++){
      sum+=+n[i];
    }
    console.log(sum)
    n=sum.toString();
  }
  console.log(n);
  }