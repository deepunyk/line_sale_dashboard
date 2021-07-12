import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";

function SalesPersonWiseOutstandingReport() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get(
      "report/SalespersonwiseOutstandingReport?startDate=2021-06-02&endDate=2021-07-02"
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
              <S.TableHeader>Sales Person Name</S.TableHeader>
              <S.TableHeader>Balance Amount</S.TableHeader>
              <S.TableHeader>Product Name</S.TableHeader>
              <S.TableHeader>Product Balance Amount</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) =>
                e.products.map((product, index) => (
                  <S.TableRow>
                    <S.TableData>
                      <span>
                        <img
                          src={e.image}
                          height="20"
                          width="20"
                          style={{ marginRight: "6px" }}
                        />
                        {e.salespersonName}
                      </span>
                    </S.TableData>
                    <S.TableData>{e.balanceAmount}</S.TableData>
                    <S.TableData>
                      <span>
                        <img
                          src={product.image}
                          height="20"
                          width="20"
                          style={{ marginRight: "6px" }}
                        />
                        {product.productName}
                      </span>
                    </S.TableData>
                    <S.TableData>{product.balanceAmount}</S.TableData>
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

export default SalesPersonWiseOutstandingReport;