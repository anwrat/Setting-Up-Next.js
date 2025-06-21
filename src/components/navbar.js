//For navigation in NextJS
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
    return(
        <nav className='text-black bg-white border-b-2 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='w-1/4 py-4'>
                        <Image src = '/buddha.png' alt='Buddha' width={50} height={50}/>
                    </div>
                    <div className='flex gap-4'>
                        <Link href="/">Home page</Link>
                        <Link href="/about">About page</Link>
                        <Link href="/props">Props</Link>
                        <Link href="/state">State</Link>
                        <Link href="/contact">Contact page</Link>
                        <Link href="/colorchange">ColorChange</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}