import React from 'react';
import * as S from './HeaderStyled';
import AuthButton from '../../../common/buttons/AuthButton';

const Header = ()=>{
    return (
        <S.Wrapper>
            <S.LineHead>
                LINE SALE
            </S.LineHead>
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
                    First time user?
                </S.Text>
                <AuthButton>
                    Register
                </AuthButton>
            </S.Menu>
        </S.Wrapper>
    );
}

export default Header;