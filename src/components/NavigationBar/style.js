import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav = styled.nav`
  display: flex;
  padding: 30px 60px;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background-color: #fff;

  @media (max-width: 768px){
    justify-content: space-between;
    padding: 0 30px;
  }
  
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px){
    position: fixed;
    padding-top: 20px;
    top: 8vh;
    right: 0;
    width: 100%;
    height: 93vh;
    margin: 0;
    background-color: #fff;
    flex-direction: column;
    transform: ${({sidebar}) => sidebar ? 'translateX(100%)' : `translateX(4%)`};
    transition: 0.4s ease-in;
  }
  
  
`

export const NavItem = styled.li`
  list-style: none;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #686868;
`

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  cursor: pointer;
`

export const MenuWrapper = styled.div`
  display: none;
  
  @media (max-width: 768px){
    display: flex;
    gap: 30px;
  }
`
