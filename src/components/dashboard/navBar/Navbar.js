import React from "react";
import * as S from "./NavbarStyled";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  let history = useHistory();

  return (
    <S.Wrapper>
      <S.Head>USERS</S.Head>
      <S.SubHead onClick={() => history.push("/home/plans")}>Upgrade Plan</S.SubHead>
      <S.SubHead>Renew Plan</S.SubHead>
      <S.SubHead>Retailer</S.SubHead>
      <S.SubHead>Change Password</S.SubHead>
      <S.SubHead>Print Bill</S.SubHead>
      <S.Head>REPORTS</S.Head>
      <S.SubHead onClick={() => history.push("/home/total-collection")}>Total Collection</S.SubHead>
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
};

export default Navbar;
