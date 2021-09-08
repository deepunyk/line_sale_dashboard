import React from 'react';
import * as S from './PlansStyled';
import PlanCard from './PlanCard';
import PlanContent from '../../constants/PlanContent';


const PlansPage = () => {

    return (
        <>
            <S.Wrapper>
                <S.TitleWrapper>
                    <S.Text size='1.8rem' weight='500'>Monthly Plans</S.Text>
                </S.TitleWrapper>
                <S.PlanWrapper marginBottom='50px'>
                    {PlanContent.monthly.map(e => <PlanCard data={e}/>)}
                </S.PlanWrapper>
                <S.TitleWrapper>
                    <S.Text size='1.8rem' weight='500'>Yearly Plans</S.Text>
                </S.TitleWrapper>
                <S.PlanWrapper>
                    {PlanContent.yearly.map(e => <PlanCard data={e}/>)}


                </S.PlanWrapper>
            </S.Wrapper>

        </>
    );
}

export default PlansPage;