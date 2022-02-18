function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    input[1]=input[1].trim().split(" ").map(Number);
    input[2]=input[2].trim().split(" ").map(Number);

   output(+input[0],input[1],input[2]);
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
  function output(n,gas,cost){
    var starting;
    var check=false;
    let obj={};
    for(let i=0;i<n;i++){
         starting=i;
        find(i+1,gas[i]-cost[i]);
        if(check)
        break;
    }
    function find(index,sum){
        if(obj[index]<=sum){
            return;
        }
        if(sum<0){
            return;
        }else{
            if(index==n){
                index=0;
            }
            obj[index]=sum;
            if(index==starting){
                check=true;
                return;
            }
            
            find(index+1,sum+gas[index]-cost[index])

        }

    }
    if(check){
        console.log(starting)
    }else{
     console.log(-1)
    }
  }