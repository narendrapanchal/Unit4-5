import {useSelector,useDispatch} from "react-redux";
import { addCount } from "../feature/Counter/action";
export const Counter=()=>{
    const count=useSelector((state)=>state.counterState.count);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={()=>{
                dispatch(addCount(1));
            }}>Add one</button>
        </div>
    )
}