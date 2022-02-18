for(i=0;i<8;i++){
    var p=21;
    console.log(p);
}
console.log(p,"hi");
var person={
    name:"masai",
    display:()=>{console.log(this.name)},
    displayejs5:function (){
        console.log(this.name);
    }
}
person.display();
person.displayejs5();
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[1,2,3]
        }
    }
}



function obj(name,age){
    var temp={}
    temp.name=name
    temp.age=age;
    return temp
}
var newobj=obj("narendra",21);
console.log(newobj)
function tem(name,age){
    this.name=name
    this.age=age
}
let temp2=new tem("nam",12);
console.log(temp2);
const f=new Promise((res,rej)=>{
    setTimeout(res,500,"one");
})
const f2=new Promise((res,rej)=>{
    setTimeout(res,100,"two");
})
Promise.race([f,f2]).then(res=>console.log(res));
let arr=["a","b","c"];
const func=function([f,...r]){return r.reduce(function(a,c){return a+c}+f)};
func(arr);
function getName(){
    var status=true;
    if(status){
        const name="masai";
    }
    console.log(name);
}
getName();

const p1=Promise.resolve("f");
const p2=Promise.resolve("s");
const p3=Promise.reject("t");
const p4=Promise.resolve("fo");
const runp=async ()=>{
    const r1=await Promise.all([p1,p2])
    const r2=await Promise.all([p3,p4])
    return [r1,r2];
}
runp()
.then(res=>console.log(res))
.catch(err=>console.log(err))
const plpl
plpl="msai";
console.log(plpl)
async function f(){
    let result="first";
    let promise=new Promise((res,rej)=>{
        setTimeout(()=>res("SOne"),1000);
    })
    result =await promise;
    console.log(result);
}
f()
let a=1,b=2;
[a,b]=[b,a];
console.log(a,b);