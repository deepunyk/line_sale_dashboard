import styled from "styled-components";
import color from "../../../constants/color";

export const Wrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  transition: all 0.3s;
  place-items: center;
  display: ${(props) => (props.isOpen ? "grid" : "none")};

  &.add {
    z-index: 99;
  }
`;

export const Modal = styled.div`
  background-color: white;
  height: 500px;
  width: 800px;
  border-radius: 10px;
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

`;
