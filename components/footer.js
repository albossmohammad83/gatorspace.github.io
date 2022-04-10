import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Footer } = Layout;

export default function PageFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Gator Space 2022
      <br />
    </Footer>
  );
}
