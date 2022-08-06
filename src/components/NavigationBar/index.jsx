import {Link, useNavigate, useLocation} from "react-router-dom";
import {faBars, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import {LinkStyled, Nav, NavItem, NavMenu, FontAwesomeIconStyled, MenuWrapper} from "./style";
import {useCallback, useEffect, useMemo, useState} from "react";

import logo from '../../assets/image/icon.jpeg'
import minLogo from '../../assets/image/iconMin.jpeg'
import {Pin} from "../SearchBar/style";
import {useSelector} from "react-redux";
import {selectorCart} from "../../features/cart-page/slice";
import {computedCardItemsAmount, computedCardPrice} from "../../helpers/computed";

const NavigationBar = () => {
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

    const pathNames = ['/', '/login', '/search', '/personal']
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

    useEffect(() => {
        if (!isSidebarOpen){
            document.body.style.overflow = "hidden"
            const footer = document.getElementById("footer");
            footer.style.display = 'none'
        } else {
            document.body.style.overflow = "auto"
            const footer = document.getElementById("footer");
            footer.style.display = 'flex'
        }
    }, [isSidebarOpen])

    return(
        <Nav>
            <Link to="/"><img style={{width: matches ? 200 : 100, paddingTop: !matches && 10 }} src={matches ? logo : minLogo} /></Link>
            <NavMenu sidebar={isSidebarOpen}>
                <NavItem><LinkStyled to="/personal">Личный кабинет</LinkStyled></NavItem>
                <NavItem><LinkStyled to="/payment-info">Оплата</LinkStyled></NavItem>
                <NavItem><LinkStyled to="/delivery-info">Доставка</LinkStyled></NavItem>
                {!matches &&
                <div style={{position: 'relative'}}>
                    <NavItem><LinkStyled to="cart">Корзина</LinkStyled></NavItem>
                    {cartItemsAmount ? <Pin>{cartItemsAmount}</Pin> : null}
                </div>
                }
                <NavItem><LinkStyled to="/login" onClick={handleExit} >{accessToken ? 'Выйти' : 'Войти'}</LinkStyled></NavItem>
            </NavMenu>

            <MenuWrapper>
                <FontAwesomeIconStyled icon={faUser} color="darkgray" onClick={() => navigate(accessToken ? '/personal' : '/login')} />
                <div style={{position: 'relative'}}>
                    <FontAwesomeIconStyled icon={faBars} color="darkgray" onClick={() => setSidebar(!isSidebarOpen)} />
                    {cartItemsAmount ? <Pin>{cartItemsAmount}</Pin> : null}
                </div>
            </MenuWrapper>
        </Nav>
    )
}

export default NavigationBar
