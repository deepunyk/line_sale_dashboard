import React from "react";
import styled from "styled-components";
import color from "../../constants/color";
const Loader = ({ text, size = "60px", thickness = "8px", height = "100%", width = "100%" }) => {
  const Wrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    width: ${width};
    height: ${height};
  `;

  const Loader = styled.div`
    border: ${thickness} solid ${color.greyShade4};
    border-top: ${thickness} solid ${color.grey};
    border-radius: 50%;
    width: ${size};
    height: ${size};
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
