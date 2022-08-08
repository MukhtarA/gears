import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 60px 0;
  margin-top: 30px;
  background-color: #ffff;
  
  @media (max-width: 768px) {
    padding: 0 30px;
    gap: 10px;
  }
`
