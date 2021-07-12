import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";

function ProductWiseSalesReport() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get(
      "report/ProductwiseSalesReport?startDate=2021-06-02&endDate=2021-07-02"
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
              <S.TableHeader>Product Name</S.TableHeader>
              <S.TableHeader>Product Sales Quantity</S.TableHeader>
              <S.TableHeader>Product Sales Amount</S.TableHeader>
              <S.TableHeader>Salesperson Name</S.TableHeader>
              <S.TableHeader>Sales Quantity</S.TableHeader>
              <S.TableHeader>Sales Amount</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) =>
                e.salesperson.map((salesPerson, index) => (
                  <S.TableRow>
                    <S.TableData>
                      <span>
                        <img
                          src={e.image}
                          height="20"
                          width="20"
                          style={{ marginRight: "6px" }}
                        />
                        {e.productName}
                      </span>
                    </S.TableData>
                    <S.TableData>{e.salesQuantity}</S.TableData>
                    <S.TableData>{e.salesAmount}</S.TableData>
                    <S.TableData>
                      <span>
                        <img
                          src={salesPerson.image}
                          height="20"
                          width="20"
                          style={{ marginRight: "6px" }}
                        />
                        {salesPerson.salespersonName}
                      </span>
                    </S.TableData>
                    <S.TableData>{salesPerson.salesQuantity}</S.TableData>
                    <S.TableData>{salesPerson.salesAmount}</S.TableData>
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

export default ProductWiseSalesReport;