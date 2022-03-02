function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let line=1;
    for(let i=0;i<+input[i];i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
       let arr1=input[line++].trim().split(" ").map(Number);
       output(n,arr1,arr);
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
  function output(n,spent,point){
      let obj={};
      if(spent[n-1]+point[n-1]>100000){
          obj[point[n-1]]=1;
      }
      let count=0;
      for(let i=n-2;i>=0;i--){
          let sum=point[i]+spent[i];
        for(let j=i+1;j<n;j++){
            if(sum<spent[j]){
                break;
            }
            if(obj[point[j]]!=null){
                count++;
                obj[point[i]]=1;
                break;
            }

        }
      }
      console.log(count);
  }
  