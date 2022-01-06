function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let [n,k]=input[line++].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ");
       output(n,k,arr);
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
      let num="0";
      let length=0;
      for(let i=0;i<n;i++){
          let temp=0;
          for(let j=0;j<arr[i].length;j++){
              if(k==+arr[i][j])
              temp++;
          }
          if(temp>=length){
              if(temp>length){
                num=arr[i];
                length=temp;
              }else
             if(arr[i].length>num.length){
                 num=arr[i].toString();
                 length=temp;
             }
          }
      }
      console.log(num);
  }