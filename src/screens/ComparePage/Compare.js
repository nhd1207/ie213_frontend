import React, { useEffect, useState } from "react";
import style from "./Compare.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getListCar } from "./action";
import { Button } from "antd";
import { connect } from "react-redux";
import {
  CaretRightOutlined,
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import Layouts from "../../components/layout";
import CarSelection from "../../components/CarSelection";

function CompareTwoCar(props) {
  const location = useLocation();

  return (
    <Layouts>
      <div className={`${style.main}`}>
        <div className={`${style.bannerContainer} row`}>
          <div className={`${style.bannerImg} col-xl-12`}></div>
        </div>
        <div className={`${style.carSpecWrapper} row`}>
          <div className={`${style.carSpecCol} col-xl-10`}>
            <div className={`${style.specTitle} row`}>So Sánh xe</div>
            <div className={`${style.select} row`}>
              <CarSelection data={props?.cars}/>
              <CarSelection data={props?.cars}/>
            </div>
            <div className={`${style.specRowHeading} row`}>
              <div className={`${style.rowHeading} col-xl-4`}>Thông số</div>
              <div className={`${style.rowHeading} col-xl-4`}>Alo 2</div>
              <div className={`${style.rowHeading} col-xl-4`}>Alo 1</div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>Công Suất</div>
              <div className={`${style.specRowText} col-xl-4`}>
                320 PS (220 kW)
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                320 PS (220 kW)
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Mô men xoắn cực đại
              </div>
              <div className={`${style.specRowText} col-xl-4`}>380 Nm</div>
              <div className={`${style.specRowText} col-xl-4`}>380 Nm</div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Tốc độ tối đa
              </div>
              <div className={`${style.specRowText} col-xl-4`}>275 km/h</div>
              <div className={`${style.specRowText} col-xl-4`}>275 km/h</div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Tăng tốc từ 0-100 km/h
              </div>
              <div className={`${style.specRowText} col-xl-4`}>4,9 giây</div>
              <div className={`${style.specRowText} col-xl-4`}>4,9 giây</div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Tiêu thụ nhiên liệu kết hợp (lít/100km)
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                8,9 (NETC) - 8,1 (NEDC)
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                8,9 (NETC) - 8,1 (NEDC)
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Lượng khí thải CO2 (g/km)
              </div>
              <div className={`${style.specRowText} col-xl-4`}>185</div>
              <div className={`${style.specRowText} col-xl-4`}>185</div>
            </div>
            <div className={`${style.specRow} ${style.specRowPrice} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Giá Tiêu Chuẩn
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                3 600 000 000 VNĐ
              </div>{" "}
              <div className={`${style.specRowText} col-xl-4`}>
                3 600 000 000 VNĐ
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowPolicy} col-xl-12`}>
                *Giá tiêu chuẩn bao gồm thuế nhập khẩu, thuế tiêu thụ đặc biệt
                và thuế giá trị gia tăng. Bảng giá, thông số kỹ thuật và hình
                ảnh có thể thay đổi theo từng thời điểm mà không báo trước
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
                  Đặt Xe 1 Ngay
                </Button>
              </div>
              <div className={`${style.button} col-xl-6`}>
                <Button
                  className={`${style.bookButton} col-xl-12`}
                  type="primary"
                  danger
                >
                  <CarOutlined />
                  Đặt Xe 2 Ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

const mapStateToProps = state => ({
  cars: state.carList,
})

const mapDispatchToProps = dispatch => ({
  getListCar: (params) => {
      dispatch(getListCar(params))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CompareTwoCar);
