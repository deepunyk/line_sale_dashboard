import React, { useState } from "react";
import * as S from "./SignUpStyled";
import * as C from "../../common/common";
import { useHistory } from "react-router";
import API from "../../../utils/Api";
import OtpModal from "./OtpModal";

const SignUp = () => {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    company: "",
    addressOne: "",
    addressTwo: "",
    phone: "",
    email: "",
    website: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  const marginRight = "0";

  const signUp = () => {
    API.post(`authentication/createcompany`, {
      companyCode: data.phone,
      companyName: data.company,
      address1: data.addressOne,
      address2: data.addressTwo,
      email: data.email,
      website: data.website,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
    })
      .then((result) => {
        console.log(result);
        if (result) {
          setData({
            company: "",
            addressOne: "",
            addressTwo: "",
            phone: "",
            email: "",
            website: "",
            city: "",
            state: "",
            pincode: "",
          });
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  const submitForm = () => {
    if (
      !data.company ||
      !data.addressOne ||
      !data.phone ||
      !data.email ||
      !data.city ||
      !data.state ||
      !data.pincode
    )
      setMessage("Please add all the required fields");
    else {
      setIsOpen(true);
      <OtpModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />;
    }
  };

  return (
    <S.Wrapper>
      <S.Head>Create Your Account</S.Head>
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
        <S.SubHead>
          Address<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your Address"
          value={data.addressOne}
          onChange={(e) => setData({ ...data, addressOne: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>Alternate Address</S.SubHead>
        <S.InputField
          placeholder="Enter your alternate Address"
          value={data.addressTwo}
          onChange={(e) => setData({ ...data, addressTwo: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Phone<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your phone number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Email<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>Website</S.SubHead>
        <S.InputField
          placeholder="Enter your Website"
          value={data.website}
          onChange={(e) => setData({ ...data, website: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          City<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your City"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          State<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your State"
          value={data.state}
          onChange={(e) => setData({ ...data, state: e.target.value })}
        />
      </S.SubWrapper>
      <S.SubWrapper>
        <S.SubHead>
          Pincode<span>*</span>
        </S.SubHead>
        <S.InputField
          placeholder="Enter your Pincode"
          value={data.pincode}
          onChange={(e) => setData({ ...data, pincode: e.target.value })}
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
