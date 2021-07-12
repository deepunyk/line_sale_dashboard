import React from "react";
import * as S from "./LayerTwoStyled";
import viLogo from "../../../../assets/icons/viLogo.png";

const SaleList = (data) => {
  return (
    <S.SaleWrapper>
      {data.map((d) => {
        return (
          <S.SaleItemWrapper>
            <S.Image src={d.image} marginRight="1vw"></S.Image>
            <S.Text fontSize="1rem" marginRight="auto" lightFont>
              {d.productName}
            </S.Text>
            <S.Text fontSize="1rem" lightFont>
              ₹{d.stockQty}
            </S.Text>
          </S.SaleItemWrapper>
        );
      })}
    </S.SaleWrapper>
  );
};

export default SaleList;
