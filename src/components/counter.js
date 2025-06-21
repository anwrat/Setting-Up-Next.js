'use client';
import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div className="mx-auto text-center">
            <h1>Counter Component</h1>
            <p>Count: {count}</p>
            <button onClick={()=>{setCount(count+1)}} className="bg-green-500 text-white p-2 rounded-md cursor-pointer">Increase</button>
            <button onClick={()=>{if(count>0){setCount(count-1)}}} className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">Decrease</button>
            <button onClick={()=>{setCount(0)}} className="bg-red-500 text-white p-2 rounded-md cursor-pointer">Reset</button>
        </div>
    );
}