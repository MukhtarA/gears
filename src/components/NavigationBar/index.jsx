import {Link} from "react-router-dom";
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import {LinkStyled, Nav, NavItem, NavMenu, FontAwesomeIconStyled, MenuWrapper} from "./style";
import {useState} from "react";

import logo from '../../assets/image/icon.jpeg'

const NavigationBar = () => {
    const [isSidebarOpen, setSidebar] = useState(true)

    return(
        <Nav>
            <Link to="/"><img style={{ width: 200 }} src={logo} /></Link>
            <NavMenu sidebar={isSidebarOpen}>
                <NavItem><LinkStyled to="/">Home</LinkStyled></NavItem>
                <NavItem><LinkStyled to="/login">Contacts</LinkStyled></NavItem>
                <NavItem><LinkStyled to="/">About</LinkStyled></NavItem>
            </NavMenu>

            <MenuWrapper>
                <FontAwesomeIconStyled icon={faUser} color="darkgray" onClick={() => setSidebar(!isSidebarOpen)} />
                <FontAwesomeIconStyled icon={faBars} color="darkgray" onClick={() => setSidebar(!isSidebarOpen)} />
            </MenuWrapper>
        </Nav>
    )
}

export default NavigationBar
