import "./Body.css"
import jsondata from "../data.json";
import {useState, useEffect} from "react";

import queryString from "query-string"
export const Body=()=>{
    const [data,setData]=useState(jsondata);
    return (
        <div>
            <input type="text" placeholder="Search items" onChange={()=>{

            }} />
            <hr />
            <div id="bodydiv">
         <div id="filters"><b>Filters</b>
         <div>
             
         <span onClick={()=>{
             let temp=data.filter((ele)=>{
                 if(ele.name.split(" ")[0]=="Power") return ele
             })
             setData(temp);
         }} >Power</span>
           <span onClick={()=>{
             let temp=data.filter((ele)=>{
                 if(ele.name.split(" ")[0]=="River") return ele
             })
             setData(temp);
         }} >River</span>  <span onClick={()=>{
            let temp=data.filter((ele)=>{
                if(ele.name.split(" ")[0]=="Lake") return ele
            })
            setData(temp);
        }} >Lake</span>
         <span onClick={()=>{
             let temp=data.filter((ele)=>{
                 if(ele.name.split(" ")[0]=="FullCity") return ele
             })
             setData(temp);
         }}>FullCity</span>
         <span onClick={()=>{
             let temp=data.filter((ele)=>{
                 if(ele.name.split(" ")[0]=="Kenton") return ele
             })
             setData(temp);
         }}>Kenton</span>
         <span onClick={()=>{
             let temp=data.filter((ele)=>{
                 if(ele.name.split(" ")[0]=="Ride") return ele
             })
             setData(temp);
         }}>Ride</span>
         </div>
         </div>
         <div className="data">
            
             {data.map((ele)=>{
             return  <div className="onelement">
                
                 <div className="onediv"  style={{backgroundImage:`url(${ele.image})`}}>
                 <div> 
                     <div><b> <span>{ele.name[0]+ele.name[1]+ele.name[2]}</span></b></div>
                     <div><span><b>Save</b></span><br></br>
                          <span><b>{ele.discount}%</b></span>
                          </div>
                 </div>
                 
               </div>
               <p className="nameofplace" >{ele.name.split(" ")[0]}</p>
             </div>

             })}
             {data.length?"":<div><b>No data Available</b></div>}
         </div>
        </div>
        </div>
    )
}