function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
   for(let i=0;i<+input[0];i++){
       let one=input[line++].trim();
       let two=input[line++].trim();
      output(one,two);
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
  function output(one ,two){
     
      if(one.length!=two.length){
          console.log("False");
      }else{
        let obj={};
        let obj2={};
        for(let i=0;i<one.length;i++){
            if(obj[one[i]]==null){
                obj[one[i]]=1;
            }
            else{
                obj[one[i]]++;
            }
        }
        for(let i=0;i<one.length;i++){
            if(obj2[two[i]]==null){
                obj2[two[i]]=1;
            }
            else{
                obj2[two[i]]++;
            }
        }
        let check=true;
        for(k in obj){
            if(obj2[k]!=obj[k]){
                check=false;
                break;
            }
        }
        if(check){
            console.log("True")
        }
        else{
            console.log("False")
        }
      }
  }