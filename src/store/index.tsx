import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { memberApi } from "./apis/memberApi";

export const store = configureStore({
    reducer: {
        [memberApi.reducerPath]: memberApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(memberApi.middleware);
    }
});

console.log(store.getState());

setupListeners(store.dispatch);

export { useFetchMembersQuery } from './apis/memberApi';