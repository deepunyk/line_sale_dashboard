import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  // margin-right: 20px;
  width:150px;
`;

export const Text = styled.p`
  margin: 0;
  @media only screen and (max-width: 768px) {
    margin-top:20px;
  }
`;

export const Dropdown = styled.select`
  width: 120px;
  padding: 5px;
`;

export const DropdownItem = styled.option``;
