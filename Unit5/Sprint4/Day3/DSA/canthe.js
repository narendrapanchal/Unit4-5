function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let str=input[line++];
       let str1=input[line++];
       output(str1,str,n);
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
  function output(str1,str,n){
      let obj={};
      for(let i=0;i<str.length;i++){
          if(obj[str[i]]!=null){
              obj[str[i]]++;
          }else{
            obj[str[i]]=1;
          }
      }
      let obj2={};
      for(let i=0;i<str1.length;i++){
          if(obj2[str1[i]]!=null){
              obj2[str1[i]]++;
          }else{
            obj2[str1[i]]=1;
          }
      }
      let check=true;
      for(let i=0;i<str.length;i++){
          if(obj[str1[i]]!=obj2[str1[i]]){
              check=false;
              console.log("No");
              break;
          }
      }
      if(check)
      console.log("Yes");
  }