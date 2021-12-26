function Todos({head,arr}){
    return <div>
  <h1> {head}</h1>
  <ul>
    {arr.map((e)=>(<li>{e}</li>))}
  </ul>
    </div>
  }

  export  {Todos}