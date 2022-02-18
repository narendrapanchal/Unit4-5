function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let arr=[];
       for(let j=0;j<n;j++){
           arr.push(input[line++].trim());
       }
       output(arr,n);
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
  function output(arr,n){
      let count=0;
      let hor=0;
      let ver=0;
      let check=false;
      for(let i=0;i<=n*n;i++){
          if(arr[hor][ver]=="R"){
              ver++;
              count++;
          }else
          if(arr[hor][ver]=="L"){
              ver--;
              count++
          }else
          if(arr[hor][ver]=="U"){
              hor--;
              count++
          }else
          if(arr[hor][ver]=="D"){
              hor++;
              count++;
          }
          if(hor>=n || ver>=n || ver<0 ||hor<0){
              check=true;
              break;
          }

      }
          console.log(check?count:0);
      
  }