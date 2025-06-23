'use client';
import { useState,useEffect } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    {/*The title of page changes only when the count variable is changed*/}
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
        //Cleanup function
        return()=>{
            document.title = 'My Next App'
        }
    },[count]);
    return(
        <div className="mx-auto border-2 p-5 rounded-2xl">
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