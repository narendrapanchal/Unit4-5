function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=0;
       let n=+input[line++];
       let arr=input[line++].trim().split(" ").amp(Number);
       output(n,arr);
   
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
      let left=0;
      let right=n-1;
      let num=-1;
      while(left<right){
          let mid=left+Math.floor((right-left)/2);
          if(left==right){
              num=left;
              break;
          }else if(mid==0&& arr[mid+1]<arr[mid]){
              num=mid;
              break;
          }else if(mid<right && arr[mid+1] < arr[mid] && mid>0 && arr[mid]>arr[mid-1]){
              num=mid;
              break;
          }else if(arr[left]>arr[right]){
              right=mid-1;

          }else{
              left=mid+1;
          }
      }   
      
          console.log(arr[num]);
      
  }