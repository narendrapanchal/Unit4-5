function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line=1;
    let index=input[0].trim().split(" ").map(Number);
    let arr=input[line++].trim().split(" ").map(Number);
    for(let i=0;i<+index[1];i++){
        let [l,r,value]=input[line++].trim().split(" ").map(Number);
        output(arr,l,r,value);
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
  function output(arr,l,r,value){
    let temp=0; 
    for(let i=l-1;i<r;i++){
        if(arr[i]==value)
        temp++
      }
      console.log(temp);
    
  }