function runProgram(input) {
    input=input.trim().split("\n");
    var n=+input[0];
    var start=input[1].trim().split(" ").map(Number);
    var end=input[2].trim().split(" ").map(Number);
        callfun(n,start,end);
        //console.log(n,start,end);
    }
    function callfun(n,start,end){
        //console.log(n,start,end)
        var count=0;
        for(let i=0;i<start.length;i++){
            for(let j=0;j<end.length;j++){
                if(start[i]==end[j]){
                    end.splice(j);
                    count++
                    break;
                }
                count++;
            }
        }
        console.log(count);
     
        
    }
    
     if (process.env.USERNAME === "") {
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
             process.exit(0);
         });
     }