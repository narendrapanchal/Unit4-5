function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let arr=input[line++].trim();
       output(arr);
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
  function output(str){
      let vovel="";
      let conso="";
      for(let i=0;i<str.length;i++){
          if(str[i]=="a"||str[i]=="e"||tr[i]=="i"||str[i]=="o"|str[i]=="u"){
              vovel+=str[i];
          }else{
              conso+=str[i];
          }

      }
      console.log(vovel+conso);
  }