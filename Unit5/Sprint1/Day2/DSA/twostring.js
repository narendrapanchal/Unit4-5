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
  function output(X,Y){
    let m =(X.length)
    let n = (Y.length)
    let L=[];
  
    for (let i=0; i<=m;i++){
      let temp=[];  
      for (let j=0;j<=n;j++){
        temp.push(0);
      } 
      L.push(temp);
     }
    

    for (let i=1; i<=m;i++){
        for (let j=1;j<=n;j++){ 
            if (X[i-1] == Y[j-1])
                L[i][j] = L[i-1][j-1]+1;
            else
                L[i][j] = Math.max(L[i-1][j], L[i][j-1])
        }
      }
 let sum= L[m][n];
 console.log(X.length-sum+Y.length-sum)

}

  