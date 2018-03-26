import React from "react";
import erweima from "../image/erweima.jpg";

const InputFiledRight = () => (
  <div className="inputfieldright">
    <img src={erweima} className="inputimg" />
    <p className="inputrightp">
      <strong>微信扫码登录</strong>{" "}
    </p>
  </div>
);

export default InputFiledRight;
