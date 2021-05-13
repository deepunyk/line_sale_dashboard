import React from 'react';
import * as S from './LayerTwoStyled';
import color from '../../../../constants/color';
import CompanyDetails from './CompanyDetails';
import SalesChart from './SalesChart';
import SalesList from './SalesList';

const LayerTwo = (props)=>{

    const getSections = ()=>{
        if(props.type === 3){
            return CompanyDetails();
        }else if(props.type === 2){
            return SalesList();
        }else{
            return SalesChart();
        }
    }

    return (
        <S.Wrapper>
            <S.Text spacing color= {color.primary} fontSize = '1.3rem' marginBottom = "0">{props.title}</S.Text>
                {getSections()}
        </S.Wrapper>
    );
}

export default LayerTwo;