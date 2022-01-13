function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let arr=input[line++].trim().split(" ").map(Number);
       output(arr,n);
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
      let one=0;
      let left=0;
      for(let i=0;i<n;i++){
          if(arr[i]==1)
          {
              left=i;
              break;
          }
      }
     let right=left;
      for(let i=left+1;i<n;i++){
        if(arr[i]==1)
        {
            left=right;
            right++;
            if(one<(right-left+1))
            one=right-left+1;
        }
        right++;
    }
    left=0;
    for(let i=left+1;i<n;i++){
        if(arr[i]==0)
        {
            left=i;
            break;
        }
        right++;
    }
    right=left;
    for(let i=0;i<n;i++){
      if(arr[i]==0)
      {
          left=right;
          right++;
          if(one<(right-left+1))
          one=right-left+1;
      }
      right++
  }
console.log(one);
  }