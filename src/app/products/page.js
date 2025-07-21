'use client';
import { useState, useEffect } from "react";

export default function Products(){
    const [products,setProducts] = useState([]);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    //For setting a id of the product to be edited
    const [editingProductId, seteditingProductId] = useState(null);

    const fetchProducts=async()=>{
        const response = await fetch("http://localhost:8000/api/products");
        const data = await response.json();
        setProducts(data);
    }
    const addProducts=async()=>{
        const response = await fetch("http://localhost:8000/api/products",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'applicatipn/json',
            },
            body:JSON.stringify({title,description,price}),
        });
        const data = await response.json();
        setProducts([...products,data])
    }

    const editProducts = async(id)=>{
        seteditingProductId(id);
        const product = products.find((product)=>product.id == id);
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
    }

    const updateProducts = async(id) =>{
        const response = await fetch(`http://localhost:8000/api/products/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'applicatipn/json',
            },
            body:JSON.stringify({title,description,price}),
        });   
        const data = await response.json();
        setProducts(products.map((product)=>product.id==id? data:product));
        //Making the text fields empty after updating and the editingproudctid to null
        seteditingProductId(null);
        setTitle('');
        setDescription('');
        setPrice('');
    }

    const deleteProducts=async(id)=>{
        const response = await fetch(`http://localhost:8000/api/products/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Accept':'applicatipn/json',
            },
        });
        const data = await response.json();
        setProducts(products.filter((product)=>product.id!=id));
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
    return(
        <div>
            <h1>This is products page</h1>
            <div>
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="border-2 rounded-md p-2" type = "text" placeholder ="Enter name of product"/>
                <input value={description} onChange={(e)=>{setDescription(e.target.value)}} className="border-2 rounded-md p-2" type = "text" placeholder ="Enter the description"/>
                <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className="border-2 rounded-md p-2" type = "number" placeholder = "Enter the price " />
                {editingProductId ?
                    (<button className="bg-blue-500 text-white rounded-md p-2" onClick={()=>updateProducts(editingProductId)}>
                    Update Product
                </button>):(<button className="bg-green-500 text-white rounded-md p-2" onClick={addProducts}>
                    Add Product
                </button>)
                }
            </div>
            <ul>
                {products.map((product)=>(
                    <li key = {product.id}>
                        <span>
                            {product.title} - {product.price}
                            <button onClick={()=>editProducts(product.id)} className='bg-yellow-400 text-white rounded-md p-2'>Edit</button>
                            <button onClick={()=>deleteProducts(product.id)} className='bg-red-500 text-white rounded-md p-2'>Delete</button>
                            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}