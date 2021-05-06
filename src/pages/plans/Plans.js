import React from 'react';
import * as S from './PlansStyled';
import color from '../../constants/color';
import PlanCard from './PlanCard';
import * as C from '../../components/common/common';

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
                <S.BottomWrapper>
                    <S.RegisterWrapper>
                        <S.Text color={color.greyShade1} size='1.4rem' weight='600' marginRight='0.7vw'>
                            REGISTER NOW
                        </S.Text>
                        <C.AuthButton>
                                    Sign Up
                        </C.AuthButton>
                    </S.RegisterWrapper>
                    <S.ContactWrapper>
                        <S.Text color={color.primary} size='2rem' weight='500' marginRight='0.7vw'>
                            Contact us for enquiries
                        </S.Text>
                        <S.Divider enquiry/>
                    </S.ContactWrapper>
                </S.BottomWrapper>
            </S.Wrapper>
        </>
    );
}

export default PlansPage;