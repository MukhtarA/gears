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
import DeliveryInfoPage from "./features/delivery-info-page";
import PaymentInfoPage from "./features/payment-info-page";
import styled from "@emotion/styled";

const HeaderBlock = styled.div`
  @media (max-width: 768px) {
    position: sticky;
    width: 100%;
    top: 0;
  }
`

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HeaderBlock>
                    <NavigationBar/>
                    <SearchBar />
                </HeaderBlock>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/search" element={<SearchResultPage />} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="delivery-info" element={<DeliveryInfoPage />} />
                    <Route path="payment-info" element={<PaymentInfoPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
