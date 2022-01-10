function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    output(input[0]);

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
        process.exit(0);
    });
}
function output(data) {
    let obj = {};
    obj["2"] = "abc";
    obj["3"] = "def";
    obj["4"] = "ghi";
    obj["5"] = "jkl";
    obj["6"] = "mno";
    obj["7"] = "pqrs";
    obj["8"] = "tuv";
    obj["9"] = "wxyz";
    find(0, "");
    function find(n, str) {
        if (str.length == data.length) {
            console.log(str);
        }
        for (let i = n; i < data.length; i++) {
            for (let j = 0; j < obj[data[n]].length; j++) {
                let temp = str + obj[data[n]][j];
                find(i + 1, temp);

            }
        }
    }

}