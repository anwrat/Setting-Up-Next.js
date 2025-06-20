'use client';
import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div className="mx-auto text-center border-2">
            <h1 className="font-bold text-2xl">Counter Component</h1>
            <p className="text-blue-500 text-2xl">Count: {count}</p>
            {/*Buttons*/}
            <div className="flex gap-1">
                <button onClick={()=>{setCount(count+1)}} className="bg-green-500 text-white p-2 rounded-md cursor-pointer hover:bg-green-800">Increase</button>
                <button onClick={()=>{if(count>0){setCount(count-1)}}} className="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-800">Decrease</button>
                <button onClick={()=>{setCount(0)}} className="bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-800">Reset</button>
            </div>
        </div>
    );
}