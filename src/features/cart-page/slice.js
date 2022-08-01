import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import _ from "lodash"
import axios from "axios";
import {handlePending, handleRejected} from "../../helpers";
import {SUCCEEDED} from "../../constants/sliceConstants";
import {login} from "../login-page/slice";

const initialState = {
    cart: [],
    addToCartList: {
        data: null,
        status: 'idle',
        error: null
    }
}


export const addItemToCart = createAsyncThunk('cart/add', async (data) => {
    return axios.post("https://salty-journey-46630.herokuapp.com/api/v2/cart/add", data, {
        headers: {
            'Authorization': sessionStorage.getItem('accessToken')
        }
    }).then(response => response.data)
})

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart (state, action) {
            if(_.find(state?.cart, (item) => item?.data?.id === action.payload?.data?.id)){
                if(action.payload.count > 0){
                    state.cart.map((item) => item?.data?.id === action.payload?.data?.id ? item.count = action.payload.count : item)
                } else {
                    _.remove(state.cart, (item) => item?.data?.id === action.payload.data?.id)
                }
            }else {
                state.cart = [...state.cart, action.payload]
            }
        }
    },
    extraReducers: {
        [addItemToCart.pending]: (state) => {
            handlePending(state.addToCartList)
        },
        [addItemToCart.fulfilled]: (state, action) => {
            state.addToCartList.data = action.payload
            state.addToCartList.status = SUCCEEDED
        },
        [addItemToCart.rejected]: (state, action) => {
            handleRejected(state.addToCartList, action)
        }
    }
})

export const selectorCart = (state) => state.cartSlice.cart

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer
