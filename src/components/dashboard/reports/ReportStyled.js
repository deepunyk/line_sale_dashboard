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
  border: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TableData = styled.td`
  padding: 6px;
  font-weight: 400;
  border: 1px solid whitesmoke;
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
