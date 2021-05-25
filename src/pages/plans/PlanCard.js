import React from 'react';
import * as S from './PlansStyled';

const PlanCard= ()=>{
    return(
        <S.CardWrapper>
            <S.PriceText>Cost - ₹499</S.PriceText>
            <S.Divider/>

            <S.Text color='black' size='1.1rem' weight='400' marginBottom='5px'>Duration - xx months</S.Text>
            <S.Text color='black' size='1.1rem' weight='400'>Full access</S.Text>
            <S.Button>BUY NOW</S.Button>
        </S.CardWrapper>
    );
}

export default PlanCard;