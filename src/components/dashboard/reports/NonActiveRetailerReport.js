import React, { useEffect, useState } from "react";
import API from "../../../utils/Api";
import dateFormat from "dateformat";
import * as S from "./ReportStyled";
import ResponsiveRow from "./ResponsiveRow";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Loader from "../../common/loader";

function NonActiveRetailer() {
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

    let response = await API.get("report/NonActiveRetailerReport", {
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
            label="Till Date:"
            date={startDate}
            changeDate={(date) => setStartDate(date)}
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
          <S.Text>Non Active Retailer</S.Text>,
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
                    Retailer Name
                  </S.TableHeader>
                  <S.TableHeader style={{ textAlign: "center" }}>
                    Mobile Number
                  </S.TableHeader>
                </S.TableRow>
                <S.TableBody>
                  {data.map((e) => (
                    <S.TableRow>
                      <S.TableData>{e.retailerName}</S.TableData>
                      <S.TableData style={{ textAlign: "right" }}>
                        {e.mobileNumber}
                      </S.TableData>
                    </S.TableRow>
                  ))}
                </S.TableBody>
              </S.Table>
            </S.TableWrapper>
          )
        }
      />
    </S.Wrapper>
  );
}

export default NonActiveRetailer;
