import styled from "styled-components";
import color from "../../../constants/color";

export const Wrapper = styled.div`
  min-width: 280px;
  background-color: #f9f9f9;
  height: 79vh;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0px 16px 0 rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${color.greyShade2};
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubHead = styled.div`
  padding: 8px 30px;
  //color: black;
  //background: #fd0167 ${(props) => props.background};
  color:${(props) => props.color || "black"};
  background:${(props) => props.background || "white"};
  font-size: 0.9rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.background || "rgba(0, 0, 0, 0.1)"};
  }
`;

export const Head = styled.div`
  padding: 8px 30px;
  background-color: ${color.greyShade2};
  color: white;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
`;
