import("./index.css");
import webpack_logo from '../webpack_logo.png';
let myname="Narendra"
console.log(myname);
let h1=document.createElement("h1");
let img=document.createElement("img");
img.src=webpack_logo;
h1.textContent=myname;
h1.classList.add("redcolor"); 
document.getElementById("root").appendChild(img);
document.getElementById("root").appendChild(h1);
