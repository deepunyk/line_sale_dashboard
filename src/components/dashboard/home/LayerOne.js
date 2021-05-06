import React from 'react';
import * as S from './LayerOneStyled';
import color from '../../../constants/color';

const LayerOne = (props)=>{

    const getSection = (icon, price, subTitle)=>{
        return (
            <>
                <S.Wrapper>
                    <S.Image src = {icon}/>
                    <S.Text fontSize = '1rem' color = {color.brownShade4} marginBottom = "10px" marginTop = "20px">₹{price}</S.Text>
                    <S.Text color = {color.greyShade3} fontSize = "1.2rem" lightFont>{subTitle}</S.Text>
                </S.Wrapper>
            </>
        );
    }

    return (
        <S.Wrapper isCenter>
            <S.Text color= {color.primary} fontSize = '1.3rem' marginBottom = "20px">{props.data.title}</S.Text>
            <S.SubWrapper isCenter>
                {getSection(props.data.iconOne, props.data.priceOne, props.data.subTitleOne)}
                {getSection(props.data.iconTwo, props.data.priceTwo, props.data.subTitleTwo)}

            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default LayerOne;