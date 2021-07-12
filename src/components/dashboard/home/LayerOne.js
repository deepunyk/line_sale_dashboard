import React from "react";
import * as S from "./LayerOneStyled";
import color from "../../../constants/color";
import CompanyDetails from "./layerTwo/CompanyDetails";

const LayerOne = (props) => {
  const getSection = (icon, price, subTitle) => {
    return (
      <>
        <S.Wrapper>
          <S.Image src={icon} />
          <S.Text fontSize="0.9rem" color="black" marginBottom="10px" marginTop="20px">
            ₹{price}
          </S.Text>
          <S.Text color="black" fontSize="1rem" lightFont>
            {subTitle}
          </S.Text>
        </S.Wrapper>
      </>
    );
  };

  const getMainSection = () => {
    if (props.data.title === "COMPANY DETAILS") {
      return CompanyDetails(props.data.data);
    } else {
      return (
        <S.SubWrapper isCenter>
          {getSection(props.data.iconOne, props.data.priceOne, props.data.subTitleOne)}
          {getSection(props.data.iconTwo, props.data.priceTwo, props.data.subTitleTwo)}
        </S.SubWrapper>
      );
    }
  };

  return (
    <S.Wrapper isCenter shadow area={props.area}>
      <S.Text spacing fontSize="1.1rem" marginBottom="20px">
        {props.data.title}
      </S.Text>
      {getMainSection()}
    </S.Wrapper>
  );
};

export default LayerOne;
