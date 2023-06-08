import { createSlice } from '@reduxjs/toolkit'

const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        signer: false,
        address: false,
        balance: false
    },
    reducers: {
        WALLET: (state, action) => {
            state.signer = action.payload.signer
            state.address = action.payload.address
            state.balance = action.payload.balance
        }
    }
})

export const { WALLET } = walletSlice.actions
export default walletSlice.reducer
