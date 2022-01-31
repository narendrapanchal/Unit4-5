function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let arr=input[line++].trim().split(" ").amp(Number);
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
      let obj={};
      let num=0;
      let out=arr[0];
      for(let i=0;i<n;i++){
          if(obj[arr[i]]==null){
              obj[arr[i]]=1;
          }
          else{
              obj[arr[i]]++;
              if(obj[arr[i]]>num){
                  num=obj[arr[i]];
                  out=arr[i];
              }
          }
          console.log(out);
      }
  }