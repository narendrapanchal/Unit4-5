function runProgram(input) {
    // Write code here
   let [i,j,k,l]=input.trim().split(" ").map(Number);
   let check=false;
   if(i+j==k+l)
   check=true;
   if(i+k==j+l)
   check=true;
   if(i+l==k+j)
   check=true;
   if(i+j==k+l)
   check=true;
   if(check)
   console.log("Yes")
   else
   console.log("No")
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