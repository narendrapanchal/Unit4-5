function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let line=0;
       let n=+input[line++];
       let k=input[line++].trim().split(" ").map(Number);
       output(n,k);
 
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
    quickSort(0,n-1);
    function quickSort(low,high){
        if(low<high){
            let pi=partition(low,high);
            if(p==high)
            return
            quickSort(low,pi-1);
            quickSort(pi+1,high);
        }
    }
    function partition(low,high){
        let pivot=arr[high];
        let i=low;
        for(let j=low;j<=high;j++){
            if(arr[j]>pivot){
                swap(i,j);
                i++;
            }
        }
        swap(i,high);
        return i;
    }
     function swap(i,j){
         let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
     }
     console.log(arr.join(" "));
  }