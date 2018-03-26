import React, { Component } from "react";
import InputHeader from "./InputHeader";
import InputField from "./InputField";
import InputFieldRight from "./InputFieldRight";

const Content = () => (
  <div className="content">
    <InputHeader />
    <div className="inputfield">
      <InputField />
      <InputFieldRight />
    </div>
  </div>
);

export default Content;
