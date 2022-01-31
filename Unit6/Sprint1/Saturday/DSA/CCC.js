function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line=1;
    for(leti=0;i<+input[0];i++){
        let n=+input[line++];
        let arr=input[line].trim().split(" ").map(Number);
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
      let lowest=arr[0];
      let highest=arr[0];
      let high=0;
      let low=0;
      for(let i=1;i<n;i++){
          if(arr[i]<lowest){
              lowest=arr[i];
              low++;
          }
          if(arr[i]>highest){
            highest=arr[i];
            high++;
        }
      }
      console.log(low,high)
  }