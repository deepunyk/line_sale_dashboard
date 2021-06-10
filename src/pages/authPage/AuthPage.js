import React from 'react';
import Header from '../../components/auth/header/Header';
import AuthImg from '../../assets/illustrations/auth.png';
import * as S from './AuthStyled';
import SignIn from '../../components/auth/signIn/SignIn';
import SignUp from '../../components/auth/signUp/SignUp';
import PlansPage from '../../pages/plans/Plans';

import Footer from '../../components/footer/Footer';

const AuthPage = (props) => {

    const getSection = ()=>{
        if(props.type == null){
            return <PlansPage />;
        }else{
            return getAuthType();
        }
    }

    const getAuthType = ()=>{

        const section = props.type === "register"?<SignUp/>:<SignIn/>;

        return(
            <S.Wrapper >
                <S.Image src={AuthImg} isRegister = {props.type === "register"}/>
                {section}
            </S.Wrapper>
        );
        
    }

    return (
        <div>
            <Header type = {props.type} />
            
                {getSection()}
            <Footer/>

        </div>
    );
}

export default AuthPage;