import { useEffect, useState } from "react"
export const Timer=()=>{
    const [time,setTime]= useState({});
    var start = time.start;
   var end = time.end
    const [counter,setCounter]= useState({start}); 
    useEffect(()=>{
        const id=setInterval(()=>{
            setCounter((prev)=>
                prev===end?clearInterval(id):prev+1
            );
        },1000)
        return ()=>{
            console.log("Hi Unmouted");
            clearInterval(id);
        }
    },[counter]);
    const handleChange=(e)=>{
       let {name,value}=e.target
       setTime({...time,[name] : value})
    }
    function startTimer(e){
        e.preventDefault();
        setCounter(start)
    }
    return <div>
        <h1>count is {start}</h1>
        <input name="start" type="number" placeholder="Start Time"onChange={handleChange} />
        <input type="number" name="end" placeholder="End Time" onChange={handleChange}/>
        <br />
        <button onClick={startTimer}>apply</button>
        
    </div>
}
