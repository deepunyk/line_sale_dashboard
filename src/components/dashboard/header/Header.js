import React, { useEffect, useState } from "react";
import * as S from "./HeaderStyled";
import Logo from "../../../assets/illustrations/logo.png";
import Dashboard from "../../../assets/icons/dashboard.svg";
import LogOut from "../../../assets/icons/log-out.png";
import color from "../../../constants/color";
import styled from "styled-components";

import * as C from "../../common/common";
import { useHistory } from "react-router-dom";
import { Menu as MenuStyled } from "@styled-icons/boxicons-regular/Menu";
import DashNavContent from "../../../constants/DashNavContent";
import { Drawer } from "antd";
import API from "../../../utils/Api";
import dateFormat from "dateformat";

const MenuIcon = styled(MenuStyled)`
  height: 40px;
  color: ${color.primary};
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  let history = useHistory();

  const [visible, setVisible] = useState(false);
  const [days, setdays] = useState("0");
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getCurrentPlan = async () => {
    const response = await API.get("company/CurrentPlan", {
      headers: { Token: localStorage.getItem("token") },
    });
    // noinspection JSUnresolvedVariable
    let expiryDate = response.data.data.expiryDate;
    expiryDate = expiryDate.replaceAll("-", "/");

    const date1 = new Date();
    const date2 = new Date(dateFormat(expiryDate, "mm/dd/yyyy"));

    const diffInMs = Math.abs(date2 - date1);

    setdays(Math.ceil(diffInMs / (1000 * 60 * 60 * 24)).toString());
  };

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    getCurrentPlan();
  }, []);

  const logout = async () => {
    try {
      await API.get("authentication/logout", {
        headers: { Token: localStorage.getItem("token") },
      });
      history.push("/");
    } catch (e) {}
  };

  return (
    <S.Wrapper>
      <S.SubWrapper
        mobile
        onClick={() => history.push("/home")}
        style={{ cursor: "pointer" }}
      >
        <S.Image src={Logo} height="80px" marginRight="15px" />
        <C.LineHead>Line Sale</C.LineHead>
      </S.SubWrapper>
      <S.Divider />
      <S.SubWrapper
        onClick={() => history.push("/home")}
        style={{ cursor: "pointer" }}
      >
        <S.Image src={Dashboard} height="20px" marginRight="10px" />
        <S.Text fontSize="1.4rem">Dashboard</S.Text>
      </S.SubWrapper>
      <S.Divider />
      <S.SubWrapper>
        <S.Text fontSize="1.2rem">Subscription Expires in {days} days</S.Text>
      </S.SubWrapper>
      <S.Divider />
      <S.SubWrapper>
        <S.RightWrapper alignEnd>
          <S.Text fontSize="1.1rem" color={color.primary} marginLeft>
            Welcome
          </S.Text>
          <S.Text fontSize="1rem">{localStorage.getItem("name")}</S.Text>
        </S.RightWrapper>
        <S.RightWrapper marginLeft className="logout">
          <S.Image
            src={LogOut}
            height="30px"
            marginBottom
            onClick={() => logout()}
          />

          <S.Text fontSize="0.9rem" onClick={() => logout()}>
            LOG OUT
          </S.Text>
        </S.RightWrapper>
      </S.SubWrapper>

      <MenuIcon onClick={showDrawer} />

      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="300"
        style={{ padding: "0", margin: "0" }}
      >
        <S.Text fontSize="1rem" color={color.primary}>
          Welcome
        </S.Text>
        <S.Text fontSize="1rem">{localStorage.getItem("name")}</S.Text>
        <S.Text fontSize="0.8rem" marginBottom="20px">
          Subscription Expires in {days} days
        </S.Text>

        {DashNavContent.map((content) => {
          return (
            <>
              <S.MobileDivider />
              <S.MenuWrapper
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (content.subMenu.length === 0) {
                    onClose();
                    if (content.route) {
                      history.push(content.route);
                    }
                  }
                }}
              >
                {content.icon}
                <S.MobileMenuText>{content.title}</S.MobileMenuText>
              </S.MenuWrapper>
              {content.subMenu.map((e) => {
                return (
                  <S.Text
                    fontSize="0.9rem"
                    marginBottom="5px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      onClose();
                      if (e.route) {
                        history.push(e.route);
                      }
                    }}
                  >
                    {e.title}
                  </S.Text>
                );
              })}
            </>
          );
        })}
      </Drawer>
    </S.Wrapper>
  );
};

export default Header;
