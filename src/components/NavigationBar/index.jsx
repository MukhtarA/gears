import {Link, useNavigate, useLocation} from "react-router-dom";
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import {LinkStyled, Nav, NavItem, NavMenu, FontAwesomeIconStyled, MenuWrapper} from "./style";
import {useCallback, useEffect, useState} from "react";

import logo from '../../assets/image/icon.jpeg'

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isSidebarOpen, setSidebar] = useState(true)
    const accessToken = sessionStorage.getItem('accessToken')

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
        <Nav>
            <Link to="/"><img style={{ width: 200 }} src={logo} /></Link>
            <NavMenu sidebar={isSidebarOpen}>
                <NavItem><LinkStyled to="payment-info">Оплата</LinkStyled></NavItem>
                <NavItem><LinkStyled to="delivery-info">Доставка</LinkStyled></NavItem>
                <NavItem><LinkStyled to="/login" onClick={handleExit} >{accessToken ? 'Выйти' : 'Войти'}</LinkStyled></NavItem>
            </NavMenu>

            <MenuWrapper>
                <FontAwesomeIconStyled icon={faUser} color="darkgray" onClick={() => navigate('/login')} />
                <FontAwesomeIconStyled icon={faBars} color="darkgray" onClick={() => setSidebar(!isSidebarOpen)} />
            </MenuWrapper>
        </Nav>
    )
}

export default NavigationBar
