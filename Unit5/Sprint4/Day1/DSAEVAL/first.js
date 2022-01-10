function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=0;
 
       let n=+input[line++];
       let arr=input[line++].trim().split(" ").map(Number);
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
      let obj={};
      for(let i=0;i<n;i++){
          if(obj[arr[i]]==null){
              obj[arr[i]]="me";
              sum+=arr[i];
          }
      }
      console.log(sum);
  }