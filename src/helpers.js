import {FAILED, LOADING} from "./constants/sliceConstants";

export const handlePending = (state) => {
    state.status = LOADING
    state.error = null
}

export const handleRejected = (state, action) => {
    if(state.status === LOADING){
        state.status = FAILED
        state.error = action.error.message
    }
}
