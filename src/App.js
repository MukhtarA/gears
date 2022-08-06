import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Provider, useSelector} from "react-redux";

import HomePage from './features/home-page'
import LoginPage from "./features/login-page";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";

import store from "./store";
import SearchResultPage from "./features/search-result-page";
import CartPage from "./features/cart-page";
import {useEffect, useState} from "react";
import DeliveryInfoPage from "./features/delivery-info-page";
import PaymentInfoPage from "./features/payment-info-page";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import PersonalPage from "./features/personal-page";

const HeaderBlock = styled.div`
  @media (max-width: 768px) {
    position: sticky;
    width: 100%;
    top: 0;
  }
`


function App() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
                <HeaderBlock style={{ padding: `0 ${matches ? '120px': 0}`}} >
                    <NavigationBar/>
                    <SearchBar />
                </HeaderBlock>
                    <div style={{ overflow: 'hidden', padding: `0 ${matches ? '120px': 0} ${matches ? 300 : 400}px ${matches ? '120px': 0} ` }}>
                        <Routes >
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/search" element={<SearchResultPage />} />
                            <Route path="/cart" element={<CartPage/>} />
                            <Route path="/delivery-info" element={<DeliveryInfoPage />} />
                            <Route path="/payment-info" element={<PaymentInfoPage />} />
                            <Route path="/personal" element={<PersonalPage />} />
                        </Routes>
                    </div>
                <Footer style={{ padding: `0 ${matches ? '120px': 0}`}} />
                </div>

            </BrowserRouter>
        </Provider>
    );
}

export default App;
