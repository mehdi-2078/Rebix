import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../../axios.configs';

export const LoginUser = createAsyncThunk('Login_User', async (values, {rejectWithValue}) => {
    try {
        const {data, status} = await axios.post('auth/login/', {
            password: values.password,
            phone: values.phone,
        });
        return {data, status};
    } catch (error) {
        if (error.response && error.response.data.message) {
            console.log({error});
            return rejectWithValue(error.response.data.message);
        }
        console.log({error});
        return rejectWithValue(error.message);
    }
});

export const profile = createAsyncThunk('PROFILE', async ({phone}, {rejectWithValue}) => {
    try {
        const {data, status} = await axios.post('auth/profile/', {phone});
        return {data, status};
    } catch (error) {
        if (error.response && error.response.data.message) {
            console.log({error});
            return rejectWithValue(error.response.data.message);
        }
        console.log({error});
        return rejectWithValue(error.message);
    }
});
