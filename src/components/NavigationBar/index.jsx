import {Link, useNavigate, useLocation} from "react-router-dom";
import {faBars, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import {LinkStyled, Nav, NavItem, NavMenu, FontAwesomeIconStyled, MenuWrapper} from "./style";
import {useCallback, useEffect, useMemo, useState} from "react";

import logo from '../../assets/image/icon.jpeg'
import minLogo from '../../assets/image/iconMin.jpeg'
import {Pin} from "../SearchBar/style";
import {useDispatch, useSelector} from "react-redux";
import {clearCartState, selectorCart} from "../../features/cart-page/slice";
import {computedCardItemsAmount} from "../../helpers/computed";
import {clearLoginState, selectorUserData} from "../../features/login-page/slice";

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const cart = useSelector(selectorCart)
    const cartItemsAmount = useMemo(() => computedCardItemsAmount(cart), [cart])
    const userData = useSelector(selectorUserData)

    const [isSidebarOpen, setSidebar] = useState(true)
    const accessToken = localStorage.getItem('accessToken')

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const pathNames = ['/', '/login', '/search', '/registration']
    const handleExit = useCallback(() => {
        if (accessToken !== undefined) {
            dispatch(clearCartState())
            dispatch(clearLoginState())
            localStorage.removeItem("accessToken")
            window.location.reload()
        }
    }, [dispatch, navigate, accessToken])

    useEffect(() => {
        if (!pathNames.includes(location.pathname)){
            setSidebar(!isSidebarOpen)
        }
    }, [location])

    return(
        <Nav>
            <Link to="/"><img style={{width: matches ? 200 : 100, paddingTop: !matches && 10 }} src={matches ? logo : minLogo} /></Link>
            <NavMenu sidebar={isSidebarOpen}>
                <NavItem><LinkStyled to="/personal">{userData ? `${userData?.first_name} ${userData?.balance}` : 'Личный кабинет' }</LinkStyled></NavItem>
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
