import {createSlice} from '@reduxjs/toolkit';
import {registerUser} from './registerThunk';

const initialState = {
    loading: false,
    userInfo: {},
    isRegister: true,
};

const slice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        SAVE_USER_INFO: (state, {payload}) => {
            state.userInfo = payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                state.loading = false;
            })
            .addCase(registerUser.pending, (state, {payload}) => {
                state.loading = true;
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.loading = false;
            })
    },
});
export const {SAVE_USER_INFO} =
    slice.actions;
export default slice.reducer;
