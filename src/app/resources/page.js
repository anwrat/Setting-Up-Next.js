'use client';
import { useState,useEffect } from "react";

export default function Resources(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response=>response.json())
            .then(data=>setItems(data))
    });
    return(
        <div className="h-screen">
            <h1>Resources</h1>
            {JSON.stringify(items)}
        </div>
    );
}