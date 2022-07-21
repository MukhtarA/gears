import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 50%;
  margin: 50px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border: 1px solid #cdcdcd;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: auto;
    padding: 10px 30px;
    border: none;
    box-shadow: none;
    margin: 0;
  }
`

export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
`

export const Button = styled.button`
  height: 30px;
  color: #fff;
  background-color: #0068d7;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`

export const Input = styled.input`
  border: 1px solid lightgray;
  padding: 10px;
  width: 100%;

`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 768px) {
  width: 100%;
    gap: 10px;
}
  
`
