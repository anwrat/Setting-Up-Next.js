'use client';
import { useState } from "react";

export default function Contact(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState();
  return(
    <div className="justify-center items-center m-auto w-1/4 h-screen">
      <h1 className="font-bold text-3xl mb-7">Contact</h1>
      {/*For name*/}
      <label className="font-bold">Name</label>
      <input type="text" className="border rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
      {/*The below ampersand means a shorthand if statement to check if name is not empty*/}
      {name && (
        <p className="text-center mt-6">Hello, <span className="font-bold">{name}!</span></p>
        )}
      {/*For email*/}
      <label className="font-bold">Email</label>
      <input type="email" className="border rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
      {email && (
        <p className="text-center mt-6">Your email is <span className="font-bold">{email}</span></p>
        )}
      {/*For Contact*/}
      <label>Contact</label>
      <input type="number" className="border rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Enter your number"/>
      {number && (
        <p className="text-center mt-6">Your number is <span className="font-bold">{number}</span></p>
        )}
    </div>
  )
}