function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=1;
       let [n,k]=input[0].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ").map(Number);
       output(n,k,arr);
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
   function output(n,k,arr){
      
     let obj=[];
     find(0,[],0);
     function find(sum,str,index){
         if(sum==k){
             let temp=[];
             for(let i=0;i<str.length;i++){
                 temp.push(str[i]);
             }
             obj.push(temp)
         }
         for(let i=index;i<n;i++){
            str.push(arr[i]);
            find(sum+arr[i],str,i+1);
            str.pop();
         }
     }
     for(let i=0;i<obj.length;i++){
         obj[i]=obj[i].sort();
     }
     obj.sort();
     console.log(obj)
     obj.map(e=>e.join(" "));
     console.log(obj[0]);
     for(let i=1;i<obj.length;i++){
         if(obj[i]!=obj[i-1]){
             console.log(obj[i]);
         }
     }

  }