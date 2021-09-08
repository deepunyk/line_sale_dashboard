import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as S from "../reports/ReportStyled";
import API from "../../../utils/Api";
import Loader from "../../common/loader";
import dateFormat from "dateformat";

const RetailerBill = () => {
  const location = useLocation();

  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    let retailerId = location.state.id;
    let response = await API.get(`RetailerBill/RetailerBillAll?retailerId=${retailerId}`, { headers: { Token: localStorage.getItem("token") } });
    console.log(response);
    setdata(response.data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    getData();
  }, []);

  // noinspection JSUnresolvedVariable
  return (
    <S.Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <S.TableWrapper style={{ marginTop: "20px" }}>
          <S.Table>
            <S.TableRow>
              <S.TableHeader>Bill Number</S.TableHeader>
              <S.TableHeader>Product Name</S.TableHeader>
              <S.TableHeader>Bill Date</S.TableHeader>
              <S.TableHeader>Start Date</S.TableHeader>
              <S.TableHeader>End Date</S.TableHeader>
            </S.TableRow>
            <S.TableBody>
              {data.map((e) => (
                <S.TableRow key={e.id}>
                  <S.TableData>{e.billNo}</S.TableData>
                  <S.TableData>{e.productName}</S.TableData>
                  <S.TableData>{dateFormat(e.billDate, "dd-mm-yyyy")}</S.TableData>
                  <S.TableData>{dateFormat(e.startDate, "dd-mm-yyyy")}</S.TableData>
                  <S.TableData>{dateFormat(e.endDate, "dd-mm-yyyy")}</S.TableData>
                </S.TableRow>
              ))}
            </S.TableBody>
          </S.Table>
        </S.TableWrapper>
      )}
    </S.Wrapper>
  );
};

export default RetailerBill;
