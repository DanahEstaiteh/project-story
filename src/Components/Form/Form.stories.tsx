import React from "react";
import Form from "./Form";

export default {
  title: "Form",
  Component: Form,
};

export const Login = () => <Form isLogin={true} login="login"></Form>;
export const notLogin = () => <Form isLogin={false} login="login"></Form>;
