function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line=1;
    let obj={};
    for(let i=0;i<+input[0];i++){
       if(obj[input[i+1]]==null){
           obj[input[i+1]]=1;
       } else{
        obj[input[i+1]]++;
       }
    }
    
    let arr=Object.keys(obj).sort((a,b)=>{
        return a-b;
    })
    for(let i=0;i<arr.length;i++){
        console.log(arr[i],obj[arr[i]]);
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
