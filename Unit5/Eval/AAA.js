function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let arr=input[line++].trim().split(" ").map(Number);
       output(n,arr,i+1);
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
  function output(n,arr,ase){
      let left=arr[0];
      let right=arr[1];
      for(let i=2;i<n;i+=2){
          if(arr[i]+left>= arr[i]-arr[i-1]+right){
              let temp=arr[i]+left;
              left=right;
              right=temp;
          }else{
              let temp=arr[i]-arr[i-1]+right;
              left=right;
              right=temp;
          }
      }
      for(let i=3;i<n;i+=2){
          right+=arr[i];
      }
      if(right>left){
          console.log("case",`${ase}:`,right);
      }else console.log("case",`${ase}:`,left);
  }