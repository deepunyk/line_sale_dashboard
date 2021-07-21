import React from "react";
import styled from "styled-components";
import color from "../../constants/color";
const Loader = ({ text }) => {
  const Wrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    width: 100%;
    height: 100%;
  `;

  const Loader = styled.div`
    border: 8px solid ${color.greyShade4};
    border-top: 8px solid ${color.grey};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <Wrapper>
      <Loader />
      <h5>{text}</h5>
    </Wrapper>
  );
};

export default Loader;
