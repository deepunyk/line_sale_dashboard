import React, { useState } from "react";
import * as S from "./SignUpStyled";
import * as C from "../../common/common";
import { useHistory } from "react-router";
import API from "../../../utils/Api";

const SignUp = () => {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    pincode: "",
    mobile: "",
    alternateMobile: "",
    password: "",
    confirmPassword: "",
  });

  const marginRight = "0";

  const submitForm = () => {
    if (data.password !== data.confirmPassword)
      setMessage("Password do not match");
    else if (
      !data.firstName ||
      !data.lastName ||
      !data.company ||
      !data.pincode ||
      !data.mobile
    )
      setMessage("Please add all the required fields");
    else {
      API.post(`authentication/createcompany`, {
        /** body */
      })
        .then((result) => {
          console.log(result);
          if (result) {
            setData({
              firstName: "",
              lastName: "",
              company: "",
              address: "",
              pincode: "",
              mobile: "",
              alternateMobile: "",
              password: "",
              confirmPassword: "",
            });
            history.push("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <S.Wrapper>
      <S.Head>Create Your Account</S.Head>
      <S.SubWrapper>
        <S.SubHead>
          Name<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your First Name"
          marginRight="15px"
          required
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
        <S.InputField
          placeholder="Enter your Last Name"
          required
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Company<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your Company Name"
          marginRight={marginRight}
          required
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>Address</S.SubHead>
        <S.InputField
          placeholder="Enter your Address"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Pin Code<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your Postal Pincode"
          marginRight={marginRight}
          required
          value={data.pincode}
          onChange={(e) => setData({ ...data, pincode: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Mobile No<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your 10 digit mobile no."
          marginRight={marginRight}
          required
          type="phone"
          value={data.mobile}
          onChange={(e) => setData({ ...data, mobile: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>Alternate No</S.SubHead>
        <S.InputField
          placeholder="Enter another monbile no. [if any]"
          marginRight={marginRight}
          type="phone"
          value={data.alternateMobile}
          onChange={(e) =>
            setData({ ...data, alternateMobile: e.target.value })
          }
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Password<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your Password"
          marginRight={marginRight}
          required
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Confirm Password<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Re-enter your Password"
          marginRight={marginRight}
          required
          type="password"
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />
      </S.SubWrapper>
      {message ? <p style={{ color: "red" }}>{message}</p> : null}
      <S.NoteText>
        Note:
        <br />
        The password must contain min. 6 character, atleast 1 digit and atleast
        1 special character. Example - LineSale@3
      </S.NoteText>
      <C.AuthButton type="button" onClick={submitForm}>
        Submit
      </C.AuthButton>
      <S.InfoText>Mandatory Information - *</S.InfoText>
      <S.SignInText>
        First time user? <a onClick={() => history.push("/")}>Sign In</a>
      </S.SignInText>
    </S.Wrapper>
  );
};

export default SignUp;
