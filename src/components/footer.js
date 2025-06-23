{/*For making the footer appear at bottom, make the outer div of every page have h-screen*/}
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className="text-white bg-gray-800 flex justify-between mx-auto">
            <div>
                <h1 className="font-bold text-2xl">Wisdom</h1>
                <p>This is my first NextJS footer lol</p>
            </div>
            <div>
                <h1 className="font-bold">Quick Links</h1>
                <div className='flex flex-col'>
                    <Link href="/">Home page</Link>
                    <Link href="/about">About page</Link>
                    <Link href="/contact">Contact page</Link>
                    <Link href="/props">Props</Link>
                    <Link href="/state">State</Link>
                    <Link href="/colorchange">ColorChange</Link>
                </div>
            </div>
            <div>
                <h1 className="font-bold">Contact</h1>
                <p>Tokha-03, Kathamndu, Nepal</p>
                <p>Email: anweshrwt22@gmail.com</p>
                <p>Contact: 9767232526</p>
            </div>
        </footer>
    );
}