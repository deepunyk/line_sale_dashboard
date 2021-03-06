import React, { useState } from "react";
import * as S from "./FilterStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

function SelectDate(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    props.changeDate(e);
    handleClose();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <S.Text>{props.label}</S.Text>
      <Button variant="outline-dark" size="sm" onClick={handleClick}>
        {props.date.getDate().toString() +
          "/" +
          (props.date.getMonth() + 1).toString() +
          "/" +
          props.date.getFullYear()}
      </Button>
      <Modal show={show} onHide={handleClose} centered size="sm">
        <Modal.Header>
          <Modal.Title>Select {props.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <DatePicker
              closeOnScroll={true}
              selected={props.date}
              onChange={handleChange}
              dateFormat="dd/MM/yyyy"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              inline
            />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SelectDate;
