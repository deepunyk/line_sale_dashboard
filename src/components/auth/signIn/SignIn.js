import React, { useState } from "react";
import * as S from "./SignInStyled";
import LockImg from "../../../assets/icons/lock.png";
import * as C from "../../common/common";
import { useHistory } from "react-router-dom";
import { apiUrl } from "../../../constants/Url";
import { post } from "axios";

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const [isEmail, updateEmail] = useState(true);

  const userSignIn = () => {
    post(
      `${apiUrl}authentication/companylogin`,
      {
        mobileNumber: phone,
        otp: password,
      },
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    )
      .then((result) => {
        if (result) {
          setPhone("");
          setPassword("");
          history.push("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  const getForm = () => {
    if (isEmail) {
      return (
        <>
          <S.InputField
            placeholder="Enter your Email/Mobile No."
            bottomMargin="20px"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

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
          <S.InputField
            placeholder="Enter your Mobile No."
            bottomMargin="20px"
          />
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
        <C.HeaderButton onClick={() => history.push("/register")}>
          Register
        </C.HeaderButton>
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
        <C.AuthButton onClick={userSignIn}>Submit</C.AuthButton>
      </S.Wrapper>
    </>
  );
};

export default SignIn;
