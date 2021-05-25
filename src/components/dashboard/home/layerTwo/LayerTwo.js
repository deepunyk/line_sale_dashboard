import React from 'react';
import * as S from './LayerTwoStyled';
import color from '../../../../constants/color';
import CompanyDetails from './CompanyDetails';
import SalesChart from './SalesChart';
import SalesList from './SalesList';

const LayerTwo = (props)=>{

    const getSections = ()=>{
        if(props.type === 2){
            return SalesList();
        }else{
            return SalesChart();
        }
    }

    return (
        <S.Wrapper area = {props.area}>
            <S.Text spacing fontSize = '1.1rem' marginBottom = "0">{props.title}</S.Text>
                {getSections()}
        </S.Wrapper>
    );
}

export default LayerTwo;