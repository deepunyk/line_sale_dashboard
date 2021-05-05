import React from 'react';
import * as S from './NavbarStyled';

const Navbar = ()=>{
    return (
        <S.Wrapper>
            <S.Head>PLANS</S.Head>
            <S.SubHead>Upgrade / New Plan</S.SubHead>
            <S.SubHead>Renew Existing Plan</S.SubHead>
            <S.Head>REPORTS</S.Head>
            <S.SubHead>Total Collection</S.SubHead>
            <S.SubHead>Daily Sales</S.SubHead>
            <S.SubHead>Sales-person wise Report</S.SubHead>
            <S.SubHead>Product wise</S.SubHead>
            <S.SubHead>Retailer wise Sales</S.SubHead>
            <S.SubHead>Retailer wise outstanding</S.SubHead>
            <S.SubHead>Sales-person wise outstanding</S.SubHead>
            <S.SubHead>Product wise outstanding</S.SubHead>
            <S.SubHead>Stock</S.SubHead>
            <S.SubHead>Sales-person wise Ledger</S.SubHead>
        </S.Wrapper>
    );
}

export default Navbar;