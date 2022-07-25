import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 60px 0;
  background-color: #ffff;


  @media (max-width: 768px) {
    padding: 0 30px 20px;
    gap: 10px;
  }
`

export const Text = styled.p`
    margin: 0;
`

export const ContentWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: 1px dashed gray;
  padding: 20px;
  @media (max-width: 768px) {
    width: 200px;
  }
`

export const Image = styled.img`
  width: 200px;
  
  @media (max-width: 768px) {
    width: 80px;
  }
`
