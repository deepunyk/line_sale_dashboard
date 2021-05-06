import React from 'react';
import * as S from './HomeStyled';
import LayerOne from './LayerOne';
import SalesImg from '../../../assets/icons/sales.svg';
import PurchaseImg from '../../../assets/icons/purchase.svg';
import StockImg from '../../../assets/icons/stock.svg';
import OutstandingImg from '../../../assets/icons/outstanding.svg';
import SalesTwoImg from '../../../assets/icons/sales_two.svg';
import TransferImg from '../../../assets/icons/transfer.svg';
import LayerTwo from './layerTwo/LayerTwo';


const Home = () => {

    let layerOne = [
        {
            "title": "MONTH",
            "iconOne": SalesImg,
            "priceOne": "1,44,70,380.00",
            "subTitleOne": "Sales",
            "iconTwo": PurchaseImg,
            "priceTwo": "1,33,26,460.00",
            "subTitleTwo": "Purchase",
        },
        {
            "title": "PRESENT",
            "iconOne": StockImg,
            "priceOne": "1,44,70,380.00",
            "subTitleOne": "Stock",
            "iconTwo": OutstandingImg,
            "priceTwo": "1,33,26,460.00",
            "subTitleTwo": "Outstanding",
        },
        {
            "title": "TODAY",
            "iconOne": SalesTwoImg,
            "priceOne": "1,44,70,380.00",
            "subTitleOne": "Sales",
            "iconTwo": TransferImg,
            "priceTwo": "1,33,26,460.00",
            "subTitleTwo": "Transfer",
        },
    ];

    return (
        <S.Wrapper>
            <S.SubWrapper>
                <LayerOne data={layerOne[0]} />
                <S.Divider />
                <LayerOne data={layerOne[1]} />
                <S.Divider />
                <LayerOne data={layerOne[2]} />
            </S.SubWrapper>
            <S.HorizontalDivider />
            <S.SubWrapper big>
                <LayerTwo type = {1} title = 'WEEKLY SALES'/>
                <S.Divider />
                <LayerTwo  type = {2} title = 'WEEKLY SALES'/>
                <S.Divider />
                <LayerTwo type = {3} title = 'COMPANY DETAILS'/>

            </S.SubWrapper>
        </S.Wrapper>
    );
}

export default Home;