import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import {handlePending, handleRejected} from "../../helpers";
import {SUCCEEDED} from "../../constants/sliceConstants";

const initialState = {
    loginList: {
        data: null,
        status: 'idle',
        error: null
    },
    registerList: {
        data: null,
        status: 'idle',
        error: null
    }
}

export const login = createAsyncThunk('login/register', async (data) => {
    return axios({
        method: "post",
        url: "https://salty-journey-46630.herokuapp.com/api/v2/registration",
        data: data,
    }).then(response => response.data)
})

export const register = createAsyncThunk('login/login', async (data) => {
    return axios({
        method: "post",
        url: "https://salty-journey-46630.herokuapp.com/api/v2/login",
        data: data,
    }).then(response => response.data)
})

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    extraReducers: {
        [login.pending]: (state) => {
            handlePending(state.loginList)
        },
        [login.fulfilled]: (state, action) => {
            state.loginList.data = action.payload
            state.loginList.status = SUCCEEDED
        },
        [login.rejected]: (state, action) => {
            handleRejected(state.loginList, action)
        },


        [register.pending]: (state) => {
            handlePending(state.loginList)
        },
        [register.fulfilled]: (state, action) => {
            state.loginList.data = action.payload
            state.loginList.status = SUCCEEDED
        },
        [register.rejected]: (state, action) => {
            handleRejected(state.loginList, action)
        }
    }
})


export default loginSlice.reducer
