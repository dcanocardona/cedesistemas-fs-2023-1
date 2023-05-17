import styled from "styled-components";

export const WearDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const WearImageContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 20%;
    // tablets and smartphones
    @media only screen and (max-width: 768px) {
      width: 30%;;
    }
    height: auto;
  }
`

export const WearDetailContent = styled.section`
  margin: 0 15px;
`
