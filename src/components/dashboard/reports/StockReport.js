import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";

function StockReport() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get(
      "report/StockReport?startDate=2021-06-02&endDate=2021-07-02"
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
              <S.TableHeader>Opening Balance</S.TableHeader>
              <S.TableHeader>Purchase</S.TableHeader>
              <S.TableHeader>Transfer</S.TableHeader>
              <S.TableHeader>Closing Balance</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) => (
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
                  <S.TableData>{e.openingBalance}</S.TableData>
                  <S.TableData>{e.purchase}</S.TableData>
                  <S.TableData>{e.transfer}</S.TableData>
                  <S.TableData>{e.closingBalance}</S.TableData>
                </S.TableRow>
              ))}
            </S.TableBody>
          </S.Table>
        </S.TableWrapper>
      ) : (
        <div />
      )}
    </S.Wrapper>
  );
}

export default StockReport;
