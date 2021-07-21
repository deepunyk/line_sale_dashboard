import React, { useState, useEffect } from "react";
import * as S from "./DashboardStyled";
import Header from "../../components/dashboard/header/Header";
import Navbar from "../../components/dashboard/navBar/Navbar";
import Home from "../../components/dashboard/home/Home";
import PlansPage from "../plans/Plans";

import Footer from "../../components/footer/Footer";
import TotalCollection from "../../components/dashboard/reports/TotalCollection";
import DailySales from "../../components/dashboard/reports/DailySales";
import SalesPersonWiseReport from "../../components/dashboard/reports/SalesPersonWiseReport";
import ProductWiseSalesReport from "../../components/dashboard/reports/ProductWiseSalesReport";
import RetailerWiseSalesReport from "../../components/dashboard/reports/RetailerWiseSalesReport";
import RetailerWiseOutstandingReport from "../../components/dashboard/reports/RetailerWiseOutstandingReport";
import SalesPersonWiseOutstandingReport from "../../components/dashboard/reports/SalesPersonWiseOutstandingReport";
import ProductWiseOutstandingReport from "../../components/dashboard/reports/ProductWiseOutstandingReport";
import StockReport from "../../components/dashboard/reports/StockReport";
import SalesPersonWiseLedger from "../../components/dashboard/reports/SalesPersonWiseLedger";
import Retailer from "../../components/dashboard/retailer/Retailer";
import RetailerBill from "../../components/dashboard/retailer/RetailerBill";

const DashboardPage = (props) => {
  const pages = [
    <Home />,
    <TotalCollection />,
    <DailySales />,
    <SalesPersonWiseReport />,
    <ProductWiseSalesReport />,
    <RetailerWiseSalesReport />,
    <RetailerWiseOutstandingReport />,
    <SalesPersonWiseOutstandingReport />,
    <ProductWiseOutstandingReport />,
    <StockReport />,
    <SalesPersonWiseLedger />,
    <Retailer />,
    <RetailerBill />,
  ];

  const getSection = () => {
    if (props.type === "plan") {
      return <PlansPage />;
    } else {
      return (
        <S.SubWrapper>
          <Navbar />
          {pages[props.index]}
        </S.SubWrapper>
      );
    }
  };

  return (
    <S.Wrapper>
      <Header />
      {getSection()}
      <Footer />
    </S.Wrapper>
  );
};

export default DashboardPage;
