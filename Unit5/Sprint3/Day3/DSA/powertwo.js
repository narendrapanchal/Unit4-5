function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
  let [n,x]=input[0].trim().split(" ").map(Number);
  let arr=input[1].trim().split(" ").map(Number);
       output(n,x,arr);
   
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
  function output(n,x,arr){
     let skip=0;
     let count=0;
     for(let i=0;i<n;i++){
         if(arr[i]>x)
         skip++;
         if(skip==2)
         break;
         if(arr[i]<=x)
         count++;
     }
     console.log(count);
  }