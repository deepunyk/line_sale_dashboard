import React from 'react';
import * as S from './LayerTwoStyled';
import color from '../../../constants/color';
import viLogo from '../../../assets/icons/viLogo.png';
import RetailerImg from '../../../assets/icons/retailer.svg';
import SalespersonImg from '../../../assets/icons/salesperson.svg';
import ProductImg from '../../../assets/icons/product.svg';

const LayerTwo = (props)=>{

    const listData= Array(20).fill({
        "icon":viLogo,
        "title": "Ezee Default",
        "price": "4,95,25,312",
    });

    const companyData = [
        {
            "title": "Retailers",
            "icon":RetailerImg,
            "count" : "273",
            "color": color.darkBlue,
        },
        {
            "title": "Salesperson",
            "icon":SalespersonImg,
            "count" : "7",
            "color": color.lightPink,

        },
        {
            "title": "Products",
            "icon":ProductImg,
            "count" : "4",
            "color": color.green,

        },
    ];

    const SaleListDetails = ()=>{
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

    const CompanyDetails = ()=>{
        return (
            <S.CompanyWrapper>
                {
                    companyData.map((d)=>{
                        return                 <S.CompanySubWrapper>
                        <S.Text lightFont fontSize = '0.9rem'>{d.title}</S.Text>
                        <S.CompanyImageWrapper  marginBottom = "1.5vh"  marginTop = "1.5vh" width = '4.5vw' backgroundColor = {d.color}>
                            <S.CompanyImage src = {d.icon}></S.CompanyImage>
                            </S.CompanyImageWrapper>
                        <S.Text>{d.count}</S.Text>
                    </S.CompanySubWrapper>
                    })
                }

            </S.CompanyWrapper>
        )
    };

    const getSections = ()=>{
        if(props.type == 3){
            return CompanyDetails();
        }else{
            return SaleListDetails();
        }
    }

    return (
        <S.Wrapper>
            <S.Text color= {color.primary} fontSize = '1.3rem' marginBottom = "0">{props.title}</S.Text>
                
                {getSections()}
        </S.Wrapper>
    );
}

export default LayerTwo;