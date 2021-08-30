import React, {useState, useEffect} from "react";
import * as S from "./ReportStyled";
import SelectDate from "../filter/SelectDate";
import Dropdown from "../filter/Dropdown";
import API from "../../../utils/Api";
import dateFormat from "dateformat";
import Loader from "../../common/loader";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./style.css";
import {Container, Row, Col} from 'react-bootstrap';
import Test from "./dummy";

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
            headers: {Token: localStorage.getItem("token")},
        });
        if (init) {
            let salesResponse = await API.get(`salesperson/SalesPersonAll`, {headers: {Token: localStorage.getItem("token")}});
            let prodResponse = await API.get(`product/productall`, {headers: {Token: localStorage.getItem("token")}});
            setSalesPersonData([{salespersonName: "All"}, ...salesResponse.data.data.results]);
            setProductData([{productName: "All"}, ...prodResponse.data.data.results]);
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
            <Container >
                <Col>
                    <Row className="align-items-center" style={{ marginTop: 20}}>
                        <Col xs={6} sm={4} md={3} lg={1} xl={1}>
                            {/*<SelectDate className="download" label="From Date:" date={startDate}*/}
                            {/*            changeDate={(date) => setStartDate(date)}/>*/}
                            <Test label="From Date:" date={startDate} changeDate={(date) => setStartDate(date)}/>
                        </Col>
                        <Col xs={6} sm={4} md={3} lg={1} xl={1}>
                            {/*<SelectDate className="download" label="To Date:" date={endDate}*/}
                            {/*            changeDate={(date) => setEndDate(date)}/>*/}
                            <Test className="download" label="To Date:" date={endDate} changeDate={(date) => setEndDate(date)}/>
                        </Col>
                        <Col xl={2} md={3} xs={6} sm={4} lg={2}>
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
                        </Col>
                        <Col xl={2} md={3} xs={6} sm={4} lg={2}>
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
                        </Col>
                        <Col xl={4} md={3} xs={6} sm={4} lg={4}>
                            <S.Text>Total Collection</S.Text>
                        </Col>
                        <Col xl={2} md={3} xs={6} sm={4} lg={2}>
                            <ReactHTMLTableToExcel id="download-button" className="download" table="reports"
                                                   filename="reports"
                                                   sheet="report" buttonText={<span><img width={25} height={25}
                                src="https://img.icons8.com/ios/50/000000/ms-excel.png" alt={"Excel"}/>  Excel</span>}/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 20,marginBottom:20,height:500}}>
                        {loading ? (
                            <Loader/>
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
                        <img src={collection.image} height="20" width="20" style={{marginRight: "6px"}}/>
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
                    </Row>
                </Col>
            </Container>
        </S.Wrapper>
    );
}

export default TotalCollection;
