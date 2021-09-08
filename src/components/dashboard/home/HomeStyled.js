import styled from "styled-components";
import color from "../../../constants/color";

export const Wrapper = styled.div`
  padding: 10px;
  background-color: white;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "month present today details"
    "chart chart list list";
  grid-auto-columns: 1fr 1fr 1fr 1fr;
  place-items: space-between;
  grid-auto-rows: 38% 60%;
  grid-column-gap: 10px;
  grid-row-gap: 2%;

  @media only screen and (max-width: 600px) {
    grid-auto-columns: 1fr;
    grid-template-areas:
      "month"
      "present"
      "today"
      "details"
      "chart"
      "chart"
      "list"
      "list";
    grid-auto-rows: 250px;
    overflow: auto;
  }
`;

export const Divider = styled.div`
  height: 70%;
  width: 2px;
  background-color: ${color.brownShade1};
`;

export const HorizontalDivider = styled.div`
  width: 90%;
  height: 2px;
  background-color: ${color.primary};
`;

export const SizedBox = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 120px;
    width: 100%;
    height: 100%;
  }
`;
