import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import {handlePending, handleRejected} from "../../helpers";
import {SUCCEEDED} from "../../constants/sliceConstants";

const initialState = {
    searchList: {
        data: null,
        status: 'idle',
        error: null
    }
}

export const searchByNumber = createAsyncThunk('search/byNumber', async (data) => {
    return axios.get(`https://salty-journey-46630.herokuapp.com/api/v2/parts/${data}`).then(response => response.data)
})

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    extraReducers: {
        [searchByNumber.pending]: (state) => {
            handlePending(state.searchList)
        },
        [searchByNumber.fulfilled]: (state, action) => {
            state.searchList.data = action.payload
            state.searchList.status = SUCCEEDED
        },
        [searchByNumber.rejected]: (state, action) => {
            handleRejected(state.searchList, action)
        }
    }
})

export const selectorSearchData = (state) => state.searchSlice.searchList.data

export const selectorSearchStatus = (state) => state.searchSlice.searchList.status

export default searchSlice.reducer
