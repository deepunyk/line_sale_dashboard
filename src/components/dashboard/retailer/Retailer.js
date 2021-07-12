import React, { useState, useEffect } from "react";
import * as S from "../reports/ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";

const Retailer = () => {
  const [data, setdata] = useState(null);

  const getData = async () => {
    let response = await API.get("retailer/RetailerListWithBalance");
    setdata(response.data.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper>
      {data ? (
        <S.TableWrapper style={{ marginTop: "20px" }}>
          <S.Table>
            <S.TableRow>
              <S.TableHeader>Retailer Name</S.TableHeader>
              <S.TableHeader>Mobile Number</S.TableHeader>
              <S.TableHeader>Total Transactions</S.TableHeader>
              <S.TableHeader>Closing Balance</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) => (
                <S.TableRow>
                  <S.TableData>{e.retailerName}</S.TableData>
                  <S.TableData>{e.mobileNumber}</S.TableData>
                  <S.TableData>{e.totalTransactions}</S.TableData>
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
};

export default Retailer;
