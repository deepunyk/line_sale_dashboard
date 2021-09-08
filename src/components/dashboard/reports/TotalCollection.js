import React, { useState, useEffect } from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";
import dateFormat from "dateformat";
import Loader from "../../common/loader";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./style.css";
import ResponsiveRow from "./ResponsiveRow";

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
      headers: { Token: localStorage.getItem("token") },
    });
    if (init) {
      let salesResponse = await API.get(`salesperson/SalesPersonAll`, {
        headers: { Token: localStorage.getItem("token") },
      });
      let prodResponse = await API.get(`product/productall`, {
        headers: { Token: localStorage.getItem("token") },
      });
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
      <ResponsiveRow
        items={[
          <SelectDate
            label="From Date:"
            date={startDate}
            changeDate={(date) => setStartDate(date)}
          />,
          <SelectDate
            className="download"
            label="To Date:"
            date={endDate}
            changeDate={(date) => setEndDate(date)}
          />,
          productData && (
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
          ),
          salesPersonData && (
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
          ),
          <S.Text>Total Collection</S.Text>,
          <ReactHTMLTableToExcel
            id="download-button"
            className="download"
            table="reports"
            filename="reports"
            sheet="report"
            buttonText={
              <span>
                <img
                  width={25}
                  height={25}
                  src="https://img.icons8.com/ios/50/000000/ms-excel.png"
                  alt={"Excel"}
                />{" "}
                Excel
              </span>
            }
          />,
        ]}
        table={
          loading ? (
            <Loader />
          ) : (
            <S.TableWrapper>
              <S.Table id="reports">
                <S.TableRow>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Name
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Product Name
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Previous Pending
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Sales
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Cash Collection
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Bank Collection
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Total Collection
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Net Pending
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Open Quantity
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Transfer Quantity
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Sales Quantity
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Closing Quantity
                  </S.TableHeader>
                </S.TableRow>
                <S.TableBody>
                  {data.map((e) =>
                    e.collection.map((collection, index) => (
                      <S.TableRow key={index}>
                        <S.TableData>{e.salespersonName}</S.TableData>
                        <S.TableData width={150}>
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
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.previousPending.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.sales.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          ₹ {collection.cashCollection.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          ₹ {collection.bankCollection.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          ₹ {collection.totalCollection.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.netPending.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.openingQuantity.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.transferQuantity.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.salesQuantity.toLocaleString("en-IN")}
                        </S.TableData>
                        <S.TableData style={{ textAlign: "right" }}>
                          {collection.closingQuantity.toLocaleString("en-IN")}
                        </S.TableData>
                      </S.TableRow>
                    ))
                  )}
                </S.TableBody>
              </S.Table>
            </S.TableWrapper>
          )
        }
      />
    </S.Wrapper>
  );
}

export default TotalCollection;
