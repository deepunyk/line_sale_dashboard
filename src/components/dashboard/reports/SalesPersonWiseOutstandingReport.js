import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";
import dateFormat from "dateformat";
import Loader from "../../common/loader";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./style.css";

function SalesPersonWiseOutstandingReport() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);
  const [productData, setProductData] = useState(null);
  const [salesPersonData, setSalesPersonData] = useState(null);
  const [prodIndex, setProdIndex] = useState(0);
  const [salesIndex, setSalesIndex] = useState(0);

  const getData = async (init) => {
    setLoading(true);
    let response = await API.get(`report/SalespersonwiseOutstandingReport`, {
      params: {
        startDate: dateFormat(startDate, "yyyy-mm-dd"),
        endDate: dateFormat(endDate, "yyyy-mm-dd"),
        salespersonId: salesPersonData && salesPersonData[salesIndex].id,
        productId: productData && productData[prodIndex].id,
      },
      headers: { Token: localStorage.getItem("token") },
    });
    if (init) {
      let salesResponse = await API.get(`salesperson/SalesPersonAll`, { headers: { Token: localStorage.getItem("token") } });
      let prodResponse = await API.get(`product/productall`, { headers: { Token: localStorage.getItem("token") } });
      setSalesPersonData([
        { salespersonName: "All" },
        ...salesResponse.data.data.results,
      ]);
      setProductData([
        { productName: "All" },
        ...prodResponse.data.data.results,
      ]);
    }
    setdata(response.data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getData(true);
  }, []);

  useEffect(() => {
    getData();
  }, [startDate, endDate, prodIndex, salesIndex]);

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
        {productData && (
          <Dropdown
            label="Choose Product:"
            onSelect={(index) => {
              setProdIndex(index);
            }}
            selectedItem={prodIndex}
            options={productData.map((e, index) => ({
              value: index,
              title: e.productName,
            }))}
          />
        )}

        {salesPersonData && (
          <Dropdown
            label="Choose Sales Person:"
            onSelect={(index) => {
              setSalesIndex(index);
            }}
            selectedItem={salesIndex}
            options={salesPersonData.map((e, index) => ({
              value: index,
              title: e.salespersonName,
            }))}
          />
        )}
        <ReactHTMLTableToExcel
          id="download-button"
          className="download"
          table="reports"
          filename="reports"
          sheet="report"
          buttonText="Download"
        />
      </S.Row>
      {loading ? (
        <Loader />
      ) : (
        <S.TableWrapper>
          <S.Table id="reports">
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
      )}
    </S.Wrapper>
  );
}

export default SalesPersonWiseOutstandingReport;
