import React from 'react';
import * as S from './LayerOneStyled';
import PurchaseImg from '../../../assets/icons/purchase.svg';
import SalesImg from '../../../assets/icons/sales.svg';
import color from '../../../constants/color';

const LayerOne = (props)=>{

    const getSection = ()=>{
        return (
            <>
                <S.Wrapper>
                    <S.Image src = {SalesImg}/>
                    <S.Text fontSize = '1rem' color = {color.brownShade4} marginBottom = "10px" marginTop = "20px">1,44,70,380.00</S.Text>
                    <S.Text color = {color.greyShade3} fontSize = "1.2rem">Sales</S.Text>
                </S.Wrapper>
            </>
        );
    }

    return (
        <S.Wrapper>
            <S.Text color= {color.primary} fontSize = '1.3rem' marginBottom = "20px">MONTH</S.Text>
            <S.SubWrapper isCenter>
                {getSection()}
                {getSection()}

            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default LayerOne;