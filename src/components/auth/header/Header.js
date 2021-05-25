import React from 'react';
import * as S from './HeaderStyled';
import * as C from '../../common/common';
import {  useHistory  } from 'react-router-dom';
import Logo from '../../../assets/illustrations/logo.png';

const Header = (props) => {
    let history = useHistory();
    
    const navigatePage = ()=>{
        if (props.type === "register") {
            history.push('/')

        }else{
            history.push('/register')
        }
    }

    const getRegisterText = () => props.type === "register"?'Already Registered?':'First time user?';
    
    const getButtonText = () => props.type === "register"?'Sign In':'Register';


    return (
        <S.Wrapper>
            <S.SubWrapper>
                <S.Image src = {Logo} height = '80px' marginRight='15px'/>
                <C.LineHead>Line Sale</C.LineHead>
            </S.SubWrapper>
            <S.Menu>
                <S.MenuItem onClick = {()=>history.push('/')}>
                    Home
                </S.MenuItem>
                <S.MenuItem>
                    About Line Sale
                </S.MenuItem>
                <S.MenuItem>
                    User Guide
                </S.MenuItem>
                <S.MenuItem onClick = {()=>history.push('/plans')}>
                    Pricing
                </S.MenuItem>
                <S.MenuItem>
                    FAQ
                </S.MenuItem>
                <S.MenuItem>
                    Contact
                </S.MenuItem>
            </S.Menu>
        </S.Wrapper>
    );
}

export default Header;