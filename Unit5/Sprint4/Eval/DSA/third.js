function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line =1;
 
       let n=+input[0];
       let arr=input[line].trim().split(" ").map(Number);
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
    let c1=0;
    let c2=0;
    let c3=0;
    let c4=0;
    for(let i=0;i<n;i++){
        if(arr[i]%5==0)
        c1++;
       else if(arr[i]%3==0)
        c2++;
       else if(arr[i]%2==0)
        c3++;
       else if((arr[i]%5!=0)&&(arr[i]%2!=0)&&(arr[i]%3!=0))
        c4++;
    }
    console.log(c1,c2,c3,c4);
      
  }