function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
       let [n,k]=input[0].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ").map(Number);
       output(k,arr);
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
   function output(k,arr){
      n=arr.length
     let obj={};
     find(0,[]);
     function find(sum,str){
         if(sum==k){
             let tem=[];
             for(let i=0;i<str.length;i++){
                 tem.push(str[i]);
             }
             tem.sort((a,b)=>a-b);
             obj[tem.join(" ")]=1;
         }
         if(sum>=k){
             return;
         }
         for(let i=0;i<n;i++){
            str.push(arr[i]);
            find(sum+arr[i],str);
            str.pop();
         }
     }
     if(obj){
        for(k in obj){
            console.log(obj)
        }
     }
     else{
         confirm.log(-1)
     }
      

  }