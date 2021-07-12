import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";

function TotalCollection() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get("report/TotalCollectionReport?startDate=2021-06-02&endDate=2021-07-02");
    setdata(response.data.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper>
      <S.Row>
        <SelectDate label="From Date:" date={startDate} changeDate={(date) => setStartDate(date)} />
        <SelectDate label="To Date:" date={endDate} changeDate={(date) => setEndDate(date)} />
        <Dropdown label="Choose Product:" />
        <Dropdown label="Choose Sales Person:" />
        <S.Button>Download</S.Button>
      </S.Row>
      {data ? (
        <S.TableWrapper>
          <S.Table>
            <S.TableRow>
              <S.TableHeader>Name</S.TableHeader>
              <S.TableHeader>Product Name</S.TableHeader>
              <S.TableHeader>Previous Pending</S.TableHeader>
              <S.TableHeader>Sales</S.TableHeader>
              <S.TableHeader>Cash Collection</S.TableHeader>
              <S.TableHeader>Bank Collection</S.TableHeader>
              <S.TableHeader>Total Collection</S.TableHeader>
              <S.TableHeader>Net Pending</S.TableHeader>
              <S.TableHeader>Open Quantity</S.TableHeader>
              <S.TableHeader>Transfer Quantity</S.TableHeader>
              <S.TableHeader>Sales Quantity</S.TableHeader>
              <S.TableHeader>Closing Quantity</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) =>
                e.collection.map((collection, index) => (
                  <S.TableRow>
                    <S.TableData >{e.salespersonName}</S.TableData>
                    <S.TableData>
                      <span>
                        <img src={collection.image} height="20" width="20" style={{ marginRight: "6px" }} />
                        Tata Sky
                      </span>
                    </S.TableData>
                    <S.TableData>{collection.previousPending}</S.TableData>
                    <S.TableData>{collection.sales}</S.TableData>
                    <S.TableData>{collection.cashCollection}</S.TableData>
                    <S.TableData>{collection.bankCollection}</S.TableData>
                    <S.TableData>{collection.totalCollection}</S.TableData>
                    <S.TableData>{collection.netPending}</S.TableData>
                    <S.TableData>{collection.openingQuantity}</S.TableData>
                    <S.TableData>{collection.transferQuantity}</S.TableData>
                    <S.TableData>{collection.salesQuantity}</S.TableData>
                    <S.TableData>{collection.closingQuantity}</S.TableData>
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

export default TotalCollection;
