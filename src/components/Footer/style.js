import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterWrapper = styled.footer`
  width: 100vw;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  padding: 30px 0;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    padding: 15px 0;

  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  border-left: 1px solid white;
  
  :first-child {
    border: none;
  }

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid white;
    width: 150px;
  }
  
  
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #686868;
  font-size: 14px;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const FooterHeading = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
