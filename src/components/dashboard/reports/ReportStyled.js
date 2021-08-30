import styled from "styled-components";
import color from "../../../constants/color";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`;

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: scroll;
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
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableHeader = styled.th`
  padding: 6px;
  background-color: ${color.greyShade2};
  color: white;
  font-weight: 400;
  border: 1px solid grey;
  //position: sticky;
  // top: 0;
  // z-index: 1;
`;

export const TableData = styled.td`
  padding: 6px;
  font-weight: 400;
  border: 1px solid grey;
`;

export const TableRow = styled.tr`
  width: 100%;

  &:nth-child(even) {
    background-color: whitesmoke;
  }

  &:hover {
    background-color: ${color.primaryLight};
    cursor: pointer;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 6px 20px;
  background-color: white;
  color: ${color.primary};
  border: 2px solid ${color.primary};
  margin-left: auto;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${color.primary};
    color: white;
  }
`;

export const Text = styled.h2`
  color: ${(props) => props.color || "black"};
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  margin: 1px;
  margin-left: ${(props) => props.marginLeft && "0.5rem"};
  margin-bottom: ${(props) => props.marginBottom};
  letter-spacing: 0.5px;
  width:100%;
  text-align:center;
  vertical-align: middle;
  @media only screen and (max-width: 768px) {
    margin-top:20px;
  }
`;