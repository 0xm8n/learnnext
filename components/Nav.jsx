'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connectMetaMask, signOut } from '../redux/actions/walletAction';

export default function Nav() {
    const pathName = usePathname()
    const { wallet } = useSelector(state => state)
    const dispatch = useDispatch()

    function reloadPage() {
        window.location.reload();
    }

    function connectWallet() {
        dispatch(connectMetaMask())
    }

    // listen for account changes
    useEffect(() => {
        if(typeof window !== 'undefined'){
            window?.ethereum?.on('accountsChanged', connectWallet);
            window?.ethereum?.on('disconnect', reloadPage);
        }
    }, [])

    function disconnectWallet() {
        dispatch(signOut())
    }
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
                    <li>
                        {
                            wallet.address 
                            ?
                            <button onClick={disconnectWallet}>
                                Disconnect
                            </button>
                            :
                            <button onClick={connectWallet}>
                                Connect Wallet
                            </button>
                        }
                    </li>
                </ul>
            </nav>
        </>
    )
}
