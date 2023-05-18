import {createSlice} from '@reduxjs/toolkit';
import {LoginUser, profile} from './loginThunk';

const initialState = {
    loading: false,
    isLogin: null,
};
const slice = createSlice({
    name: 'login',
    initialState,
    extraReducers: (builder) => {
        builder
            /// //////login/////////////
            .addCase(LoginUser.fulfilled, (state, {payload}) => {
                localStorage.setItem('isLogin', payload.data.isLogin);
                localStorage.setItem('phone', payload.data.phone);
                localStorage.setItem('fullName', payload.data.fullName);
                localStorage.setItem('lastLoginDate', payload.data.lastLoginDate);
                console.log({payload})
            })
            .addCase(LoginUser.pending, (state, {payload}) => {
                state.loading = false;
            })
            .addCase(LoginUser.rejected, (state, {payload}) => {
                state.loading = false;
            })

        // ///profile//////
        // .addCase(profile.fulfilled, (state, {payload}) => {
        //     localStorage.setItem('fullName', payload.data.fullName);
        //     localStorage.setItem('lastLoginDate', payload.data.lastLoginDate);
        //     state.isLogin = true;
        // })
        // .addCase(profile.pending, (state, {payload}) => {
        //     state.loading = false;
        // })
        // .addCase(profile.rejected, (state, {payload}) => {
        //     state.loading = false;
        // })

    },
});


export default slice.reducer;
