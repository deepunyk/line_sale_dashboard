import React from 'react';
import * as S from './DashboardStyled';
import Header from '../../components/dashboard/header/Header';
import Navbar from '../../components/dashboard/navBar/Navbar';
import Home from '../../components/dashboard/home/Home';

const DashboardPage = () => {

    return (
        <>
            <Header/>
            <S.Wrapper>
                <Navbar/>
                <Home/>
            </S.Wrapper>
        </>
    );
}

export default DashboardPage;