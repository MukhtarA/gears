import {Link, useNavigate, useLocation} from "react-router-dom";
import {faBars, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import {
    LinkStyled,
    FooterWrapper,
    FooterColumn, FooterHeading
} from "./style";
import {useCallback, useEffect, useMemo, useState} from "react";

import logo from '../../assets/image/icon.jpeg'
import minLogo from '../../assets/image/iconMin.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Pin} from "../SearchBar/style";
import {useSelector} from "react-redux";
import {selectorCart} from "../../features/cart-page/slice";
import {computedCardItemsAmount, computedCardPrice} from "../../helpers/computed";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const cart = useSelector(selectorCart)
    const cartItemsAmount = useMemo(() => computedCardItemsAmount(cart), [cart])

    const [isSidebarOpen, setSidebar] = useState(true)
    const accessToken = sessionStorage.getItem('accessToken')

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const pathNames = ['/', '/login', '/search']
    const handleExit = useCallback(() => {
        if (accessToken !== undefined) {
            sessionStorage.removeItem('accessToken')
            navigate('/')
        }
    }, [navigate, accessToken])

    useEffect(() => {
        if (!pathNames.includes(location.pathname)){
            setSidebar(!isSidebarOpen)
        }
    }, [location])

    return(
        <FooterWrapper id="footer">
                <FooterColumn>
                    <FooterHeading>XAMILION ONLINE STORE</FooterHeading>
                </FooterColumn>
                <FooterColumn>
                    <FooterHeading>Информация</FooterHeading>
                    <LinkStyled to="payment-info">Оплата</LinkStyled>
                    <LinkStyled to="delivery-info">Доставка</LinkStyled>
                </FooterColumn>
                <FooterColumn >
                    <FooterHeading>Контакты</FooterHeading>
                    <LinkStyled to="">ул. Саги Ашимова 25</LinkStyled>
                    <LinkStyled to="">+7 (701) 272-26-26</LinkStyled>
                </FooterColumn>
        </FooterWrapper>
    )
}

export default Footer
