import React from 'react';
import Header from '../../components/auth/header/Header';
import AuthImg from '../../assets/illustrations/auth.png';
import * as S from './AuthStyled';
import SignIn from '../../components/auth/signIn/SignIn';

const AuthPage = () => {
    return (
        <div>
            <Header />
            <S.Wrapper>
            <S.Image src = {AuthImg}/>
            <SignIn/>
            </S.Wrapper>
        </div>
    );
}

export default AuthPage;