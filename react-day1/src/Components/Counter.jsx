import { useState } from "react";
const Counter =()=>{
    const [count, setCount] =useState(0);
    const handleIncrement =()=>{
        setCount(count+1);
    }
    const handleDecrement =()=>{
        if (count > 0) setCount(count -1);
    };
    return(
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick ={handleDecrement}>Decrement</button>
            <button onClick ={handleIncrement}>Increment</button>
        </div>
    );
};
export default Counter ;