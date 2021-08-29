import styled from "styled-components";
import color from "../../../constants/color";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 2vh 6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 115px;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    height: 90px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${StyledIconBase} {
    height: 25px;
    margin-right: 5px;
    color: ${color.greyShade5};
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor:"pointer";
  

  @media only screen and (max-width: 600px) {
    display: ${(props) => props.mobile ?? "none"};
    cursor:"pointer";
  }
`;

export const Image = styled.img`
  height: ${(props) => props.height};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom && "5px"};
  @media only screen and (max-width: 600px) {
    height: 50px;
  }
`;

export const Divider = styled.div`
  background-color: ${color.lightGrey};
  width: 1.5px;
  height: 80%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const MobileDivider = styled.div`
  background-color: ${color.lightGrey};
  width: 100%;
  height: 1.5px;
  margin: 10px 0;
`;

export const Text = styled.h2`
  color: ${(props) => props.color || "black"};
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  margin: 1px;
  margin-left: ${(props) => props.marginLeft && "0.5rem"};
  margin-bottom: ${(props) => props.marginBottom};
  letter-spacing: 0.5px;
  cursor:"pointer";
`;

export const MobileMenuText = styled.h2`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignEnd ? "flex-end" : "center")};
  margin-left: ${(props) => props.marginLeft && "1vw"};
  cursor:"pointer";
  &.logout{
    &:hover{
      cursor: pointer;
    }
  }
`;
