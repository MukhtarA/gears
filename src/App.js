import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Provider, useSelector} from "react-redux";

import HomePage from './features/home-page'
import LoginPage from "./features/login-page";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";

import store from "./store";
import SearchResultPage from "./features/search-result-page";
import CartPage from "./features/cart-page";
import {selectorAccessToken} from "./features/login-page/slice";
import {useEffect} from "react";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavigationBar/>
                <SearchBar />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/search" element={<SearchResultPage />} />
                    <Route path="/cart" element={<CartPage/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
