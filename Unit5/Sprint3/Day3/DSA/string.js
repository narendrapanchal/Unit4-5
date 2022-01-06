function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let str1=input[line++];
       let str2=input[line++];
       output(str1,str2,n);
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
  function output(str1,str2,n){
    let obj1={};
    let obj2={};
    let check=true;
    for(let i=0;i<n;i++){
        if(obj1[str1[i]]!=null){
            obj1[str1[i]]++
        }else{
            obj1[str1[i]]=1;
        }
        if(obj2[str2[i]]!=null){
            obj1[str2[i]]++
        }else{
            obj2[str2[i]]=1;
        }
    }
    for(k in obj1){
        if(obj1[k]!=obj2[k]){
            check=false;
            console.log("No");
            break;
        }
    }
    if(check)
    console.log("Yes");
  }