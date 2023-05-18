import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../../axios.configs';

export const getTodos = createAsyncThunk('Get_Todos', async (values, {rejectWithValue}) => {
    try {
        const {data, status} = await axios.get('todo/allTodos/');
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
export const makeTodo = createAsyncThunk('MAKE_TODO', async (values, {rejectWithValue}) => {
    try {
        const {data, status} = await axios.post('todo/makeTodo/', {
            title: values.title,
            description: values.description
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

export const deleteTodo = createAsyncThunk('DELETE_TODO', async (id, {rejectWithValue}) => {
    try {
        const {data, status} = await axios.put('todo/deleteTodo/', {
            id
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

export const editTodo = createAsyncThunk('EDIT_TODO', async ({id, title, description, isDone}, {rejectWithValue}) => {
    try {
        const {data, status} = await axios.put('todo/editTodo/', {
            title,
            id,
            description,
            isDone
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
