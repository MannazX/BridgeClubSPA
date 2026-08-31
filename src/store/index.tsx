import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { memberApi } from "./apis/memberApi";
import { clubApi } from "./apis/clubApi";
import { changeName, changeSorting, searchSortedMemberReducer } from "./searchSortedMemberSlice";

export const store = configureStore({
    reducer: {
        [memberApi.reducerPath]: memberApi.reducer,
        [clubApi.reducerPath]: clubApi.reducer,
        searchSortedMember: searchSortedMemberReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(memberApi.middleware)
        .concat(clubApi.middleware);
    }
});

console.log(store.getState());
console.log(searchSortedMemberReducer);
console.log(changeName);
console.log(changeSorting);



setupListeners(store.dispatch);

export { useFetchMembersQuery, useFetchMemberByNameQuery, useFetchMemberByIdQuery } from './apis/memberApi';
export { useFetchClubsQuery } from './apis/clubApi';
export { changeName, changeSorting };
export type RootState = ReturnType<typeof store.getState>