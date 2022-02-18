function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
       let n=+input[0];
       let arr=input[line++].trim().split(" ").map(Number);
       let arr2=input[line++].trim().split(" ").map(Number);
       output(n,arr,arr2);
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
   function output(n,gas,cost){
    let statrting=0;
    let sum=0;
    let minimum=0;
    for(let i=0;i<n;i++){
        sum+=gas[i];
        sum-=cost[i];
        if(sum<0){
            if(minimum<sum){
                minimum=sum;
            }
            sum=0;
            statrting=i; 
        }
    }
    if(sum+minimum>=0){
        console.log(statrting);
    }
    else
    console.log(-1);
    

  }