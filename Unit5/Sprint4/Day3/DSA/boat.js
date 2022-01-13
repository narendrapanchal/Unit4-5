function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let [n,k]=input[line++].trim().split(" ").map(Number);
       let str=input[line++].trim().split(" ").map(Number);
       output(str,n,k);
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
  function output(arr,n,k){
      arr.sort((a,b)=>(a-b));
      console.log(arr);   
      let left=0;
      let right=n-1;
      let count=0;
      while(left<=right){
          if(left==right)
          count++;
         else if(arr[left]+arr[right]>k){
              right--;
              count++;
          }else{
              left++;
              right--;
              count++
          }
      }  
      console.log(count);
  }