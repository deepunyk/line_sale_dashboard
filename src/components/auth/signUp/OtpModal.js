import * as S from "./OtpModalStyled";
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import color from "../../../constants/color";

const OtpModal = (props) => {
  return ReactDom.createPortal(
    <S.Wrapper
      onClick={() => props.setIsOpen(false)}
      isOpen={props.modalIsOpen}
    >
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <h1>HEY</h1>
      </S.Modal>
    </S.Wrapper>,
    document.querySelector("#modal")
  );
};

export default OtpModal;

{
  /*
    In file you call this modal, add this

    const [modalIsOpen, setIsOpen] = useState(false);

    <OtpModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />; 
*/
}
