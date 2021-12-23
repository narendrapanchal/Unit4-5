function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   let line=1;
   for(let i=0;i<test;i++){
    let arr=input[line++];
    let arr2=input[line++];
       output(arr,arr2);
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
  function output(str1,str2){
    let total=0;
    let index=0;
    for(let i=0;i<str2.length;i++){
      if(str1[index]==str2[i]){
        index++;
        total++
      }
      if(total==str1.length)
      break;
    }
    if(total==str1.length)
    console.log("YES")
    else
    console.log("NO")

  }