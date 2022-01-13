function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   for(let i=0;i<+input[0];i++){
       output(input[i+1].trim().split(" ").map(Number))
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
  function output([n,m]){
      console.log(gcd(n,m))
    function gcd(a, b)
    {
        // Everything divides 0 
        if (a == 0)
        return b;
        if (b == 0)
        return a;
    
        // base case
        if (a == b)
            return a;
    
        // a is greater
        if (a > b)
            return gcd(a-b, b);
        return gcd(a, b-a);
    }
  }