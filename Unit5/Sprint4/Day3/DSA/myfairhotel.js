function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let [n,x]=input[line++];
       let arr=[];
       for(let j=0;j<n;j++){
           arr.push(input[line++].trim().split(" ").map(Number));
       }
       output(arr,x,n);
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
  function output(arr,x,n){
    let check=true;
    arr.sort((a,b)=>{
        return a[0]-b[0];
    })
      arr.sort((a,b)=>{
          return a[1]-b[1];
      })
    for(let i=0;i<n;i++){
        let sum=arr[i][2];
        for(let j=i+1;j<n;j++){
            if(arr[i][1]<=arr[j][1]){
                sum+=arr[j][2];
            }else
            break;
        }
        if(sum>x){
            check=false;
            console.log("No");
        }
    }
    if(check)
    console.log("Yes");
  }