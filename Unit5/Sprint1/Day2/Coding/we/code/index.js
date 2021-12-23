import {add,mul} from "./calc";
import("./index.css")
console.log(add(8,0));
console.log(mul(8,9));
const h1=document.createElement("h1");
h1.innerText="Hello Webpack";
h1.classList.add("redcolor");
document.getElementById("root").append(h1);