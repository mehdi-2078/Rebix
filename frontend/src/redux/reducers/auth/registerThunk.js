import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../../axios.configs';

export const registerUser = createAsyncThunk('Register', async (values, rejectWithValue) => {
    try {
        const {data, status} = await axios.post('auth/register/', {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            password: values.password,
        });
        return {data, status};
    } catch (error) {
        if (error.response && error.response.data.message) {
            rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.message);
    }
});