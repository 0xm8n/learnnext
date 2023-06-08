import { WALLET } from "../reducers/walletSlice";
import { ethers } from "ethers";
const chainID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID);


export const connectMetaMask = () => async (dispatch) => {
    try {
        if (!window.ethereum) {
            window.alert('Please install metamask first.')
        }

        const provider = (typeof window !== "undefined") ? new ethers.providers.Web3Provider(window.ethereum) : null;

        // await network and return chainId
        const getNetwork = await provider.getNetwork();
        console.log("getNetwork.chainId --> ", getNetwork.chainId)
        console.log("getNetwork.chainId in Hex --> ", ethers.BigNumber.from(getNetwork.chainId))

        // Check chain network
        if (getNetwork.chainId !== chainID) {
            (chainID === 1) ? window.alert("Please change network to Mainnet.") : window.alert("Please change network to Goerli");
            const newChainID = (chainID === 1) ? '0x1' : '0x5';
            return window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{
                    chainId: newChainID
                }]
            });
        }
        
        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", [])

        console.log("Connecting...");

        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();

        // Get balance
        const balance = await signer.getBalance();
        const etherBalance = ethers.utils.formatEther(balance)
        // Payload for redux
        const payload = {
            signer: signer,
            address: signerAddress,
            balance: etherBalance
        }
        dispatch(WALLET(payload))
        window.alert('Metamask Connected.')
        console.log("Connected.")

    } catch (err) {
        if (err.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0x5',
                            rpcUrl: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                        },
                    ],
                });
            } catch (addErr) {
                window.alert(addErr);
            }
        }
        console.log("connectMetamask err ---> ", err)
    }
}

export const signOut = () => async (dispatch) => {
    try {
        dispatch(WALLET({
            signer: false,
            address: false,
            balance: false
        }))
        window.alert("The wallet has been disconnected successfully.")
    } catch (err) {
        window.alert(err.message)
    }
}
