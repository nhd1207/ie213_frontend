import React from "react";
import style from "./AccessoryDetail.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "antd";

import {
  HeartFilled,
  ShoppingCartOutlined,
  CarOutlined,
} from "@ant-design/icons";

export default function AccessoryDetail() {
  return (
    <div>
      <h1 className={`${style.heading}`}>Accessory Detail</h1>
    </div>
  );
}
