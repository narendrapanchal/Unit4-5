function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
       let [k,n]=input[0].trim().split(" ").map(Number);
       let arr=input[1].trim().split(" ").map(Number);
    output(k,n,arr);
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
  function output(k,n,arr){
    let out=[];
    for(let i=0;i<=n;i++){
        out.push(0);
    };
    for(let i=1;i<=n;i++){
        
    }
  }