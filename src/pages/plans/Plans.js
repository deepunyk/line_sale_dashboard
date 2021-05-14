import React from 'react';
import * as S from './PlansStyled';
import color from '../../constants/color';
import PlanCard from './PlanCard';


const PlansPage = () => {

    return (
        <>
            <S.Wrapper>
                <S.TitleWrapper>
                    <S.Text color={color.grey} size='2.5rem' weight='500' marginRight='0.7rem'>Plans</S.Text>
                    <S.Text color={color.grey} size='2rem' weight='500' marginRight='0.7rem'>-</S.Text>
                    <S.Text color={color.primary} size='2rem' weight='500'>Line Sale</S.Text>
                </S.TitleWrapper>
                <S.PlanWrapper>
                    <PlanCard />
                    <PlanCard />
                    <PlanCard />
                </S.PlanWrapper>
                
            </S.Wrapper>

        </>
    );
}

export default PlansPage;