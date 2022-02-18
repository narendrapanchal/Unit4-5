function runProgram(input) {
    // Write code here
   let line=1;
   input=input.trim().split("\n");
   for(let i=0;i<+input[0];i++){
       let [k,l]=input[line++].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ").map(Number);
       output(arr,k,l);
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
  function ouput(arr,n,k){
      var sum=0;
      
      for(var i=0;i<k;i++){
          sum+=arr[i];
      }
      var left=0;
      var minsum=sum;
      while(i<n){
          sum+=arr[i]-arr[left];
          left++;
          i++;
          if(sum<minsum)
          minsum=sum;
      }
      console.log(minsum)
  }