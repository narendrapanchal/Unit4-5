function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");


       let [k,n]=input[0].trim().split(" ").map(Number);
       let arr=input[1].trim().split(" ").map(Number);
       output(n,k,arr);
   
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
  function output(m,n,S){
    
        var table = Array(n+1).fill(0);
         
        table[0] = 1;
     
        for (i=0; i<m; i++)
    {        for (j=S[i]; j<=n; j++)
      {          table[j] += table[j-S[i]];
    }
}
console.log(table[n]);
  }

  