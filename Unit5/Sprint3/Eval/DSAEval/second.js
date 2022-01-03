function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");

  
  
       let arr=input[0].trim().split(" ").map(Number);
       output(arr[0],arr[1]);
    
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
  function output(n,m){
      if(n<m){
     while(n<m){
         let temp=n;
         let sum=0;
         while(temp!=0){
             sum+=temp%10;
             temp=Math.floor(temp/10);
         }
         n+=sum;
     }
    }else if(m>n){
        while(n>m){
            let temp=m;
            let sum=0;
            while(temp!=0){
                sum+=temp%10;
                temp=Math.floor(temp/10);
            }
            m+=sum;
        }
    }
     if(n==m)
     console.log(m)
     else
     {
        while(n<m){
            let temp=n;
            let sum=0;
            while(temp!=0){
                sum+=temp%10;
                temp=Math.floor(temp/10);
            }
            n+=sum;
        }
        if(n==m)
        console.log(m);
        else console.log(-1);
     }
  }