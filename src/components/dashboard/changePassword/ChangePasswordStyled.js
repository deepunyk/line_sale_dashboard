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
  height: 350px;
  width: 350px;
  border-radius: 10px;
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`;

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${color.grey};
  padding: 0 20px;
  font-size: 0.9rem;
  color: ${color.greyShade5};
  font-weight: 500;
  transition: background-color 0.5s;

  ::placeholder {
    color: ${color.greyShade5};
  }

  &:focus {
    background-color: white;
    outline: none;
    border: 1px solid ${color.primary};
  }
`;

export const Button = styled.button`
  background-color: ${color.primary};
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: 10px 18px;
  border-radius: 30px;
`;

export const Text = styled.div`
  color: ${color.grey};
  font-weight: 500;
  font-size: 1.5rem;
`;
