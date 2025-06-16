//For navigation in NextJS
import Link from 'next/link';

export default function Navbar(){
    return(
        <div>
            <Link href="/">Home Page</Link>
            <Link href="/about">About Page</Link>
        </div>
    );
}