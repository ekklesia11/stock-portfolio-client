import React from "react";
import axios from "axios";

import kakaoLoginBtn from "../../assets/kakao_login_medium_narrow.png";
import googleLoginBtn from "../../assets/btn_google_signin_light_normal_web.png";

const SocialBtns = () => {
  return (
    <div>
      <div>
        <img src={kakaoLoginBtn} alt="" />
      </div>
      <div>
        <img src={googleLoginBtn} alt="" />
      </div>
    </div>
  );
};

export default SocialBtns;
