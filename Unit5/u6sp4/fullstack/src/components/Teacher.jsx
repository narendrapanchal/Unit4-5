import { useNavigate,useParams,useSearchParams} from "react-router-dom";
import queryString from "query-string"
import {useState,useEffect} from "react"
export const Teacher=()=>{
    var queryParams = queryString.parse(window.location.search);
  
    let Navigate=useNavigate();
    if(localStorage.getItem("token")==null)
    Navigate("/teacher");
    let [data,setData]=useState([]);
   async function getData(){
    queryParams = queryString.parse(window.location.search);
    console.log(window.location.search)
        await fetch("http://localhost:12345/teachers").then((res)=>res.json()).then((res)=>{
            if(queryParams.gender!=null){
                if(queryParams.gender=="m")
                res=res.filter((ele)=>ele.gender=="M");
                else if(queryParams.gender=="f")
                res=res.filter((ele)=>ele.gender=="F");
            }
        if(queryParams.sortage!=null){
            console.log(res);
            res=res.sort((a,b)=>a.age-b.age);
            setData(res);
        }else{
            setData(res);
        }
    }).catch((err)=>{
        console.log(err);
    })
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
        <div>
            <div>
            <div>
            <h3>Sort by age</h3>
            <button onClick={()=>{
                Navigate("/teacher?sortage=true");
                getData();
            }}>Sort by age</button>
            </div>
            <div>
            <select id="select" onChange={()=>{
                console.log("hi")
                  if(queryParams.sortage!=null){
                    Navigate(`/teacher?sortage=true&gender=${document.getElementById("select").value}`);
                    console.log(`/teacher?sortage=true&gender=${document.getElementById("select").value}`)
                    getData();
                }else{
                    Navigate(`/teacher?gender=${document.getElementById("select").value}`);
                    console.log(`/teacher?sortage=true&gender=${document.getElementById("select").value}`)
                        getData();                 
                }
            }}> <option value="All">Gender All</option>
                <option name="m" value="m">Gender Male</option>
                <option name="f" value="f">Gender Female</option>
            </select>

            </div>
            </div>

             
             {data.map((element)=>
                    { 
                    return <div key={element._id} onClick={()=>{
                        Navigate(`/singleteacher?_id=${element._id}`);
                    }}>{element.name} {element.age} </div>
                })}
            
        </div>
    )
    
}