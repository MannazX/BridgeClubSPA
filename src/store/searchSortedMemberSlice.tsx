import { createSlice } from "@reduxjs/toolkit";

const searchSortedMemberSlice = createSlice({
    name: 'searchSortedMember',
    initialState: {
        searchName: ''
    },
    reducers: {
        changeName(state, action) {
            state.searchName = action.payload;
        }
    }
})

export const { changeName } = searchSortedMemberSlice.actions;
export const searchSortedMemberReducer = searchSortedMemberSlice.reducer;