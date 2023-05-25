'use client'
import '/styles/global.css';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Nav({props}) {
    const pathName = usePathname()
    return (
        <>
            <nav className="header-nav">
            <ul>
                    <li>
                        <Link className={pathName == "/" ? "active" : ""} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={pathName == "/blog" ? "active" : ""} href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={pathName == "/about" ? "active" : ""} href='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
