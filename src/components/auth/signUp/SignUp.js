import React from 'react';
import * as S from './SignUpStyled';
import * as C from '../../common/common';

const SignUp = ()=>{

    const marginRight = '8vw';

    return (<S.Wrapper>
            <S.Head>Create Your Account</S.Head>
            <S.SubWrapper>
                <S.SubHead>Name*</S.SubHead>
                <S.InputField placeholder = "Enter your First Name" marginRight = '2vw'/>
                <S.InputField placeholder = "Enter your Last Name"/>
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Company*</S.SubHead>
                <S.InputField placeholder = "Enter your Company Name" marginRight = {marginRight}/>
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Address</S.SubHead>
                <S.InputField placeholder = "Enter your Address" />
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Pin Code*</S.SubHead>
                <S.InputField placeholder = "Enter your Postal Pincode" marginRight = {marginRight}/>
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Mobile No*</S.SubHead>
                <S.InputField placeholder = "Enter your 10 digit mobile no." marginRight = {marginRight}/>
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Alternate No</S.SubHead>
                <S.InputField placeholder = "Enter another monbile no. [if any]" marginRight = {marginRight}/>
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Password*</S.SubHead>
                <S.InputField placeholder = "Enter your Password" marginRight = {marginRight}/>
            </S.SubWrapper>
            <S.SubWrapper>
                <S.SubHead>Confirm Password*</S.SubHead>
                <S.InputField placeholder = "Re-enter your Password" marginRight = {marginRight}/>
            </S.SubWrapper>
            <S.NoteText>Note:<br/>The password must contain min. 6 character, atleast 1 digit and atleast 1 special character. Example - LineSale@3</S.NoteText>
            <C.AuthButton>Submit</C.AuthButton>
            <S.InfoText>
                * - Mandatory Information
            </S.InfoText>
    </S.Wrapper>);
}

export default SignUp;