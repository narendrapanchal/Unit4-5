import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { Item } from "./Item";
import {nanoid} from "nanoid"
export const Todo=()=>{
    const [list,setList]=useState([]);
   const  handleList=(data)=>{ 
       const payload={
           title:data,
           status:false,
           id:nanoid(7)
       }
       setList([...list,payload]);
       console.log(list);
   }
   const handleToggle=(id)=>{
    setList(list.filter((e)=>{
          return e.id!=id
       }))
    }
return <div>
<TodoInput getData={handleList}></TodoInput>
{
    list.map((e)=>
        <Item key={e.id} handleToggle={handleToggle} {...e}/>
    )
}
</div>
}