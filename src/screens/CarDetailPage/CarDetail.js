import React from "react";
import style from "./CarDetail.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "antd";

import {
  CaretRightOutlined,
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
  CarOutlined,
} from "@ant-design/icons";

export default function CarDetail() {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.bannerContainer} row`}>
        <div className={`${style.bannerImg} col-xl-12`}></div>
        <div className={`${style.carDetailContainer} col-xl-12`}>
          <div className={`row`}>
            <div className={`${style.carName} col-xl-12`}>
              Xe Sieu Cap Vip Pro
            </div>
          </div>
          <div className={`${style.carDetail} row`}>
            <div className={`${style.carPrice} col-xl-2`}>100 000 000 </div>
            <div className={`${style.carPower} col-xl-2`}>
              <div className={`${style.title}`}>Công Suất</div>
              <div className={`${style.text}`}>600 mã lực</div>
            </div>
            <div className={`${style.carSpeed} col-xl-2`}>
              <div className={`${style.title}`}>Tốc độ tối đa</div>
              <div className={`${style.text}`}>325 km/h</div>
            </div>
            <div className={`${style.carAcceleration} col-xl-2`}>
              <div className={`${style.title}`}>Tăng tốc từ 0-100 km/h</div>
              <div className={`${style.text}`}> 5s</div>
            </div>
            <div className={`col-xl-2 row`}>
              <Button
                className={`${style.bookButton} col-xl-12`}
                type="primary"
                danger
              >
                <CarOutlined />
                Đặt Xe Ngay
              </Button>
            </div>
            <div className={`col-xl-2 row`}>
              <HeartOutlined className={`${style.heartIcon}`} />
              {/* <HeartFilled className={`${style.heartIcon}`} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.carDescWrapper} row`}>
        <div className={`${style.carDesc} col-xl-4 col-md-12`}>
          <div className={`${style.title}`}>Tổng Quan</div>
          <div className={`${style.text}`}>
            Mô tả xe siêu cấp vip pro Mô tả xe siêu cấp vip pro Mô tả xe siêu
            cấp vip pro Mô tả xe siêu cấp vip pro Mô tả xe siêu cấp vip pro Mô
            tả xe siêu cấp vip pro Mô tả xe siêu cấp vip pro Mô tả xe siêu cấp
            vip pro Mô tả xe siêu cấp vip pro Mô tả xe siêu cấp vip pro
          </div>
        </div>
        <div className={`${style.carImg} col-xl-8 col-md-12`}></div>
      </div>
      <div className={`${style.carSpecWrapper} row`}>
        <div className={`${style.carSpecCol} col-xl-6`}>
          <div className={`${style.specTitle} row`}>Thông số kĩ thuật</div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>Công Suất</div>
            <div className={`${style.specRowText} col-xl-6`}>
              320 PS (220 kW)
            </div>
          </div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>
              Mô men xoắn cực đại
            </div>
            <div className={`${style.specRowText} col-xl-6`}>380 Nm</div>
          </div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>
              Tốc độ tối đa
            </div>
            <div className={`${style.specRowText} col-xl-6`}>275 km/h</div>
          </div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>
              Tăng tốc từ 0-100 km/h
            </div>
            <div className={`${style.specRowText} col-xl-6`}>4,9 giây</div>
          </div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>
              Tiêu thụ nhiên liệu kết hợp (lít/100km)
            </div>
            <div className={`${style.specRowText} col-xl-6`}>
              8,9 (NETC) - 8,1 (NEDC)
            </div>
          </div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>
              Lượng khí thải CO2 (g/km)
            </div>
            <div className={`${style.specRowText} col-xl-6`}>185</div>
          </div>
          <div className={`${style.specRow} ${style.specRowPrice} row`}>
            <div className={`${style.specRowTitle} col-xl-6`}>
              Giá Tiêu Chuẩn
            </div>
            <div className={`${style.specRowText} col-xl-6`}>
              3 600 000 000 VNĐ
            </div>
          </div>
          <div className={`${style.specRow} row`}>
            <div className={`${style.specRowPolicy} col-xl-12`}>
              *Giá tiêu chuẩn bao gồm thuế nhập khẩu, thuế tiêu thụ đặc biệt và
              thuế giá trị gia tăng. Bảng giá, thông số kỹ thuật và hình ảnh có
              thể thay đổi theo từng thời điểm mà không báo trước
            </div>
          </div>
          <div className={`${style.buttonWrapper} row`}>
            <div className={`${style.button} col-xl-6`}>
              <Button
                className={`${style.bookButton} col-xl-12`}
                type="primary"
                danger
              >
                <CarOutlined />
                Đặt Xe Ngay
              </Button>
            </div>
            <div className={`${style.button} col-xl-6`}>
              <Button
                className={`${style.compareButton} col-xl-12`}
                type="default"
              >
                So Sánh Xe
                <CaretRightOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
}