function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   output(+input[0]);
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
  function output(num){

      let obj={}
       console.log(find(num));
       function find(n){
           if(n==0 || n==1){
               return 1;
           }
           if(n<0) return 0
           if(obj[n]!=null){
               return obj[n];
           }
           obj[n]=find(n-1)+find(n-2)+find(n-3);
           return obj[n];
       }

  }