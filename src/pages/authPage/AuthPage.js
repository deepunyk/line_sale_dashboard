import React from 'react';
import Header from '../../components/auth/header/Header';
import AuthImg from '../../assets/illustrations/auth.png';
import * as S from './AuthStyled';
import SignIn from '../../components/auth/signIn/SignIn';
import SignUp from '../../components/auth/signUp/SignUp';

const AuthPage = () => {
    return (
        <div>
            <Header />
            <S.Wrapper>
            <S.Image src = {AuthImg}/>
            <SignUp/>
            </S.Wrapper>
        </div>
    );
}

export default AuthPage;