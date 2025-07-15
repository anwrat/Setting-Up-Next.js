'use client';
import { useState,useEffect } from "react";

export default function Resources(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response=>response.json())
            .then(data=>setItems(data))
    },[]);
    return(
        <div className="h-screen mb-10">
            <h1>Resources</h1>
            {items.map(item=>(
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}