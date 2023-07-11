'use client'
import { useSelector } from 'react-redux';

export default function WalletAddress() {
  const { wallet } = useSelector(state => state)
    return (
      <>
        <p>
          Wallet Address: { wallet.address == false ? "Not Connected" : wallet.address}
        </p>
      </>
    )
  }
