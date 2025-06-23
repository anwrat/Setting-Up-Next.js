'use client';
import { useState } from "react";

export default function Contact(){
  const [name,setName] = useState("");
  return(
    <div className="justify-center items-center m-auto w-1/4 h-screen">
      <h1 className="font-bold text-3xl mb-7">Contact Me</h1>
      <label className="font-bold">Name: </label>
      <input type="text" className="border rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
    </div>
  )
}