function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var testcases=+input[0];
   var line=0;
       var N=+input[line++];
       var arr=input[line++].trim().split(" ").map(Number);
       output(N,arr);
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
      let x=[];
      let y=[];
      let stack=[];
      for(let i=0;i<n;i++){
          while(stack.length){
              if(arr[stack[stack.length-1]]>arr[i]){
                x.push(stack[stack.length-1]+1);
                stack.push(i);
                break;   
            }else{
                stack.pop();
          }
        }
            if(stack.length==0){
                stack.push(i);
                x.push(-1);
            }
         
          
    }
        
        stack=[];

      for(let i=n-1;i>=0;i--){
          while(stack.length){
              if(arr[stack[stack.length-1]]>arr[i]){
                  y.push(stack[stack.length-1]+1);
                  stack.push(i);
                break;   
            }else{
                stack.pop();
            }
        }
            if(stack.length==0){
                stack.push(i);
                y.push(-1);
            }
      }
      let out="";
      for(let i=0;i<n;i++){
          out+=(x[i]+y[n-1-i])+" ";
      }

      console.log(out);
  }