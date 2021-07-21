import React, { useState } from "react";
import * as S from "./SignInStyled";
import LockImg from "../../../assets/icons/lock.png";
import * as C from "../../common/common";
import { useHistory } from "react-router-dom";
import { apiUrl } from "../../../constants/Url";
import API from "../../../utils/Api";
import Loader from "../../common/loader";

const SignIn = () => {
  // const [phone, setPhone] = useState(9845399724);
  // const [password, setPassword] = useState(999999);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  let history = useHistory();

  const [isEmail, updateEmail] = useState(true);

  const userSignIn = () => {
    if (!phone || !password) setMessage("Please add all the fields");
    else {
      setLoading(true);
      API.post(`authentication/companylogin`, {
        mobileNumber: phone,
        otp: password,
      })
        .then((result) => {
          console.log(result.data.statusCode);

          if (result.data.statusCode !== 101) {
            setPhone("");
            setPassword("");
            var data = result.data.data;
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("name", data.fullName);
            localStorage.setItem("id", data.id);
            localStorage.setItem("userType", data.userType);
            localStorage.setItem("username", data.username);
            history.push("/home");
          } else {
            setMessage("Invalid login credentials");
          }
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const getForm = () => {
    if (isEmail) {
      return (
        <>
          <S.InputField placeholder="Enter your Email/Mobile No." bottomMargin="20px" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <S.SubHeadWrapper>
            <S.SubHeadWrapper isStart isCompact>
              <S.Image src={LockImg} />
              <S.SubHead primary>Password</S.SubHead>
            </S.SubHeadWrapper>

            <S.SmallText>Forgot your password?</S.SmallText>
          </S.SubHeadWrapper>

          <S.InputField
            placeholder="Enter your Password"
            bottomMargin="20px"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      );
    } else {
      return (
        <>
          <S.InputField placeholder="Enter your Mobile No." bottomMargin="20px" />
          <S.SubHeadWrapper isStart>
            <S.Image src={LockImg} />

            <S.SubHead primary>OTP</S.SubHead>
          </S.SubHeadWrapper>

          <S.InputField placeholder="Enter your OTP" bottomMargin="20px" />
        </>
      );
    }
  };

  return (
    <>
      <S.ActionWrapper>
        <S.Text>First time user?</S.Text>
        <C.HeaderButton onClick={() => history.push("/register")}>Register</C.HeaderButton>
      </S.ActionWrapper>
      <S.Wrapper>
        <S.Head>Sign In</S.Head>
        <S.SubHeadWrapper marginBottom="1vh">
          <S.SubHeadWrapper isStart onClick={() => updateEmail(true)}>
            <S.Circle primary={isEmail} />
            <S.SubHead primary={isEmail}>Username</S.SubHead>
          </S.SubHeadWrapper>
        </S.SubHeadWrapper>
        {getForm()}
        {message ? <p style={{ color: "red" }}>{message}</p> : null}
        {loading ? <Loader size={"30px"} thickness={"4px"} /> : <C.AuthButton onClick={userSignIn}>Submit</C.AuthButton>}
      </S.Wrapper>
    </>
  );
};

export default SignIn;
