'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login(){
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');

    const router = useRouter();

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setEmail(email);
        setPassword(password);
        const response = await fetch(`${API_BASE_URL}/login`,
            {
                method:'POST',
                credentials: 'include',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({email,password}),
            }
        );
        const data = await response.json();
        console.log(data);
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(data));
            localStorage.setItem('isLoggedIn','true');
            router.push('/products');
        }
        else{
            alert('Login failed. Please check your credentials.');
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" className="border-2 rounded-md p-2" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder = "Enter your password" className="border-2 rounded-md p-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" className="bg-green-500 text-white rounded-md p-2 cursor-pointer">Sign In</button>
            </form>
        </div>
    );
}