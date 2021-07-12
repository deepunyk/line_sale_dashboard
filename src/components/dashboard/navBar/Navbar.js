import React from "react";
import * as S from "./NavbarStyled";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  let history = useHistory();

  return (
    <S.Wrapper>
      <S.Head>USERS</S.Head>
      <S.SubHead onClick={() => history.push("/home/plans")}>
        Upgrade Plan
      </S.SubHead>
      <S.SubHead>Renew Plan</S.SubHead>
      <S.SubHead>Retailer</S.SubHead>
      <S.SubHead>Change Password</S.SubHead>
      <S.SubHead>Print Bill</S.SubHead>
      <S.Head>REPORTS</S.Head>
      <S.SubHead onClick={() => history.push("/home/total-collection")}>
        Total Collection
      </S.SubHead>
      <S.SubHead onClick={() => history.push("/home/daily-sales")}>
        Daily Sales
      </S.SubHead>
      <S.SubHead onClick={() => history.push("/home/sales-person-wise-report")}>
        Sales-person wise Report
      </S.SubHead>
      <S.SubHead
        onClick={() => history.push("/home/product-wise-sales-report")}
      >
        Product wise
      </S.SubHead>
      <S.SubHead
        onClick={() => history.push("/home/retailer-wise-sales-report")}
      >
        Retailer wise Sales
      </S.SubHead>
      <S.SubHead
        onClick={() => history.push("/home/retailer-wise-outstanding-report")}
      >
        Retailer wise outstanding
      </S.SubHead>
      <S.SubHead
        onClick={() =>
          history.push("/home/sales-person-wise-outstanding-report")
        }
      >
        Sales-person wise outstanding
      </S.SubHead>
      <S.SubHead
        onClick={() => history.push("/home/product-wise-outstanding-report")}
      >
        Product wise outstanding
      </S.SubHead>
      <S.SubHead onClick={() => history.push("/home/stock-report")}>
        Stock
      </S.SubHead>
      <S.SubHead onClick={() => history.push("/home/sales-person-wise-ledger")}>
        Sales-person wise Ledger
      </S.SubHead>
    </S.Wrapper>
  );
};

export default Navbar;
