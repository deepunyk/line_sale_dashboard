import React from 'react';
import * as S from './LayerTwoStyled';
import viLogo from '../../../../assets/icons/viLogo.png';

const SaleList = ()=>{

    const listData= Array(20).fill({
        "icon":viLogo,
        "title": "Ezee Default",
        "price": "4,95,25,312",
    });

    
    return (
        <S.SaleWrapper>
            {
                listData.map((d)=>{
                    return <S.SaleItemWrapper>
                        <S.Image src = {d.icon} marginRight = "1vw" ></S.Image>
                        <S.Text fontSize = '1rem' marginRight = 'auto' lightFont>{d.title}</S.Text>
                        <S.Text fontSize = '1rem' lightFont>₹{d.price}</S.Text>
                    </S.SaleItemWrapper>
                })
            }

        </S.SaleWrapper>
    )
};

export default SaleList;