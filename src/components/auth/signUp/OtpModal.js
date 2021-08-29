import * as S from "./OtpModalStyled";
import React from "react";
import ReactDom from "react-dom";

const OtpModal = (props) => {
    return ReactDom.createPortal(
        <S.Wrapper onClick={() => props.setIsOpen(false)} isOpen={props.modalIsOpen}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <h1>HEY</h1>
            </S.Modal>
        </S.Wrapper>,
        document.querySelector("#modal")
    );
};

export default OtpModal;
