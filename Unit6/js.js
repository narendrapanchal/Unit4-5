// Promises Clouser Higher order function
//  var p= new Promise((res,rej)=>{
//      if(8+9==1){
//          res("resolve")
//      }else{
//          rej("rejected")
//      }
//  })
//  p.then((res)=>
// { console.log(res);}
//  )
//  .catch(data=>{
//      console.log(data);
//  });
// map reduce filter 
  // let arr=[1,2,4,5,54,5,45,34];
  // arr =arr.map(e=>e*10);
  // console.log(arr);
  // arr=arr.filter(e=>e>50?e:"")
  // console.log(arr);
  
  // class Person{
  //   constructor(id){
  //     this.id=id;
  //     this.getId=this.getId.bind(this);
  //   }
  //   getId(){
  //     console.log(this.id);
  //   }
  // }
  // var person= new Person("123");
  // person.getId();
  // var onlClick=person.getId;// small later person 
  // onlClick();
  // console.log(person)


//Clousers
//  function outer(){
//    var a="outer";
//    return function inner(){
//     var a="inner"
//     console.log(a);
//    }
//  }
//  var b=outer();
//  b();
// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//     // this.getData=this.getData.bind(this);
//   }
//   getData(){
//     console.log(this);
//   } 
// }
// let person=new Person("narendra",29);
// console.log(this);
// person.getData()
// function superdigit(n){
//   n=n.toString();
// while (n.length!=1){
//   let sum=0;
//   for(let i=0;i<n.length;i++){
//     sum+=+n[i];
//   }
//   console.log(sum)
//   n=sum.toString();
// }
// console.log(n);
// }
// superdigit(186);
function decipher(n,str){
  n=str.length;
  let mystr="";
  let arr=[];
  let num="";
  let obj={}
  let atoz="qwertyuiopasdfghjklzxcvbnm";
  for(let i=0;i<26;i++){
    obj[atoz[i]]=1;
  }
  for(let i=0;i<n.length;i++){
    if(obj[str[i]]==null){
      num+=str[i];
    }else{
      arr.push(Number(num));
      num="";
      mystr+=str[i];
    }
  }

  arr.push(Number(num));
  let out=""
  console.log(mystr,arr);
  for(let i=0;i<mystr.length;i++){
    for(let j=0;j<arr[i];j++){
    out+=mystr[i];
    }
  }
  console.log(out);
}
decipher(6, "a2b1c2");


