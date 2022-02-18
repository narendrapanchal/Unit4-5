function output(n){
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    let out="";
    while(number>0)
    {
    let temp = Math.floor(number/num[i]);
    number = number%num[i];

    while(temp--)
    {
      out+=sym[i];
    }
    i--;
    }
    console.log(out);
 
}