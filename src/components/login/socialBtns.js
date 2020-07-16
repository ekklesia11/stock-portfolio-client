import React from "react";
// import axios from "axios";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

import kakaoLoginBtn from "../../assets/kakao_login_medium_narrow.png";
import googleLoginBtn from "../../assets/btn_google_signin_light_normal_web.png";

const SocialBtns = () => {
  return (
    <div>
      <div>
        <img src={kakaoLoginBtn} alt="" />
      </div>
      <div>
        <NaverLogin>네이버 로그인</NaverLogin>
      </div>
      <div>
        <img src={googleLoginBtn} alt="" />
      </div>
      <Link href="#" color="primary">
        문의하기
      </Link>
    </div>
  );
};

const NaverLogin = styled.div`
  width: 180px;
  height: 45px;
  background-color: #19ce60;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export default SocialBtns;
