
function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   input[0]=input[0].trim().split(" ").map(Number);
   input[1]=input[1].trim().split(" ").map(Number);
  findindex2(input[0],input[1]);
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
  function findMin([n,k],arr) 
  { 
    let l=0;
    let r=n-1;
    while (l<=r){
        let mid=Math.floor((l+r)/2);
        if(arr[mid]<=k){
            left=mid+1;
        }
        else {
            right=mid-1;
        }
    }
    console.log(left);
  } 