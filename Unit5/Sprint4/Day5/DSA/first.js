function findindex2([n,k],arr,index){
    let data=-1;
    let left=0;
      let right=index;
      while(left<=right){
          let mid=left+Math.floor((right-left)/2);
        
        if (arr[mid] == k){
            data=mid;
            break;
        }
        if(arr[mid] > k)
            right = mid - 1;
        else
            left = mid+1;
      } 
       left=index+1;
       right=n-1;
      while(left<=right){
          let mid=left+Math.floor((right-left)/2);
        
        if (arr[mid] == k){
            data=mid;
            break;
        }
        if(arr[mid] > k)
            right = mid - 1;
        else
            left = mid+1;
      } 

   
    console.log(data)
}
function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   input[0]=input[0].trim().split(" ").map(Number);
   input[1]=input[1].trim().split(" ").map(Number);
   let index=findMin(input[1],0,input[0][0]);
  console.log(input[1][index]);
  findindex2(input[0],input[1],index);
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
  function findMin(arr, low, high) 
  { 
      while(low < high)
      {
          let mid = Math.floor(low + (high - low)/2);
          if (arr[mid] == arr[high])
              high--;
          else if(arr[mid] > arr[high])
              low = mid + 1;
          else
              high = mid;
      }
      return high;
  } 