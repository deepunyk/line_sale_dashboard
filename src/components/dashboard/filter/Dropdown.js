import React, { useState } from "react";
import * as S from "./FilterStyled";

function Dropdown(props) {
  const [item, setItem] = useState("All");
  return (
    <S.Wrapper>
      <S.Text>{props.label}</S.Text>
      <S.Dropdown value={item} onChange={(e) => setItem(e.target.value)}>
        <S.DropdownItem value="All">All</S.DropdownItem>
        <S.DropdownItem value="One">One</S.DropdownItem>
        <S.DropdownItem value="One">One</S.DropdownItem>
        <S.DropdownItem value="One">One</S.DropdownItem>
        <S.DropdownItem value="One">One</S.DropdownItem>
        <S.DropdownItem value="One">One</S.DropdownItem>
      </S.Dropdown>
    </S.Wrapper>
  );
}

export default Dropdown;
