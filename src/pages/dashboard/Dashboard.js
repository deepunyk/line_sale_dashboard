import React, { useState } from "react";
import * as S from "./DashboardStyled";
import Header from "../../components/dashboard/header/Header";
import Navbar from "../../components/dashboard/navBar/Navbar";
import Home from "../../components/dashboard/home/Home";
import PlansPage from "../plans/Plans";

import Footer from "../../components/footer/Footer";
import TotalCollection from "../../components/dashboard/reports/TotalCollection";

const DashboardPage = (props) => {
  const [page, setPage] = useState(0);

  const pages = [<Home />, <TotalCollection />];

  const updatePage = (e) => {
    setPage(e);
  };

  const getSection = () => {
    if (props.type === "plan") {
      return <PlansPage />;
    } else {
      return (
        <S.SubWrapper>
          <Navbar updateIndex={updatePage} />
          {pages[page]}
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
