function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ").map(Number);
       output(n[0],n[1],arr);
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
      let left=0;
      let right=k;
      let out="";
      while(right<n){
          let check=true;
          for(let i=left;i<=right;i++){
              if(arr[i]<0){
                  check=false;
                  out+=arr[i]+" ";
                  break;
                }  
          }
          if(check)
          out+="0 "
          right++;
          left++;
      }
      console.log(out);

  }