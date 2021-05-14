import React from 'react';
import * as S from './DashboardStyled';
import Header from '../../components/dashboard/header/Header';
import Navbar from '../../components/dashboard/navBar/Navbar';
import Home from '../../components/dashboard/home/Home';
import PlansPage from '../../pages/plans/Plans';

import Footer from '../../components/footer/Footer';

const DashboardPage = (props) => {


    const getSection = ()=>{
        if(props.type === "plan"){
            return (
                <PlansPage/>
            );
        }else{
            return(
                <S.SubWrapper>
                <Navbar/>
                <Home/>
            </S.SubWrapper>
            );
        }
    }

    return (
        <S.Wrapper>
            <Header/>
                {getSection()}
            <Footer/>

        </S.Wrapper>
    );
}

export default DashboardPage;