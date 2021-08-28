import React from "react";
import * as S from "./FilterStyled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SelectDate(props) {
    return (
        <S.Wrapper>
            <S.Text>{props.label}</S.Text>
            <DatePicker
                selected={props.date}
                onChange={(date) => props.changeDate(date)}
                dateFormat="dd/MM/yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
        </S.Wrapper>
    );
}

export default SelectDate;
