import { createSlice } from "@reduxjs/toolkit";

const searchSortedMemberSlice = createSlice({
    name: 'searchSortedMember',
    initialState: {
        searchName: '',
        sortBy: 'firsT_NAME'
    },
    reducers: {
        changeName(state, action) {
            state.searchName = action.payload;
        },
        changeSorting(state, action) {
            state.sortBy = action.payload;
        },
    }
})

export const { changeName, changeSorting } = searchSortedMemberSlice.actions;
export const searchSortedMemberReducer = searchSortedMemberSlice.reducer;