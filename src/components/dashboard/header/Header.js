import React from 'react';
import * as S from './HeaderStyled';
import Logo from '../../../assets/illustrations/logo.png';
import Dashboard from '../../../assets/icons/dashboard.svg';
import LogOut from '../../../assets/icons/log-out.png';
import color from '../../../constants/color';

import * as C from '../../common/common';

const Header = ()=>{
    return (
        <S.Wrapper>
            <S.SubWrapper>
                <S.Image src = {Logo} height = '80px' marginRight='15px'/>
                <C.LineHead>Line Sale</C.LineHead>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.Image src = {Dashboard } height = '20px' marginRight='10px'/>
                <S.Text fontSize = '1.4rem'>Dashboard</S.Text>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.Text fontSize = '1.2rem' >Subscription Expires in 04 days</S.Text>
            </S.SubWrapper>
            <S.Divider/>
            <S.SubWrapper>
                <S.RightWrapper alignEnd>
                    <S.Text fontSize = '1.1rem' color = {color.primary}>Welcome</S.Text>
                    <S.Text fontSize = '1rem'>CHRISTOPHER PETERSON</S.Text>

                </S.RightWrapper>
                <S.RightWrapper marginLeft>
                <S.Image src = {LogOut } height = '30px' marginBottom />

                    <S.Text fontSize = '0.9rem' >LOG OUT</S.Text>

                </S.RightWrapper>
            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default Header;