import React from 'react';
import * as S from './DashboardStyled';
import Header from '../../components/dashboard/header/Header';
import Navbar from '../../components/dashboard/navBar/Navbar';
import Home from '../../components/dashboard/home/Home';
import Footer from '../../components/footer/Footer';

const DashboardPage = () => {

    return (
        <S.Wrapper>
            <Header/>

            <S.SubWrapper>
                <Navbar/>
                <Home/>
            </S.SubWrapper>
            <Footer/>

        </S.Wrapper>
    );
}

export default DashboardPage;