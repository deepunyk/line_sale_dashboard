import React from 'react';
import * as S from './SignInStyled';
import LockImg from '../../../assets/icons/lock.png';
import AuthButton from '../../../common/buttons/AuthButton'

const SignIn = () => {
    return (
        <S.Wrapper>
            <S.Head>SIGN IN</S.Head>
            <S.SubHeadWrapper marginBottom = "1vh">
                <S.SubHeadWrapper isStart isCompact >
                    <S.Circle primary />
                    <S.SubHead primary>Email ID</S.SubHead>
                </S.SubHeadWrapper>
                <S.SubHeadWrapper isStart isCompact>
                    <S.Circle />
                    <S.SubHead >Mobile No.</S.SubHead>
                </S.SubHeadWrapper>
            </S.SubHeadWrapper>
            <S.InputField placeholder = "Enter your Email ID" bottomMargin = '3vh'/>
            <S.SubHeadWrapper isStart>
            <S.Image src = {LockImg} />

            <S.SubHead primary>Password</S.SubHead>
            </S.SubHeadWrapper>

            <S.InputField placeholder = "Enter your Password" bottomMargin = '1vh'/>
            <S.SubHead>Forgot Password?</S.SubHead>

            <AuthButton>
                    SIGN IN
                </AuthButton>

        </S.Wrapper>
    );
}

export default SignIn;