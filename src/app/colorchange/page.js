'use client';
import { useState } from "react";

export default function ColorChange(){
    const [theme,changetheme] = useState("Light");
    return(
        <div className="text-center h-screen">
            <div className={`w-fit mx-auto p-4 text-center border-2 rounded-2xl ${theme === "Dark" ? "bg-black text-white" : "bg-white text-black"}`}>
                <h1 className="font-bold text-2xl">Theme Toggle Card</h1>
                <h1>Current Mode: {theme} Mode</h1>
                <button onClick={()=>{changetheme(theme === "Light" ? "Dark" : "Light")}} className={`cursor-pointer p-2 rounded-md ${theme === "Light" ? "bg-black text-white" : "bg-white text-black"}`}>Switch to {theme === "Light" ? "Dark" : "Light"} Mode</button>
                <h1>Click the button to change themes</h1>
            </div>
        </div>
    );
}