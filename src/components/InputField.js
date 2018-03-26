import React from "react";
import duanxin from "../image/message.png";
import qq from "../image/qq.png";

const InputFiled = () => (
  <div className="inputfieldleft">
    <form action="" className="inputform">
      <input type="text" placeholder="请输入账号" className="requiredinput" />
      <input
        type="password"
        placeholder="请输入密码"
        className="requiredinput"
      />
      <a
        href="https://www.selleruc.com/cas/login?execution=e1s1&_eventId=reset"
        className="inputfielda"
      >
        忘记密码>
      </a>
      <input type="submit" classname="btn-input" id="btn-input" value="登录" />
    </form>
    <div className="imgdiv">
      <p className="imgdivp"> 使用其他方式登录</p>
      <div className="imgdiva">
        <a
          href="https://www.selleruc.com/cas/login?execution=e1s1&_eventId=select"
          className="inputfielda1"
        >
          <img src={duanxin} id="inputimg" />
          短信快捷登录
        </a>
        <a
          href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101353988&redirect_uri=https%3A%2F%2Fwww.selleruc.com%2Fcas%2Flogin%3Fservice%3Dhttp%253A%252F%252Fwww.selleruc.com%252Fscapi%252Fcas%252Flogin%252F%253Fnext%253D%25252F%26client_name%3DQQClient%26service%3Dhttp%253A%252F%252Fwww.selleruc.com%252Fscapi%252Fcas%252Flogin%252F%253Fnext%253D%25252F&response_type=code&scope=get_user_info"
          className="inputfielda1"
        >
          <img src={qq} id="inputimg" />
          QQ登录
        </a>
      </div>
    </div>
  </div>
);

export default InputFiled;
