function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   arr=input[1].trim().split(" ").map(Number);
   output(+input[0],arr);
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
      let low=arr[0];
      let sum=0;
      let count=1
      for(let i=0;i<n;i++){
          console.log(sum,i)
          if(low>arr[i]){
              sum+=count*low;
              low=arr[i];
              count=1;
          }else{
              count++;
          }
      }
      sum+=count*low;
      console.log(sum)
  }