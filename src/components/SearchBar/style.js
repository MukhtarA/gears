import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px 60px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5px;
`

export const InputLabel = styled.input`
  outline: none;
  width: 100%;
  display: flex;
  border-radius: 5px;
  border: 2px solid #26b049;
  padding: 0 10px;
  color: #686868;
`

export const SearchButton = styled.button`
  outline: none;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #0068d7;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 104, 215, 0.9);
  }
`

export const SubMenuWrapper = styled.div`
  width: fit-content;
  padding: 1px 10px;
  background-color: #fff;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  color: #686868;
  border: 2px solid #26b049;

  @media (max-width: 768px) {
    display: ${({right}) => right ? 'flex' : 'none' };
  }
`

export const Pin = styled.h6`
  width: 16px;
  margin: 0;
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: #0068d7;
  color: #fff;
  border-radius: 8px;
  text-align: center;
`

export const CartModal = styled.div`
  width: 82%;
  padding: 10px;
  border: 1px solid lightgray;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: #fff;
`
