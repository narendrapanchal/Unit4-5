import("./index.css");
import webpack_logo from '../webpack_logo.png';
let myname="Narendra"
console.log(myname);
// let h1=document.createElement("h1");
// let img=document.createElement("img");
// img.src=webpack_logo;
// h1.textContent=myname;
// h1.classList.add("redcolor"); 
// document.getElementById("root").appendChild(img);
// document.getElementById("root").appendChild(h1);
import React from "react";
import ReactDom from "react-dom";
ReactDom.render(
    // React.createElement("h1",{className:"redcolor"},
    // [React.createElement("i",{className:"bluecolor"},"Helo")," webpack ",
    // React.createElement("i",null,"React")]),
    <h1 className='redcolor'>
        Hello <b>Bold</b> and
        <i className='test'>
            React <b>Bold</b>
        </i>
    </h1>,
    document.getElementById("root")  
)


/**
 * npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
{
  "presets": ["@babel/env", "@babel/preset-react"]
}

 */
