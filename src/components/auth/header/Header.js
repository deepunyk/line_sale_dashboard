import React from 'react';
import * as S from './HeaderStyled';
import * as C from '../../common/common';
import {  useHistory  } from 'react-router-dom';

const Header = (props) => {
    let history = useHistory();
    
    const navigatePage = ()=>{
        if (props.isRegister) {
            history.push('/')

        }else{
            history.push('/register')
        }
    }

    const getRegisterText = () => props.isRegister?'Already Registered?':'First time user?';
    
    const getButtonText = () => props.isRegister?'Sign In':'Register';


    return (
        <S.Wrapper>
            <C.LineHead>
                LINE SALE
            </C.LineHead>
            <S.Menu>
                <S.MenuItem>
                    Home
                </S.MenuItem>
                <S.MenuItem>
                    About Line Sale
                </S.MenuItem>
                <S.MenuItem>
                    User Guide
                </S.MenuItem>
                <S.MenuItem>
                    FAQ
                </S.MenuItem>
                <S.MenuItem>
                    Contact
                </S.MenuItem>
                <S.Text>
                        {getRegisterText()}
                </S.Text>
                    <C.AuthButton onClick = {navigatePage}>
                        {getButtonText()}
                </C.AuthButton>
            </S.Menu>
        </S.Wrapper>
    );
}

export default Header;