import React from 'react';
import Header from '../../components/auth/header/Header';
import AuthImg from '../../assets/illustrations/auth.png';
import * as S from './AuthStyled';
import SignIn from '../../components/auth/signIn/SignIn';
import SignUp from '../../components/auth/signUp/SignUp';
import Footer from '../../components/footer/Footer';

const AuthPage = (props) => {


    const getType = ()=>{
        if(props.isRegister){
            return <SignUp />;
        }else{
            return <SignIn />;
        }
    }

    return (
        <div>
            <Header isRegister = {props.isRegister} />
            <S.Wrapper >
                <S.Image src={AuthImg} isRegister = {props.isRegister}/>
                {getType()}
            </S.Wrapper>
            <Footer/>

        </div>
    );
}

export default AuthPage;