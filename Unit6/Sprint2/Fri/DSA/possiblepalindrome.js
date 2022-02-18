function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let arr=input[line++].trim();
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
  function output(n,str){
    let obj={};
    for(let i=0;i<n;i++){
    
        if(obj[str[i]]==null){
            obj[str[i]]=1;
        }else{
            obj[str[i]]++;
        }
    }
    let count=0;
    for(k in obj){
        if(obj[k]%2){
            count++;
        }
    }
    if(count>1){
        console.log("Not Possible!");
       
    }else{
        console.log("Possible!")
    }
    
  }