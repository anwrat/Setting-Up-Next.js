//For navigation in NextJS
import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className='bg-gray-800 text-white mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='w-1/4'>
                        <h1>LOGO</h1>
                    </div>
                    <div className='flex gap-4'>
                        <Link href="/">Home page</Link>
                        <Link href="/about">About page</Link>
                        <Link href="/props">Props</Link>
                        <Link href="/state">State</Link>
                        <Link href="/contact">Contact page</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}