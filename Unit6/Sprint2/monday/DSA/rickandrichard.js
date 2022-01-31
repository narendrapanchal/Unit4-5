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
      let rick=0;
      let rich=0;
      let right=n-1;
      let left=0;
      let sumleft=0;
      let sumright=0;
      while(left<=right){
          let check=false;
          while(sumleft<=sumright*2){
              rick++;
              sumleft+=arr[left]
              left++;
              if(left>right){
                  check=true;
                  break;
              }
          }
          if(check)
          break;
          else{
              while(sumleft*2>sumright){
                  rich++;
                  sumright+=arr[right];
                  right--;
                  if(left>right){
                     check=true;
                     break; 
                  }
              }
          }
          if(check)
          break;

      }
      console.log(rick,rich)
     
    }