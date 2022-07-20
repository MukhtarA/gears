import styled from "@emotion/styled";

export const Button = styled.button`
  flex: 1;
  width: 100%;
  height: 30px;
  text-decoration: none;
  border: 1px solid #d5d5d5;
  border-radius: 40px;
  cursor: pointer;
  
  :hover {
    background-color: #fff;
  }
`

export const ButtonPrimary = styled.button`
  flex: 1;
  width: 100%;
  height: 30px;
  text-decoration: none;
  border: 1px solid #d5d5d5;
  border-radius: 40px;
  color: #fff;
  background-color: #0068d7;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 104, 215, 0.9);
  }
`

export const Count = styled.p`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 13px;
  text-align: center;
`
