import {createSlice} from '@reduxjs/toolkit';
import {getTodos} from './todoThunk.js';

const initialState = {
    loading: false,
    todos: [],
};
const slice = createSlice({
    name: 'todos',
    initialState,
    extraReducers: (builder) => {
        builder
            /// //////login/////////////
            .addCase(getTodos.fulfilled, (state, {payload}) => {
                console.log({payload})
                state.todos = payload.data;
                state.isLogin = true;
            })
            .addCase(getTodos.pending, (state, {payload}) => {
                state.loading = false;
            })
            .addCase(getTodos.rejected, (state, {payload}) => {
                state.loading = false;
            })

    },
});


export default slice.reducer;
