function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   for(let i=0;i<+input[0];i++){
       output(input[i+1].trim().split(" ").map(Number))
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
  function output([n,m]){
      let check=false;
     find(n);
     if(check)
     console.log("possible")
     else console.log("Not Possible");
     function find(a){
         if(a==m){
             check =true;
             return;
         }
         if(a>m)
         return;
         let temp=""+a+""+1;
         find(a+1);
         find(temp);
     }
  }