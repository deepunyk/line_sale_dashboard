import React, { useEffect, useState } from "react";
import * as S from "./HomeStyled";
import LayerOne from "./LayerOne";
import SalesImg from "../../../assets/icons/sales.svg";
import PurchaseImg from "../../../assets/icons/purchase.svg";
import StockImg from "../../../assets/icons/stock.svg";
import OutstandingImg from "../../../assets/icons/outstanding.svg";
import SalesTwoImg from "../../../assets/icons/sales_two.svg";
import TransferImg from "../../../assets/icons/transfer.svg";
import LayerTwo from "./layerTwo/LayerTwo";
import API from "../../../utils/Api";
import RetailerImg from "../../../assets/icons/retailer.svg";
import SalespersonImg from "../../../assets/icons/salesperson.svg";
import ProductImg from "../../../assets/icons/product.svg";
import color from "../../../constants/color";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get("dashboard/Company", {
      headers: { Token: localStorage.getItem("token") },
    });
    response = response.data.data;
    let tempData = [
      {
        title: "MONTH",
        iconOne: SalesImg,
        priceOne: response.month.salesAmount,
        subTitleOne: "Sales",
        iconTwo: PurchaseImg,
        priceTwo: response.month.purchaseQuantity,
        subTitleTwo: "Purchase",
        area: "month",
      },
      {
        title: "PRESENT",
        iconOne: StockImg,
        priceOne: response.present.totalStock,
        subTitleOne: "Stock",
        iconTwo: OutstandingImg,
        priceTwo: response.present.balanceAmount,
        subTitleTwo: "Outstanding",
        area: "present",
      },
      {
        title: "TODAY",
        iconOne: SalesTwoImg,
        priceOne: response.today.salesAmount,
        subTitleOne: "Sales",
        iconTwo: TransferImg,
        priceTwo: response.today.transferQuantity,
        subTitleTwo: "Transfer",
        area: "today",
      },
      {
        title: "COMPANY DETAILS",
        data: [
          {
            title: "Retailers",
            icon: RetailerImg,
            count: response.company.totalRetailers,
            color: color.darkBlue,
          },
          {
            title: "Salesperson",
            icon: SalespersonImg,
            count: response.company.totalSalespersons,
            color: color.lightPink,
          },
          {
            title: "Products",
            icon: ProductImg,
            count: response.company.totalProducts,
            color: color.green,
          },
        ],
      },
      {
        data: response.weeklyGraph,
        title: "WEEKLY SALES",
        area: "chart",
      },
      {
        stock: response.stock,
        title: "PRESENT STOCK",
        area: "list",
      },
    ];
    setdata(tempData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data ? (
        <Container className={"w-100 h-100"}>
          <Row>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              <LayerOne data={data[0]} />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              <LayerOne data={data[1]} />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              <LayerOne data={data[2]} />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              <LayerOne data={data[3]} area={"details"} />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              <LayerTwo type={1} data={data[4]} />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              <LayerTwo type={2} data={data[5]} />
            </Col>
          </Row>
        </Container>
      ) : (
        // <S.Wrap  per>
        //   <LayerOne data={data[0]} />
        //   <LayerOne data={data[1]} />
        //   <LayerOne data={data[2]} />
        //   <LayerOne data={data[3]} area={"details"} />
        //   <LayerTwo type={1} data={data[4]} />
        //   <LayerTwo type={2} data={data[5]} />
        // </S.Wrapper>
        <div />
      )}
    </>
  );
};

export default Home;
