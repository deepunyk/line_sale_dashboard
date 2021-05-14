import React from 'react';
import * as S from './PlansStyled';

const PlanCard= ()=>{
    return(
        <S.CardWrapper>
            <S.PriceText>₹499</S.PriceText>
            <S.Text color='white' size='1.65vw' weight='500'>for 1 month</S.Text>
            <S.Divider/>
            <S.Text color='white' size='1.65vw' weight='500'>Inc. all Taxes</S.Text>
            <S.Button>BUY NOW</S.Button>
        </S.CardWrapper>
    );
}

export default PlanCard;