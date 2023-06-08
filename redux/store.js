import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import walletSlice from "./reducers/walletSlice";

export const store = configureStore({
    reducer: {
        wallet: walletSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
