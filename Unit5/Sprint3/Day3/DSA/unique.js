function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let n=+input[line++];
       let str2=input[line++].trim().split(" ").map(Number);
       output(str2,n);
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
  function output(str2,n){
    let obj2={};
    let index=-1;
    let num=null;
    let check=true;
    for(let i=0;i<n;i++){
        if(obj2[str2[i]]!=null){
            obj2[str2[i]]++
        }else{
            obj2[str2[i]]=1;
        }
    }
    let arr=[];
    for(k in obj2){
        if(obj2[k]==1){
           arr.push(k);
        }
    }
    console.log(arr);
    if(num!=null){
    for(let i=0;i<n;i++){
        if(str2[i]==num){
         console.log(i+1);
         break;
        }
    }
}else
    console.log(-1);
  }