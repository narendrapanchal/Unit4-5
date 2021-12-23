function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   let line=1;
   for(let i=0;i<test;i++){
       let n=+input[line++];
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
     let lsf=Math.min();
     let op=0;
     let pt=0;
     for(i=0;i<n;i++){
         if(arr[i]<lsf){
             lsf=arr[i];
         }
         let pidt=arr[i]-lsf;
         if(pist>op){
             op=pist;
         }
     }
     console.log(op);
  }