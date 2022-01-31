function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
    let n=+input[line++];
   let arr=input[line++].trim().split(" ").map(Number);
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
      let str="abd";
      let virat=0;
      let abd=0;
      for(let i=0;i<n;i++){
          if(str=="abd"){
              abd+=arr[i];
          }else{
              virat+=arr[i];
          }
          if(arr[i]%2==1){
            if(str=="vir")
              str="abd";
              else str="vir"  
          }
          if((i+1)%6==0){
              if(str=="vir")
              str="abd";
              else str="vir"
          }
          console.log(str,abd,virat)
      }
      if(abd>virat){
          console.log("AB de Villiers")
      }else if(abd==virat){
          console.log("Tie")
      }
      else{
          console.log("Virat Kohli")
      }
      
  }