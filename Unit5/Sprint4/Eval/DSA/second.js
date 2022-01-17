function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line =1;
   for(let i=0;i<+input[0];i++){
       output(input[line++].trim().split(" "));
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
  function output([a,b,c]){
      let min=Math.min(a.length,b.length,c.length);
      let sum="";
      
      for(let i=0;i<min;i++){
          if((a[i]!=b[i]) || (b[i]!=c[i])|| (a[i]!=c[i]))
          break;
          sum+=a[i];
      }
      if(sum)
      console.log(sum);
      else
      console.log("None")
  }