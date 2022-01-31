function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line=1;
    let matrix=[];
    for(let i=0;i<+input[0];i++){
        let arr=input[line++].trim().split(" ").map(Number);
        matrix.push(arr);
    }
    output(matrix,+input[0]);
   
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
  function output(mat,n){
   let left=0;
   let right=n-1;
   let top=0;
   let bottom=n-1;
   let temp=mat[top][left];  
   
   for(let i=0;i<=Math.floor((n-1)/2);i++){
    let tp=mat[top][left];
    for(let j=left+1;j<=right;j++){
        temp=mat[top][j];
         mat[top][j]=tp;
         tp=temp;
        }
        top++;
        for(let j=top;j<=bottom;j++){
            temp=mat[j][right];
            mat[j][right]=tp;
            tp=temp;
           }
           right--;
           for(let j=right;j>=left;j--){
            temp=mat[bottom][j];
            mat[bottom][j]=tp;
            tp=temp;
           }
           bottom--;
           for(let j=bottom-1;j>=top;j--){
            temp=mat[bottom][left];
            mat[bottom][j]=tp;
            tp=temp;
           }
           left++;
           mat[top-1][left-1]=tp;
          
   }
   mat[1][1]=2;
   for(let i=0;i<n;i++){
    console.log(mat[i].join(" "));
}
   
  }


  /***
1 1 2 3
1 2 2 4
1 3 3 4
2 3 4 4
   */