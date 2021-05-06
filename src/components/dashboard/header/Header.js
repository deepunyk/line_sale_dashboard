import React from 'react';
import * as S from './HeaderStyled';
import Logo from '../../../assets/illustrations/logo.png';
import LightBulb from '../../../assets/icons/light-bulb.png';
import LogOut from '../../../assets/icons/log-out.png';
import color from '../../../constants/color';

import * as C from '../../common/common';

const Header = ()=>{
    return (
        <S.Wrapper>
            <S.SubWrapper>
                <S.Image src = {Logo} height = '12vh'/>
                <C.LineHead>LINE SALE</C.LineHead>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.Image src = {LightBulb } height = '8vh'/>
                <S.Text fontSize = '1.5rem' color = {color.brownShade1}>Dashboard</S.Text>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.Text fontSize = '1.2rem' color = {color.brownShade1}>Subscription Expires in</S.Text>
                <S.Text marginLeft fontSize = '1.4rem' color = {color.maroon} >04 days</S.Text>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.RightWrapper alignEnd>
                    <S.Text fontSize = '1.5rem' color = {color.primary}>Welcome</S.Text>
                    <S.Text fontSize = '1.2rem' color = {color.greyShade1} >CHRISTOPHER PETERSON</S.Text>

                </S.RightWrapper>
                <S.RightWrapper marginLeft>
                <S.Image src = {LogOut } height = '4vh' marginBottom />

                    <S.Text fontSize = '0.9rem' color = {color.brownShade1}>LOG OUT</S.Text>

                </S.RightWrapper>
            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default Header;