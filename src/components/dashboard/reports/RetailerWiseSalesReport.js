import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";

function RetailerWiseSalesReport() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get(
      "report/RetailerwiseSalesReport?startDate=2021-06-02&endDate=2021-07-02"
    );
    setdata(response.data.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper>
      <S.Row>
        <SelectDate
          label="From Date:"
          date={startDate}
          changeDate={(date) => setStartDate(date)}
        />
        <SelectDate
          label="To Date:"
          date={endDate}
          changeDate={(date) => setEndDate(date)}
        />
        <Dropdown label="Choose Product:" />
        <Dropdown label="Choose Sales Person:" />
        <S.Button>Download</S.Button>
      </S.Row>
      {data ? (
        <S.TableWrapper>
          <S.Table>
            <S.TableRow>
              <S.TableHeader>Retailer Name</S.TableHeader>
              <S.TableHeader>Retailer Sales Quantity</S.TableHeader>
              <S.TableHeader>Retailer Sales Amount</S.TableHeader>
              <S.TableHeader>Product Name</S.TableHeader>
              <S.TableHeader>Sales Quantity</S.TableHeader>
              <S.TableHeader>Sales Amount</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) =>
                e.sales.map((sale, index) => (
                  <S.TableRow>
                    <S.TableData>{e.retailerName}</S.TableData>
                    <S.TableData>{e.salesQuantity}</S.TableData>
                    <S.TableData>{e.salesAmount}</S.TableData>
                    <S.TableData>
                      <span>
                        <img
                          src={sale.image}
                          height="20"
                          width="20"
                          style={{ marginRight: "6px" }}
                        />
                        {sale.productName}
                      </span>
                    </S.TableData>
                    <S.TableData>{sale.salesQuantity}</S.TableData>
                    <S.TableData>{sale.salesAmount}</S.TableData>
                  </S.TableRow>
                ))
              )}
            </S.TableBody>
          </S.Table>
        </S.TableWrapper>
      ) : (
        <div />
      )}
    </S.Wrapper>
  );
}

export default RetailerWiseSalesReport;
