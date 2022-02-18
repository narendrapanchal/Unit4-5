function runProgram(input) {
    // Write code here
   let line=1;
   input=input.trim().split("\n");
   let arr=[];
   let [x,y]=input[line-1].trim().split(" ").map(Number);
   for(let i=1;i<=x;i++){
     arr.push(input[i].trim().split(" "));
   }
   output(arr,x,y);
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
  function output(mat,x,y){
      var check=false;
      let masaischool="masaischool";
      var arr=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

    find(0,0,"",-1);
    find(0,0,mat[0,0],1);
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
            if(check==true){
                break;
            }
            find(i,j,mat[i,j],0);
            find(i,j,"",-1)
        }
        if(check)
        break;
    }
      function find(row, col,str,index){
          if(masaischool==str){
              check=true;
              return;
          }else if(index>masaischool.length){
              return;
          }
          if(check)
          return;
          if(row>=x || row<0 ||col<0 || col>=y){
              return;
          }
         
          for(let i=0;i<8;i++){
              let temprow=row+arr[i][0];
              let tempcol=col+arr[i][1];
              if(!(temprow>=x || temprow<0 ||tempcol<0 || tempcol>=y)){
              let temp= str+mat[temprow][tempcol];
              if(temp[index+1]==masaischool[index+1]){
                  find(row+arr[i][0],col+arr[i][1],temp,index+1);
                }
                
              
            }
          }
      }
      if(check){
          console.log("YES")
      }else{
          console.log("NO");
      }

  }