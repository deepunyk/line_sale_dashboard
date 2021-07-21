import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";
import dateFormat from "dateformat";
import Loader from "../../common/loader";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./style.css";

function TotalCollection() {
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
    let response = await API.get(`report/TotalCollectionReport`, {
      params: {
        startDate: dateFormat(startDate, "yyyy-mm-dd"),
        endDate: dateFormat(endDate, "yyyy-mm-dd"),
        salespersonId: salesPersonData && salesPersonData[salesIndex].id,
        productId: productData && productData[prodIndex].id,
      },
    });
    if (init) {
      let salesResponse = await API.get(`salesperson/SalesPersonAll`);
      let prodResponse = await API.get(`product/productall`);
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
                  <S.TableRow key={index}>
                    <S.TableData>{e.salespersonName}</S.TableData>
                    <S.TableData>
                      <span>
                        <img
                          src={collection.image}
                          height="20"
                          width="20"
                          style={{ marginRight: "6px" }}
                        />
                        {collection.productName}
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
      )}
    </S.Wrapper>
  );
}

export default TotalCollection;
