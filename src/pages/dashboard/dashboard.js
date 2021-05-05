import React from 'react';
import * as S from './DashboardStyled';
import Header from '../../components/dashboard/header/Header';
import Navbar from '../../components/dashboard/navBar/Navbar';

const DashboardPage = () => {

    return (
        <>
            <Header/>
            <S.Wrapper>
                <Navbar/>
            </S.Wrapper>
        </>
    );
}

export default DashboardPage;