import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import * as S from "./ReportStyled";

function ResponsiveRow({ items, table }) {
  if (items.length === 5) {
    return (
      <div>
        <Container>
          <Col>
            <Row className="align-items-center" style={{ marginTop: 20 }}>
              <Col xs={6} sm={4} md={3} lg={1} xl={1}>
                {items[0]}
              </Col>
              <Col xl={2} md={3} xs={6} sm={4} lg={2}>
                {items[1]}
              </Col>
              <Col xl={2} md={3} xs={6} sm={4} lg={2}>
                {items[2]}
              </Col>
              <Col xl={5} md={3} xs={6} sm={4} lg={5}>
                {items[3]}
              </Col>
              <Col xl={2} md={3} xs={6} sm={4} lg={2}>
                {items[4]}
              </Col>
            </Row>
            <Row style={{ marginTop: 20, marginBottom: 20, height: 500 }}>
              {table}
            </Row>
            <Row>
              <S.SizedBox />
            </Row>
          </Col>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Col>
          <Row className="align-items-center" style={{ marginTop: 20 }}>
            <Col xs={6} sm={4} md={3} lg={1} xl={1}>
              {items[0]}
            </Col>
            <Col xs={6} sm={4} md={3} lg={1} xl={1}>
              {items[1]}
            </Col>
            <Col xl={2} md={3} xs={6} sm={4} lg={2}>
              {items[2]}
            </Col>
            <Col xl={2} md={3} xs={6} sm={4} lg={2}>
              {items[3]}
            </Col>
            <Col xl={4} md={3} xs={6} sm={4} lg={4}>
              {items[4]}
            </Col>
            <Col xl={2} md={3} xs={6} sm={4} lg={2}>
              {items[5]}
            </Col>
          </Row>
          <Row style={{ marginTop: 20, marginBottom: 20, height: 500 }}>
            {table}
          </Row>
          <Row>
            <S.SizedBox />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default ResponsiveRow;
