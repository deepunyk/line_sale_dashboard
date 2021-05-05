import React, { useState } from 'react';
import * as S from './SignInStyled';
import LockImg from '../../../assets/icons/lock.png';
import * as C from '../../common/common';

const SignIn = () => {

    const [isEmail, updateEmail] = useState(true);

    const getForm = ()=>{
        if(isEmail){
            return (
                <>
                <S.InputField placeholder = "Enter your Email ID" bottomMargin = '3vh'/>
                <S.SubHeadWrapper isStart>
                <S.Image src = {LockImg} />
    
                <S.SubHead primary>Password</S.SubHead>
                </S.SubHeadWrapper>
    
                <S.InputField placeholder = "Enter your Password" bottomMargin = '1vh'/>
                <S.SubHead>Forgot Password?</S.SubHead>

                </>
            );
        }else{
            return (
                <>
                <S.InputField placeholder = "Enter your Mobile No." bottomMargin = '3vh'/>
                <S.SubHeadWrapper isStart>
                <S.Image src = {LockImg} />
    
                <S.SubHead primary>OTP</S.SubHead>
                </S.SubHeadWrapper>
    
                <S.InputField placeholder = "Enter your OTP" bottomMargin = '4vh'/>
                </>
            );
        }

    }

    return (
        <S.Wrapper>
            <S.Head>SIGN IN</S.Head>
            <S.SubHeadWrapper marginBottom = "1vh">
                <S.SubHeadWrapper isStart isCompact onClick = {()=>updateEmail(true)}>
                    <S.Circle primary  = {isEmail}/>
                    <S.SubHead primary  = {isEmail}>Email ID</S.SubHead>
                </S.SubHeadWrapper>
                <S.SubHeadWrapper isStart isCompact onClick = {()=>updateEmail(false)}>
                    <S.Circle primary  = {!isEmail}/>
                    <S.SubHead primary  = {!isEmail}>Mobile No.</S.SubHead>
                </S.SubHeadWrapper>
            </S.SubHeadWrapper>
                {getForm()}
            <C.AuthButton>
                    SIGN IN
            </C.AuthButton>
        </S.Wrapper>
    );
}

export default SignIn;