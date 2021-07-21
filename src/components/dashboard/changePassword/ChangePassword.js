import * as S from "./ChangePasswordStyled";
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import color from "../../../constants/color";
import * as C from "../../common/common";
import API from "../../../utils/Api";
import Loader from "../../common/loader";
import { toast } from "react-toastify";

const ChangePasswordModal = (props) => {
  const [old, setold] = useState("");
  const [newPass, setnewPass] = useState("");
  const [conPass, setconPass] = useState("");
  const [load, setload] = useState(false);

  const changePassword = async () => {
    if (!old || !newPass || !conPass) {
      toast("Please enter all the details");
      return;
    } else if (newPass !== conPass) {
      toast("Passwords don't match");
      return;
    } else {
      setload(true);
      // await API.get("authentication/logout", { headers: { Token: localStorage.getItem("token") } });
      setload(false);
    }
  };

  return ReactDom.createPortal(
    <S.Wrapper onClick={() => props.setIsOpen(false)} isOpen={props.modalIsOpen}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Text>Change Password</S.Text>
        <S.InputField placeholder="Enter old password" type="password" value={old} onChange={(e) => setold(e.target.value)} />
        <S.InputField placeholder="Enter new password" type="password" value={newPass} onChange={(e) => setnewPass(e.target.value)} />
        <S.InputField placeholder="Confirm new password" type="password" value={conPass} onChange={(e) => setconPass(e.target.value)} />
        {load ? <Loader size={"30px"} thickness={"4px"} height={null} /> : <C.AuthButton onClick={() => changePassword()}>Submit</C.AuthButton>}
      </S.Modal>
    </S.Wrapper>,
    document.querySelector("#modal")
  );
};

export default ChangePasswordModal;
