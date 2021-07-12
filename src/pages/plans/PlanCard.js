import React from "react";
import color from "../../constants/color";
import * as S from "./PlansStyled";
import API from "../../utils/Api";
import { useHistory } from "react-router-dom";

const PlanCard = (props) => {
  const data = props.data;
  let history = useHistory();

  const buyPlan = async () => {
    await API.put("company/UpgradePlan", { planid: data.planId, plantype: data.planType });
    history.push("/home");
  };

  return (
    <S.CardWrapper>
      <S.Text color={color.primary} weight="500" size="1.4rem">
        {data.title}
      </S.Text>
      <S.Text>{data.line1}</S.Text>
      <S.Text>{data.line2}</S.Text>
      <S.Text weight="500" line>
        {data.line3}
      </S.Text>
      <S.Text>{data.line4}</S.Text>
      <S.PriceText>{data.cost}</S.PriceText>
      {data.validity && <S.Text weight="500">{data.validity}</S.Text>}
      <S.Button onClick={() => buyPlan()}>BUY NOW</S.Button>
    </S.CardWrapper>
  );
};

export default PlanCard;
