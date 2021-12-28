function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   let line=1;
   for(let i=0;i<test;i++){
       let arr=input[line++].trim().split(" ").map(Number);

       output(arr);
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
  function output(arr){
      let left=0;
      let right=arr.length;
      let ans=0;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]>mid){
            right=mid-1;
            ans=mid;
        }else{
            left=mid+1;
        }
    }
    console.log(ans);
  }