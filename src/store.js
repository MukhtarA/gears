import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import * as reducer from "./reducers"

const middlewares = []

middlewares.push(logger)

const store = configureStore(
    {
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
    }
)

export default store
