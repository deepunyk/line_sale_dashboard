import React, { useState } from 'react';
import * as S from './SignInStyled';
import LockImg from '../../../assets/icons/lock.png';
import * as C from '../../common/common';
import { useHistory } from 'react-router-dom';

const SignIn = () => {

    let history = useHistory();

    const [isEmail, updateEmail] = useState(true);

    const getForm = ()=>{
        if(isEmail){
            return (
                <>
                <S.InputField placeholder = "Enter your Email ID" bottomMargin = '20px'/>
                
                <S.SubHeadWrapper>
                <S.SubHeadWrapper isStart isCompact>

                <S.Image src = {LockImg} />
                <S.SubHead primary>Password</S.SubHead>
                </S.SubHeadWrapper>

                <S.SmallText>Forgot your password?</S.SmallText>


                </S.SubHeadWrapper>
    
                <S.InputField placeholder = "Enter your Password" bottomMargin = '20px'/>

                </>
            );
        }else{
            return (
                <>
                <S.InputField placeholder = "Enter your Mobile No." bottomMargin = '20px'/>
                <S.SubHeadWrapper isStart>
                <S.Image src = {LockImg} />
    
                <S.SubHead primary>OTP</S.SubHead>
                </S.SubHeadWrapper>
    
                <S.InputField placeholder = "Enter your OTP" bottomMargin = '20px'/>
                </>
            );
        }

    }

    return (
        <>
        <S.ActionWrapper>
                <S.Text>
                        First time user?
                </S.Text>
                    <C.HeaderButton onClick = {()=>history.push('/register')}>
                        Register
                </C.HeaderButton>
                </S.ActionWrapper>
        <S.Wrapper>
            
            <S.Head>Sign In</S.Head>
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
            <C.AuthButton onClick = {()=>history.push('/home')}>
                    Submit
            </C.AuthButton>
        </S.Wrapper>
        </>
    );
}

export default SignIn;