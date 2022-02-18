function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
       let [n,k]=input[0].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ").map(Number);
       output(n,k,arr);
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
   function output(n,k,arr){
       let one=0;
       let two=0;
       for(var i=0;i<n;i++){
           one+=arr[i];
       }
       for(var i=n;i<n*2;i++){
        two+=arr[i];
    }
    if(Math.abs(one-two)<k){
        console.log("Valid");
    }else{
        console.log("InValid");

    }

  }