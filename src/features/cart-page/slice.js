import {createSlice} from "@reduxjs/toolkit";
import _ from "lodash"

const initialState = {
    cart: []
}



const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart (state, action) {
            if(_.map(state.cart, (item) => item?.data?.id === action.payload?.data?.id  )){
                _.remove(state.cart, (item) => item?.data?.id === action.payload.data?.id)
                console.log(action.payload)
                if(action.payload.count > 0)
                    state.cart = [...state.cart, action.payload]
            }else {
                state.cart = [...state.cart, action.payload]
            }
        }
    },
    extraReducers: {}
})

export const selectorCart = (state) => state.cartSlice.cart

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer
