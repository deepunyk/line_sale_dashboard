import React from "react";
import * as S from "./LayerTwoStyled";
import RetailerImg from "../../../../assets/icons/retailer.svg";
import SalespersonImg from "../../../../assets/icons/salesperson.svg";
import ProductImg from "../../../../assets/icons/product.svg";
import color from "../../../../constants/color";

const CompanyDetails = (data) => {
  return (
    <S.CompanyWrapper>
      {data.map((d) => {
        return (
          <S.CompanySubWrapper>
            <S.Text lightFont fontSize="0.9rem">
              {d.title}
            </S.Text>
            <S.CompanyImageWrapper marginBottom="1.5vh" marginTop="1.5vh" width="50px" backgroundColor={d.color}>
              <S.CompanyImage src={d.icon}></S.CompanyImage>
            </S.CompanyImageWrapper>
            <S.Text>{d.count}</S.Text>
          </S.CompanySubWrapper>
        );
      })}
    </S.CompanyWrapper>
  );
};

export default CompanyDetails;
