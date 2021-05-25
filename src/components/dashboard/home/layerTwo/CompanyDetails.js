import React from 'react';
import * as S from './LayerTwoStyled';
import RetailerImg from '../../../../assets/icons/retailer.svg';
import SalespersonImg from '../../../../assets/icons/salesperson.svg';
import ProductImg from '../../../../assets/icons/product.svg';
import color from '../../../../constants/color';

const CompanyDetails = () => {

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

    return (
        <S.CompanyWrapper>
            {
                companyData.map((d) => {
                    return <S.CompanySubWrapper>
                        <S.Text lightFont fontSize='0.9rem'>{d.title}</S.Text>
                        <S.CompanyImageWrapper marginBottom="1.5vh" marginTop="1.5vh" width='50px' backgroundColor={d.color}>
                            <S.CompanyImage src={d.icon}></S.CompanyImage>
                        </S.CompanyImageWrapper>
                        <S.Text>{d.count}</S.Text>
                    </S.CompanySubWrapper>
                })
            }

        </S.CompanyWrapper>
    )
};

export default CompanyDetails;

