import React from 'react';
import * as S from './HomeStyled';
import LayerOne from './LayerOne';


const Home = () => {
    return (
        <S.Wrapper>
            <S.SubWrapper>
                <LayerOne />
                <S.Divider/>
                <LayerOne />
                <S.Divider/>

                <LayerOne />
            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default Home;