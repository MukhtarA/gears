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
    },
    initialCartList: {
        data: null,
        status: 'idle',
        error: null
    },
    confirmToCartList: {
        data: null,
        status: 'idle',
        error: null
    },
    confirmToOrderList: {
        data: null,
        status: 'idle',
        error: null
    }
}


export const addItemToCart = createAsyncThunk('cart/add', async (data) => {
    return axios.post("https://salty-journey-46630.herokuapp.com/api/v2/cart/add", data, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
        }
    }).then(response => response.data)
})

export const getCart = createAsyncThunk('cart/get', async () => {
    return axios.get("https://salty-journey-46630.herokuapp.com/api/v2/cart/items", {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
        }
    }).then(response => response.data)
})

export const confirmToCart = createAsyncThunk('', async (data) => {
    return axios.post("https://salty-journey-46630.herokuapp.com/api/v2/cart/confirm", data, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
        }
    }).then(response => response.data)
})

export const confirmToOrder = createAsyncThunk('confirm/order', async (data) => {
    return axios.post("https://salty-journey-46630.herokuapp.com/api/v2/cart/order", data, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
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
        },
        setInitialCart (state, action) {
            state.cart = action.payload
        },
        clearState (state) {
            state = initialState
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
        },
        [getCart.pending]: (state) => {
            handlePending(state.initialCartList)
        },
        [getCart.fulfilled]: (state, action) => {
            state.initialCartList.data = action.payload
            state.initialCartList.status = SUCCEEDED
        },
        [getCart.rejected]: (state, action) => {
            handleRejected(state.initialCartList, action)
        },
        [confirmToCart.pending]: (state) => {
            handlePending(state.confirmToCartList)
        },
        [confirmToCart.fulfilled]: (state, action) => {
            state.confirmToCartList.data = action.payload
            state.confirmToCartList.status = SUCCEEDED
        },
        [confirmToCart.rejected]: (state, action) => {
            handleRejected(state.confirmToCartList, action)
        },
        [confirmToOrder.pending]: (state) => {
            handlePending(state.confirmToOrderList)
        },
        [confirmToOrder.fulfilled]: (state, action) => {
            state.confirmToOrderList.data = action.payload
            state.confirmToOrderList.status = SUCCEEDED
        },
        [confirmToOrder.rejected]: (state, action) => {
            handleRejected(state.confirmToOrderList, action)
        }
    }
})

export const selectorCart = (state) => state.cartSlice.cart

export const selectorInitialCartData = (state) => state.cartSlice.initialCartList.data

export const selectorInitialCartStatus = (state) => state.cartSlice.initialCartList.status

export const {addToCart, setInitialCart, clearState} = cartSlice.actions

export default cartSlice.reducer
