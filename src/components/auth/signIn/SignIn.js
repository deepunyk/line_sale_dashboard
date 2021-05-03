import React from 'react';
import * as S from './SignInStyled';

const SignIn = ()=> {
    return (
        <S.Wrapper>
            <S.Head>SIGN IN</S.Head>
            <S.SubHead primary>Email ID</S.SubHead>
            <S.SubHead>Mobile No.</S.SubHead>

        </S.Wrapper>
    );
}

export default SignIn;