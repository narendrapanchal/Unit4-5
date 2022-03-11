import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import  axios from 'axios'
function App() {
const  changePage= async (e)=>{
  let allpages=document.querySelectorAll("#pagenumbers > button");
  for(let i=0;i<allpages.length;i++){
    allpages[i].style.backgroundColor="white"
  }
  e.target.style.backgroundColor="blue";
  currentPage=+e.target.textContent
   
     console.log(currentPage)
     let tempData=data.filter((ele,i)=>{
       if(i<currentPage*10 && i>=currentPage*10-10) return ele
     });
     setShowableData(tempData);
}
const [data,setData]=useState([]);
let currentPage =1;
const [showableData,setShowableData]=useState([]);
const [checked,setChecked]=useState(false);
const [totalPage,setTotalPage]=useState(5);
useEffect(()=>{
  getData();
},[]);
async function getData(){

  let tempData=await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
   tempData=tempData.data
  setTotalPage(Math.ceil(tempData.length/10));
  setData(tempData);
   tempData=tempData.filter((ele,i)=>{
    if(i<currentPage*10) return ele;
  })
  setShowableData(tempData);
}
  return (
    <div className="App">
      <input id="searchbar" onChange={(e)=>{
        let str=e.target.value;
        console.log(str);
        let role=data.filter((ele)=>{
          let check=true;
          for(let i=0;i<str.length;i++){
            if(ele.role[i]!=str[i]){
              check=false;
              break;
            }
          }
          if(check) return ele;
        });
        console.log(role);
        let name=data.filter((ele)=>{
          let check=true;
          for(let i=0;i<str.length;i++){
            if(ele.name[i]!=str[i]){
              check=false;
              break;
            }
          }
          if(check) return ele;
        });
        console.log(name);
        let email=data.filter((ele)=>{
          let check=true;
          for(let i=0;i<str.length;i++){
            if(ele.email[i]!=str[i]){
              check=false;
              break;
            }
          }
          if(check) return ele;
        });
        console.log(email);
        if(name.length){
          setData(name);
          setTotalPage(Math.ceil(name.length/10));
          currentPage=1;
          document.querySelectorAll(`#pagenumbers > button`)[0].style.backgroundColor="blue";
        let   tempData=name.filter((ele,i)=>{
            if(i<currentPage*10) return ele;
          })
          setShowableData(tempData);
        }else{
          for(let i=0;i<email.length;i++){
            let check=true;
            for(let j=0;j<role.length;j++){
              if(email.name==role.name) {
                check=false;
                break;
              }
            }
            if(check){
              role.push(email[i]);
            }
          }
          setData(role);
          setTotalPage(Math.ceil(role.length/10));
          currentPage=1;
          document.querySelectorAll(`#pagenumbers > button`)[0].style.backgroundColor="blue";
        let   tempData=role.filter((ele,i)=>{
            if(i<currentPage*10) return ele;
          })
          setShowableData(tempData);
        }
       
        
      }} placeholder="search by name ,email or role"/>
    <table>
    <thead>
            <tr>
            <td ><input type="checkbox" onChange={()=>{
              if(checked==false){
                let checkboxes=document.querySelectorAll("tbody> tr > td> input");
                for(let i=0;i<checkboxes.length;i++){
                  checkboxes[i].checked=true;
                }
                setChecked(true);
              }else{
                let checkboxes=document.querySelectorAll("tbody> tr > td> input");
                for(let i=0;i<checkboxes.length;i++){
                  checkboxes[i].checked=false;
                }
                setChecked(false)
              }
            }}/></td>
            <td > Name</td>
            <td > Email</td>
            <td > Role</td>
            <td > Actoins</td>
            </tr>
    </thead>
    <tbody>
        {showableData.map((ele)=>{
          return (
            <tr>
            <td><input type="checkbox"/></td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.role}</td>
            <td ><ion-icon name="create-outline"></ion-icon><ion-icon name="trash-outline" onClick={()=>{
              let temp =showableData.filter((e)=>{
                if (ele.email!=e.email) return ele
              })
              setShowableData(temp)
            }}></ion-icon></td>
            
        </tr>
          )
        })}
    </tbody>
</table>
<div>
  <button id="deletebutton" onClick={()=>{
    if(checked){
      setShowableData([]);
      let checkboxes=document.querySelectorAll("input");
      checkboxes[0].checked=false;
      setChecked(false)
    }else{
      let checkboxes=document.querySelectorAll("tbody> tr > td> input");
      let tempData=[];          
      for (let i=0;i<checkboxes.length;i++){
      if(checkboxes[i].checked!==true){
        tempData.push(showableData[i]);
      }
      checkboxes[i].checked=false;
      }
                setShowableData(tempData);       
    }
  }}>
    Delete Selected
  </button>
</div>
<div id="pagenumbers">
{totalPage>0?<button onClick={(e)=>{
  changePage(e);
}}>1</button>:""}
{totalPage>1?<button onClick={(e)=>{
  changePage(e);
}}>2</button>:""}
{totalPage>2?<button onClick={(e)=>{
  changePage(e);
}}>3</button>:""}
{totalPage>3?<button onClick={(e)=>{
  changePage(e);
}}>4</button>:""}
  {totalPage>4?<button onClick={(e)=>{
  changePage(e);
}}>5</button>:""}</div>
Available Pages
</div>
  );
}

export default App;
