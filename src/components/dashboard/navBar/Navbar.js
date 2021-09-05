import React, { useState } from "react";
import * as S from "./NavbarStyled";
// noinspection ES6CheckImport
import { useHistory } from "react-router-dom";
import ChangePasswordModal from "../changePassword/ChangePassword";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let history = useHistory();

  const [state, setState] = React.useState({
    isSelected: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  });

  return (
    <S.Wrapper>
      <S.Head>USERS</S.Head>
      <S.SubHead
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/plans");
        }}
      >
        Upgrade Plan
      </S.SubHead>
      <S.SubHead>Renew Plan</S.SubHead>
      <S.SubHead
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/retailer");
        }}
      >
        Retailer
      </S.SubHead>
      <S.SubHead onClick={() => setIsOpen(true)}>Change Password</S.SubHead>
      {/* <S.SubHead>Print Bill</S.SubHead> */}
      <S.Head>REPORTS</S.Head>
      <S.SubHead
        color={state.isSelected[0] ? "white" : ""}
        background={state.isSelected[0] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/total-collection");
        }}
      >
        Total Collection
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[1] ? "white" : ""}
        background={state.isSelected[1] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/daily-sales");
        }}
      >
        Daily Sales
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[2] ? "white" : ""}
        background={state.isSelected[2] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/stock-report");
        }}
      >
        Stock
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[3] ? "white" : ""}
        background={state.isSelected[3] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/sales-person-wise-report");
        }}
      >
        Sales-person-wise Sales
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[4] ? "white" : ""}
        background={state.isSelected[4] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/product-wise-sales-report");
        }}
      >
        Product-wise Sales
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[5] ? "white" : ""}
        background={state.isSelected[5] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              true,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/retailer-wise-sales-report");
        }}
      >
        Retailer-wise Sales
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[6] ? "white" : ""}
        background={state.isSelected[6] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              true,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/sales-person-wise-outstanding-report");
        }}
      >
        Sales-person wise outstanding
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[7] ? "white" : ""}
        background={state.isSelected[7] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/product-wise-outstanding-report");
        }}
      >
        Product wise outstanding
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[8] ? "white" : ""}
        background={state.isSelected[8] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              true,
              false,
              false,
              false,
              false,
              false,
              false,
            ],
          });
          return history.push("/home/retailer-wise-outstanding-report");
        }}
      >
        Retailer wise outstanding
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[9] ? "white" : ""}
        background={state.isSelected[9] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
              false,
              false,
            ],
          });
          return history.push("/home/sales-person-wise-ledger");
        }}
      >
        Sales-person wise Ledger
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[10] ? "white" : ""}
        background={state.isSelected[10] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
              false,
            ],
          });
          return history.push("/home/sales-person-wise-ledger");
        }}
      >
        Non Active Retailers
      </S.SubHead>
      <S.SubHead
        color={state.isSelected[11] ? "white" : ""}
        background={state.isSelected[11] ? "#fd0167" : ""}
        onClick={() => {
          setState({
            ...state,
            isSelected: [
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
            ],
          });
          return history.push("/home/sales-person-wise-ledger");
        }}
      >
        Retailers Sales comparision
      </S.SubHead>
      <ChangePasswordModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </S.Wrapper>
  );
};

export default Navbar;
