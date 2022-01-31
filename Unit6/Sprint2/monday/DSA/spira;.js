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
  function output(N,arr){
      let matrix=[];
      for(let i=0;i<N;i++){
        let temp=[];  
        for(let j=0;j<N;j++){
            temp.push(0);
          }
          matrix.push(temp);
      }
      let k=0;
      for(var i=0;i<N/2;i++){
     
        for( var j=i;j<N-i-1;j++){
            matrix[i][j]=arr[k];
            k++
          }
    
          for( var j=i;j<N-i-1;j++){
            matrix[i][j]=arr[k];
            k++
        }
    
        for( var j=i;j<N-i-1;j++){
            matrix[i][j]=arr[k];
            k++
        }
    
        for( var j=i;j<N-i-1;j++){
            matrix[i][j]=arr[k];
            k++
        }
        console.log(k);
      }
      for(var i=0;i<N;i++){
          console.log(matrix[i].join(" "));
          }
    
    
    }