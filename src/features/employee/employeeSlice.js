// @ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addEmployee, fetchEmployeeList, removeEmployee, updateEmployee } from "./employeeApi";

const initialState = [];

export const retrieveEmployees = createAsyncThunk(
    'employees/retrieve',
    async () => {
        const res = await fetchEmployeeList();
        console.log('ress', res);
        return res.data;
    }
);

export const createEmployee = createAsyncThunk(
    'employes/create',
    async (payload) => {
        const res = await addEmployee(payload);
        console.log('create res', res);
        return res.data;
    }
);

export const removeEmployeeById = createAsyncThunk(
    'employees/remove',
    async (id) => {
        const res = await removeEmployee(id);
        return id;
    }
)

export const updateEmployeeById = createAsyncThunk(
    'employees/update',
    async ({id, _payload}) => {
        console.log('insidee', _payload);
        console.log('iddd', id);
        const res = await updateEmployee(id, _payload);
        console.log('update res', res);
        return res.data;
    }
);

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: {
        // @ts-ignore
        [retrieveEmployees.fulfilled]: (state, action) => {
            console.log('acc', action);
            return [...action.payload];
        },

        // @ts-ignore
        [createEmployee.fulfilled]: (state, action) => {
            console.log('state', state);
            state.push(action.payload);
        },

        // @ts-ignore
        [removeEmployeeById.fulfilled]: (state, action) => {
            console.log('remove', state);
            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index+1, 1);
        },

        [updateEmployeeById.fulfilled]: (state, action) => {
            console.log('stateeeee', state);
            console.log('accccccc', action);
            let index = state.findIndex(employee => employee.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload,
            }
        },
    }
    // (builder) => {
    //     builder.addCase(retrieveEmployees.fulfilled, (state, action) => {
    //         console.log('action', action);
    //         state = [...action.payload];
    //     })
    // }
});

const { reducer } = employeeSlice;
export default reducer;

