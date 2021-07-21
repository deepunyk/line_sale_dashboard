import React, { useState } from "react";
import * as S from "./FilterStyled";

function Dropdown(props)
{
  
    const options = props.options.map((e) => (
      <S.DropdownItem value={e.value} key={e.value}>
        {e.title}
      </S.DropdownItem>
    ));
  
  return (
    <S.Wrapper>
      <S.Text>{props.label}</S.Text>
      <S.Dropdown onChange={(e) => props.onSelect(e.target.value)} value={props.selectedItem}>
        {options}
      </S.Dropdown>
    </S.Wrapper>
  );
}

export default Dropdown;
