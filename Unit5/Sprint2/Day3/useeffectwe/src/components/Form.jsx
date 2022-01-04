import { useEffect, useState } from "react"

export const Form =()=>{
    // const [count,setCount]=useState(1);
    // const [age,setAge]=useState(10);
    // console.log("Before Effect")
    // useEffect(()=>{
    //     console.log("First Effect");
    // })
    // useEffect(()=>{
    //     console.log("Second Effect");
    // },[])
    // useEffect(()=>{
    //     console.log("Third Effect");
    //     return ()=>{};
    // },[count,age])
    // console.log("After Effect");
    // return (<div>  
    //       <h3>Counter {count}</h3>
    //     <button onClick={()=>setCount(count+1)}> Add count</button>
    //     </div>
    //     )

    const [start,setStart]=useState()
    const [end, setEnd] =useState()

    let handleStart=(e)=>{
      setStart(+e.target.value)
    }
    let handleEnd=(e)=>{
        setEnd(+e.target.value)
      }
      console.log(start, end)
    useEffect(()=>{
        const id = setInterval(()=>{
            setStart((p)=>
            {if(end==p){
                clearInterval(id);
                return p
            } else return p+1}
            )
        },1000)  
    },[])

   
  
  return   <div>
         <h1>count is {start}</h1>
        <input name="start" type="number"  placeholder="Start Time"onChange={handleStart} />
         <input type="number" name="end" placeholder="End Time" onChange={handleEnd}/>
         
        
    </div>

}