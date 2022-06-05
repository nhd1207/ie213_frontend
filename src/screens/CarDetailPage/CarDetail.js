import React, { useEffect, useState } from "react";
import style from "./CarDetail.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { getCarByID } from "./action";
import { connect } from "react-redux";
import { Button } from "antd";
import { Spin } from "antd";
import {
  CaretRightOutlined,
  HeartFilled,
  CarOutlined,
} from "@ant-design/icons";
import { deleteWishList } from "../WishListPage/action";
import { addCarToWishlist, getUserForWishListCar } from "../CarPage/action";
import Layout from "../../components/layout";
import { Link, useHistory } from "react-router-dom";
import money from "../../components/Share/functions/money";
import { Modal } from "react-bootstrap";

function CarDetail(props) {
  const [wishList, setWishList] = useState({});
  const [carId, setCarId] = useState();
  const [isLiked, setIsLiked] = useState(false)

  const params = useParams();

  
  useEffect(() => {
    setWishList({ ...props?.user?.wishList });
  }, [props.user.wishList]);

  useEffect(() => {
    props.getUserForWishListCar();
    props.getCarByID(params.id);
    setCarId(params.id)
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.carDetail.loading) {
      if (props.loading2)
        setLoading(true);
      else setLoading(true)
    } else setLoading(true);
    if (props.carDetail.loading === false && props.loading2 === false)
      setLoading(false);
  }, [props.carDetail.loading, props.loading2]);

  useEffect(() => {
      props?.user?.wishList?.cars.forEach((item) => {
        if (item._id === carId) {
          setIsLiked(true);
        }
      })
  }, [props.carDetail.loading, props?.user?.wishList?.cars, wishList]);

  let myStyle = {
    backgroundImage: `url(${props?.carDetail?.car[0]?.image.banner})`,
    backgroundRepeat: "no-repeat",
  };

  let history = useHistory();

  const handleDeleteWishListItem = (value) => {
    let wishList2;
    let index1;
    wishList2 = { ...wishList };
    wishList2.cars.map((item, index) => {
      if (item._id === value)
        index1 = index
    })
    wishList2.cars.splice(index1, 1);
    let wishList3 = {
      cars: [],
      accessories: [],
    };
    wishList3.cars = wishList2.cars.map((item) => {
      return item._id;
    });
    wishList3.accessories = wishList2.accessories.map((item) => {
      return item._id;
    });
    props.deleteWishList({ wishList: { ...wishList3 } });
  };

  const toggleClass = (e, value, car, index) => {
    if (props.isLoggedIn === false) {
      e.preventDefault();
      setShow(true);
      let element = e.target.parentElement.parentElement;
      element.classList.className = `${style.heartIcon}`;
    } else {
      if (!isLiked) {
        e.preventDefault();
        let element = e.target.parentElement.parentElement;
        element.classList.toggle(`${style.heartIconClicked}`);
        props.addCarToWishlist({ itemId: params.id });
      } else {
        e.preventDefault();
        let element = e.target.parentElement.parentElement;
        element.classList.toggle(`${style.heartIconClicked}`);
        handleDeleteWishListItem(value);
      }
    }
  };

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
      <Spin spinning={loading}>
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
                {isLiked ? (
                                <HeartFilled
                                  onClick={(e) =>
                                    toggleClass(e)
                                  }
                                  className={`${style.heartIcon} ${style.heartIconClicked}`}
                                />
                              ) : (
                                <HeartFilled
                                  onClick={(e) =>
                                    toggleClass(e)
                                  }
                                  className={`${style.heartIcon}`}
                                />
                              )}
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.carDescWrapper} row`}>
            <div className={`${style.carDesc} col-xl-4 col-md-12`}>
              <div className={`${style.title}`}>Tổng Quan</div>
              <div className={`${style.text}`}
                          dangerouslySetInnerHTML={{ __html: props?.carDetail?.car[0]?.description }}>                     
                {/* {props?.carDetail?.car[0]?.description} */}
              </div>
            </div>
            <div className={`${style.carImgWrapper} col-xl-8 col-md-12`} >
            <div className={`${style.carImg}`} style={{backgroundImage: `url("${props?.carDetail?.car[0]?.image?.avatar}")`}}></div>
            </div>
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
                  {props?.carDetail?.car[0]?.specification?.acceleration + " giây"}
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
  isLoggedIn: state.login.isLoggedIn,
  carDetail: state.carDetail,
  user: state.carList.user,
  loading2: state.carList.loading2
});

const mapDispatchToProps = (dispatch) => ({
  getCarByID: (params) => {
    dispatch(getCarByID(params));
  },
  addCarToWishlist: (data) => {
    dispatch(addCarToWishlist(data));
  },
  getUserForWishListCar: (params) => {
    dispatch(getUserForWishListCar(params));
  },
  deleteWishList: (params) => {
    dispatch(deleteWishList(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);
