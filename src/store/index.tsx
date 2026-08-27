import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { memberApi } from "./apis/memberApi";
import { changeName, changeSorting, searchSortedMemberReducer } from "./searchSortedMemberSlice";

export const store = configureStore({
    reducer: {
        [memberApi.reducerPath]: memberApi.reducer,
        searchSortedMember: searchSortedMemberReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(memberApi.middleware);
    }
});

console.log(store.getState());
console.log(searchSortedMemberReducer);
console.log(changeName);
console.log(changeSorting);

setupListeners(store.dispatch);

export { useFetchMembersQuery, useFetchMemberByNameQuery } from './apis/memberApi';
export { changeName, changeSorting };
export type RootState = ReturnType<typeof store.getState>