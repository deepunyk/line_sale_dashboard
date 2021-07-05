import React, { useState } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";

function TotalCollection() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
      </S.Row>
      <S.TableWrapper>
        <S.Table>
          <S.TableRow>
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
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((e) => (
              <S.TableRow>
                <S.TableData>Tata Sky</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
                <S.TableData>10.0</S.TableData>
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </S.TableWrapper>
    </S.Wrapper>
  );
}

export default TotalCollection;
