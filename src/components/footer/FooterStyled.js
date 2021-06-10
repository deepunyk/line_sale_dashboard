import styled from "styled-components";
import color from "../../constants/color";

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${color.greyShade2};
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 80px;
    padding: 0 15px;
  }
`;

export const Text = styled.h1`
  color: white;
  text-align: center;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
