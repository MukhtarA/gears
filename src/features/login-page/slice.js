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
    },
    checkIpList: {
        data: null,
        status: 'idle',
        error: null
    },
    userDataList: {
        data: null,
        status: 'idle',
        error: null
    },
    updateUserDataList: {
        data: null,
        status: 'idle',
        error: null
    }

}

export const checkIp = createAsyncThunk('ip/check', async (data) => {
    return axios.get('https://api.parts-catalogs.com/v1/catalogs',
        {
            headers: {
                Authorization: "OEM-API-54563777-0E09-4526-8FC3-96AE8439FD95"
            }
        }).then(response => response.data)
})

export const login = createAsyncThunk('login/register', async (data) => {
    return axios({
        method: "post",
        url: "https://salty-journey-46630.herokuapp.com/api/v2/login",
        data: data,
    }).then(response => response.data)
})

export const register = createAsyncThunk('login/login', async (data) => {
    return axios({
        method: "post",
        url: "https://salty-journey-46630.herokuapp.com/api/v2/registration",
        data: data,
    }).then(response => response.data).then(res => console.log(res))
})

export const getUserInfo = createAsyncThunk('user/get', async () => {
    return axios.get("https://salty-journey-46630.herokuapp.com/api/v2/user/info", {
        headers: {
            'Authorization': sessionStorage.getItem('accessToken')
        }
    }).then(response => response.data)
})

export const updateUserInfo = createAsyncThunk('user/update', async (data) => {
    return axios.post("https://salty-journey-46630.herokuapp.com/api/v2/user/update", data, {
        headers: {
            'Authorization': sessionStorage.getItem('accessToken')
        }
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
        },
        [checkIp.fulfilled]: (state, action) => {
            state.checkIpList.data = action.payload
            state.checkIpList.status = SUCCEEDED
        },
        [checkIp.rejected]: (state, action) => {
            handleRejected(state.checkIpList, action)
        },
        [getUserInfo.pending]: (state) => {
            handlePending(state.userDataList)
        },
        [getUserInfo.fulfilled]: (state, action) => {
            state.userDataList.data = action.payload
            state.userDataList.status = SUCCEEDED
        },
        [getUserInfo.rejected]: (state, action) => {
            handleRejected(state.userDataList, action)
        },
        [updateUserInfo.pending]: (state) => {
            handlePending(state.updateUserDataList)
        },
        [updateUserInfo.fulfilled]: (state, action) => {
            state.updateUserDataList.data = action.payload
            state.updateUserDataList.status = SUCCEEDED
        },
        [updateUserInfo.rejected]: (state, action) => {
            handleRejected(state.updateUserDataList, action)
        },
    }
})


export const selectorCheckError = (state) => state.loginSlice.checkIpList.error

export const selectorLoginStatus = (state) => state.loginSlice.loginList.status

export const selectorRegisterStatus = (state) => state.loginSlice.registerList.status

export const selectorAccessToken = (state) => state.loginSlice.loginList.data?.access_token

export const selectorUserData = (state) => state.loginSlice.userDataList.data

export const updateUserStatus = (state) => state.loginSlice.updateUserDataList.status

export default loginSlice.reducer
