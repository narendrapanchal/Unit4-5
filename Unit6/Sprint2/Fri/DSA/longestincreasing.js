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
    //   let out=[];
    //   for(let i=0;i<n;i++){
    //       out.push(1);
    //   }
    //   for(let i=1;i<n;i++){
    //       for(let j=i+1;j<n;j++){
    //         if(arr[j]>arr[i]){
    //            if(out[j]<=out[i]){
    //                out[j]=out[i]+1;
    //            }
    //         }  
    //       }
           
    //   }
    //   console.log(Math.max(...out));
    let count=1;
    for(let i=0;i<n;i++){
        for(let j=1;j<n;j++){
            let temp=1;
            if(arr[j-1]<arr[j]){
                temp++;
            }
            else
            break;
        }
        if(temp>count)
        count=temp;
    }
    console.log(count);
  }