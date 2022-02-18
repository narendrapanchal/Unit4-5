function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let [n,k]=input[line++].trim().split(" ").map(Number)
       let arr=input[line++].trim().split(" ").map(Number)
         output(n,k,arr);
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
  function output(n,k,arr){
   
      if(arr[0]==0 && arr[1]==0){
          arr[0]=1;
          k--;
      }
      for(let i=1;i<n-1;i++){
          if(arr[i]==0&& arr[i-1]==0 && arr[i+1]==0){
              arr[i]=1;
              k--;
          }
          if(n==0)
          break;
      }
      if(arr[n-1]==0 && arr[n-2]==0){
          arr[0]=1;
          k--;
      }
      
      if(k<=0){
          console.log("Yes");
      }
      else{
          console.log("No");
      }
  }