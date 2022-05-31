import React, { useEffect, useState } from "react";
import style from "./CarDetail.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { getCarByID } from "./action";
import { connect } from "react-redux";
import { Button } from "antd";
import { Spin } from "antd";
import { NavLink } from "react-router-dom";
import {
  CaretRightOutlined,
  HeartFilled,
  CarOutlined,
} from "@ant-design/icons";
import Layout from "../../components/layout";
import { Link, useHistory } from "react-router-dom";
import money from "../../components/Share/functions/money";
import { Modal } from "react-bootstrap";

function CarDetail(props) {
  const params = useParams();

  useEffect(() => {
    props.getCarByID(params.id);
  }, []);

  function compareHandler() {}
  let myStyle = {
    backgroundImage: `url(${props?.carDetail?.car[0]?.image.banner})`,
    backgroundRepeat: "no-repeat",
  };

  const toggleClass = (e) => {
    e.preventDefault();
    let element = e.target.parentElement.parentElement;
    element.classList.toggle(`${style.heartIconClicked}`);
  };
  let history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  function orderCarHandler() {
    if (props.isLoggedIn)
      history.push(`/order/${props?.carDetail?.car[0]?._id}`);
    else {
      setShow(true);
    }
  }

  function loginHandler() {
    history.push("/login");
  }
  return (
    <Layout>
      <Spin spinning={props.carDetail.loading}>
        <div className={`${style.main}`}>
          <div className={`${style.bannerContainer} row`} style={myStyle}>
            <div className={`${style.bannerImg} col-xl-12`}></div>
            <div className={`${style.carDetailContainer} col-xl-12`}>
              <div className={`row`}>
                <div className={`${style.carName} col-xl-12`}>
                  {props?.carDetail?.car[0]?.name}
                </div>
              </div>
              <div className={`${style.carDetail} row`}>
                <div className={`${style.carPrice} col-xl-2`}>
                  {money(props?.carDetail?.car[0]?.price, "vnd")}
                </div>
                <div className={`${style.carPower} col-xl-2`}>
                  <div className={`${style.title}`}>Công Suất</div>
                  <div className={`${style.text}`}>
                    {props?.carDetail?.car[0]?.specification?.power + " HP"}
                  </div>
                </div>
                <div className={`${style.carSpeed} col-xl-2`}>
                  <div className={`${style.title}`}>Tốc độ tối đa</div>
                  <div className={`${style.text}`}>
                    {props?.carDetail?.car[0]?.specification?.maxSpeed +
                      " km/h"}
                  </div>
                </div>
                <div className={`${style.carAcceleration} col-xl-2`}>
                  <div className={`${style.title}`}>Tăng tốc từ 0-100 km/h</div>
                  <div className={`${style.text}`}>
                    {" "}
                    {props?.carDetail?.car[0]?.specification?.acceleration +
                      " s"}
                  </div>
                </div>
                <div className={`col-xl-2 row`}>
                  <Button
                    className={`${style.bookButton} col-xl-12`}
                    type="primary"
                    onClick={orderCarHandler}
                    danger
                  >
                    <CarOutlined />
                    ĐẶT XE NGAY
                  </Button>
                </div>
                <div className={`col-xl-2 row`}>
                  {/* <HeartOutlined className={`${style.heartIcon}`} /> */}
                  <HeartFilled
                    onClick={(e) => toggleClass(e)}
                    className={`${style.heartIcon}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.carDescWrapper} row`}>
            <div className={`${style.carDesc} col-xl-4 col-md-12`}>
              <div className={`${style.title}`}>Tổng Quan</div>
              <div className={`${style.text}`}>
                {props?.carDetail?.car[0]?.description}
              </div>
            </div>
            <div className={`${style.carImg} col-xl-8 col-md-12`}></div>
          </div>
          <div className={`${style.carSpecWrapper} row`}>
            <div className={`${style.carSpecCol} col-xl-6`}>
              <div className={`${style.specTitle} row`}>Thông số kĩ thuật</div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>Công Suất</p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {props?.carDetail?.car[0]?.specification?.power + " HP"}
                </p>
              </div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>
                  Dung tích xi lanh
                </p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {props?.carDetail?.car[0]?.specification?.displacement +
                    " cc"}
                </p>
              </div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>
                  Tốc độ tối đa
                </p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {props?.carDetail?.car[0]?.specification?.maxSpeed + " km/h"}
                </p>
              </div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>
                  Tăng tốc từ 0-100 km/h
                </p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {props?.carDetail?.car[0]?.specification?.maxSpeed + " km/h"}
                </p>
              </div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>Khối lượng</p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {props?.carDetail?.car[0]?.specification?.weight + " kg"}
                </p>
              </div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>Năm sản xuất</p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {props?.carDetail?.car[0]?.year}
                </p>
              </div>
              <div className={`${style.specRow} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>Màu có sẵn</p>
                <div
                  className={`${style.specRowText} ${style.colorContainer} col-xl-6`}
                >
                  {props?.carDetail?.car[0]?.color.map((item) => {
                    return (
                      <div
                        className={`${style.color}`}
                        style={{ backgroundColor: `${item}` }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div className={`${style.specRow} ${style.specRowPrice} row`}>
                <p className={`${style.specRowTitle} col-xl-6`}>
                  Giá Tiêu Chuẩn
                </p>
                <p className={`${style.specRowText} col-xl-6`}>
                  {money(props?.carDetail?.car[0]?.price, "VND")}
                </p>
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
                    onClick={orderCarHandler}
                    type="primary"
                    danger
                  >
                    <CarOutlined />
                    ĐẶT XE NGAY
                  </Button>
                </div>
                <div className={`${style.button} col-xl-6`}>
                  <Link
                    className={`${style.compareButton} col-xl-12`}
                    to={`/compare?id1=${props?.carDetail?.car[0]?._id}`}
                  >
                    SO SÁNH XE
                    <CaretRightOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chức năng này yêu cầu đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>Vui lòng đăng nhập để tiếp tục</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="primary" onClick={loginHandler}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  carDetail: state.carDetail,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  getCarByID: (params) => {
    dispatch(getCarByID(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);
