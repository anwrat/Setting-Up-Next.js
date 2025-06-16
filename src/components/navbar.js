//For navigation in NextJS
import Link from 'next/link';
import Vercellogo from 'next/image';

export default function Navbar(){
    return(
        <div className='text-white bg-black mb-4'>
            <div className='container flex items-center mx-auto justify-between'>
                <div className='flex flex-col items-center'>
                    <Vercellogo src = '/vercel.svg' alt = "Vercel logo" width={50} height={50}/>
                    <span>Vercel</span>
                </div>
                <div className='flex gap-4'>
                    <Link href="/" className='font-bold hover:underline'>Home</Link>
                    <Link href="/about" className='font-bold hover:underline'>About</Link>
                    <Link href="/contact" className='font-bold hover:underline'>Contact</Link>
                </div>
            </div>
        </div>
    );
}