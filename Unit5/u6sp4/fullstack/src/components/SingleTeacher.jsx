import { useState,useEffect } from "react"
import queryString from "query-string"
export const SingleTeacher=()=>{
    const queryParams = queryString.parse(window.location.search);
    let [data,setData]=useState([]);
    let [allClasses,setAllClasses]=useState([]);
    async function getData(){
        await fetch("http://localhost:12345/teachers").then((res)=>res.json()).then((res)=>{
            res=res.filter((el)=>{
                return el._id==queryParams._id
            })
           setData(res);
           if(res.length){
            getClass(res.classes);
           }
    }).catch((err)=>{
        console.log(err);
    })
    }
    async function getClass(arr){
        await fetch("http://localhost:12345/classes").then((res)=>{
            return res.json();
        }).then((res)=>{
            let temp=[];
            for(let i=0;i<arr.length;i++){
                res.forEach((el)=>{
                    if(el._id==arr._id){
                        temp.push(el);
                    }
                })
            }
            setAllClasses(temp);
        }).catch((err)=>{console.log(err)});
    }
    useEffect(()=>{
        getData();
    },[]);
    return <div>
        {
            data.length?<div>
                <h1>Hi {data[0].name}</h1>
                <h1>Gender is {data[0].gender}</h1>
                <h1>age is {data[0].age}</h1>
               

            </div>:"NO Data Found"
        }
        {
            allClasses.map((el)=>{
                return <h1 key={el._id}>{el.grade} {el.subject} {el.section}</h1>
            })
        }
    </div>
}