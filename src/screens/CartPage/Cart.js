import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, message, Modal, Select, Spin } from "antd";
import { Link } from "react-router-dom";
import {
  CarOutlined,
  PlusCircleOutlined,
  CheckCircleOutlined,
  PlusSquareOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { getCart, updateCart, createBill, getMe } from "./action";
import money from "../../components/Share/functions/money";
import Layout from "../../components/layout";
import style from "./Cart.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartList from "../../components/Cart/CartList";
import AddressSelect from "../../components/Share/AddressSelect";
import {verify} from "../LoginPage/action"

const { Option } = Select;

function Cart(props) {
  const [price, setPrice] = useState(5);
  const [place, setPlace] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalValidate, setIsModalValidate] = useState(false);
  const [loading, setLoading] = useState(true)
  const [isDataEmpty, setIsDataEmpty] = useState(false)

  useEffect(() => {
    props.verify();
    props.getCart();
  }, []);

  useEffect(() => {
    if (props.loading === false && props.loading2 === false)
      setLoading(false);
    else
      setLoading(true);
  }, [props.loading, props.loading2]);

  const showModal = () => {
    props.getMe();
    setIsModalVisible(true);
  };

  const handleModalValidate = (value) => {
    setIsModalValidate(value);
  };

  const handleUpdateCart = (value) => {
    props.updateCart(value);
  };

  const onChangePrice = (value) => {
    setPrice(value);
  };

  const handlePlace = (value) => {
    setPlace(value);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmitCart = () => {
    if (!isModalValidate) {
      message.error("Chưa điền đầy đủ địa chỉ");
    } else {
      let params = {
        place: place,
        totalPrice: price,
        deliveryMethod: "COD",
      };
      props.createBill(params);
      handleCancel();
    }
  };

  return (
    <Layout>
        <Spin size="large" spinning={loading}>{
          (
        <>
          <div className={`${style.cartContainer}`}>
            <div className={`${style.imgWrapper}`}></div>
            <div className={`${style.main}`}>
              <div className={`${style.headingWrapper} row`}>
                <h1 className={`${style.heading} col`}>Giỏ Hàng</h1>
              </div>
              <div className={`${style.caculationWrapper} row`}>
                <div
                  className={`${style.productsWrapper} col col-xl-8 col-md-8 col-12`}
                >
                  <div
                    className={`${style.mainColumn} row d-xl-flex d-sm-none d-none`}
                  >
                    <h3 className={`${style.column} col-xl-8`}>SẢN PHẨM</h3>
                    <h3 className={`${style.column} col-xl-2`}>SỐ LƯỢNG</h3>
                    <h3 className={`${style.column} col-xl-2`}>GIÁ</h3>
                  </div>

                  <CartList
                    spinning={props.carts.loading}
                    data={props.carts.carts}
                    newCart={handleUpdateCart}
                    totalPrice={onChangePrice}
                  >
                    {" "}
                  </CartList>

              <div className={`${style.endMain} row`}>
                <div className={`${style.addToWishList} endMainCol col-xl-6`}>
                  <PlusSquareOutlined /> &nbsp; &nbsp;
                  <a> THÊM GIỎ HÀNG VÀO DANH SÁCH YÊU THÍCH</a>
                </div>
                <div className={`${style.continue} col-xl-6`}>
                  <Link to="/home">TIẾP TỤC MUA SẮM</Link> &nbsp; &nbsp; <RightCircleOutlined />
                </div>
              </div>
            </div>
            <div className={`${style.cartSummaryWrapper} col col-xl-4 col-md-4 col-12`}>
              <div className={`${style.cartSummary} `}>
                <div className={`row`}>
                  <h2 className={`${style.summaryTitle} col-xl-12 col-md-12`}>
                    TỔNG GIỎ HÀNG:
                  </h2>
                </div>
                <div className={`${style.shippingPolicy} row`}>
                  <div className={`${style.subTitle} col-xl-6 col-md-12`}>
                    <CarOutlined /> Phí vận chuyển
                    <br></br>
                    {/* <div className={`${style.shippingMessage}`}>
                        Bạn sẽ được miễn phí <br></br>nếu đơn hàng trên 2 000 000
                      </div> */}
                  </div>
                  <div className={`${style.number} col-xl-6 col-md-12`}>
                    50 000 VND
                  </div>
                </div>
                <div className={`${style.totalAllProduct} row`}>
                  <div className={`${style.subTitle} col-xl-6 col-md-12`}>
                    <PlusCircleOutlined /> Tổng tiền sản phẩm
                  </div>
                  <div className={`${style.number} col-xl-6 col-md-12`}>
                    {money(price, "VND")}
                  </div>
                </div>
                {/* <div className={`${style.discount} row`}>
                    <div className={`${style.subTitle} col-xl-6 col-md-12`}>
                      <MinusCircleOutlined /> Giảm giá
                    </div>
                    <div className={`${style.number} col-xl-6 col-md-12`}>
                      -200 000
                    </div>
                  </div> */}
                <div className={`${style.totalDue} row`}>
                  <h3 className={` ${style.sumTitle} col-xl-6 col-md-12`}>
                    <CheckCircleOutlined /> TỔNG CỘNG
                  </h3>
                  <div className={`${style.number} col-xl-6 col-md-12`}>
                    {price ? money(price + 50000, "VND") : '0 VNĐ'}
                  </div>
                </div>
                <div className={`${style.checkout} row`}>
                  <Button
                    disabled={isDataEmpty}
                    className={`${style.checkoutButton} col-xl-11`}
                    type="primary"
                    onClick={showModal}
                  >
                    THANH TOÁN
                  </Button>
                </div>
                {/* <div className={`${style.couponCode} row`}> */}
                {/* <Menu
                      className={`${style.couponCodeTitle} col-xl-11`}
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      mode="inline"
                    >
                      <SubMenu
                        key="sub1"
                        icon={<TagsOutlined />}
                        title="MÃ GIẢM GIÁ (NẾU CÓ)"
                      >
                        {/* <Input
                      placeholder="ĐIỀN MÃ GIẢM GIÁ"
                      enterButton="Search"
                    /> */}
                    {/* <Space
                          className={`${style.inputCoupon}`}
                          direction="vertical"
                        >
                          <Search
                            placeholder="Điền mã giảm giá"
                            allowClear
                            enterButton="Áp dụng"
                            size="large"
                          />
                        </Space>
                      </SubMenu>
                    </Menu> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            title="Xác nhận thông tin"
            visible={isModalVisible}
            closable={true}
            onOk={handleSubmitCart}
            onCancel={handleCancel}
          >
            <p>Tên người nhận: {props?.carts?.userInfo?.name}</p>
            <p>Số điện thoại: {props?.carts?.userInfo?.info?.phoneNumber}</p>

            <AddressSelect
              modalValidate={handleModalValidate}
              address={handlePlace}
            ></AddressSelect>

            <p>Phương thức vận chuyển*</p>
            <Select defaultValue={"COD"} style={{ width: 200 }}>
              <Option key="COD" disabled>
                COD
              </Option>
            </Select>
          </Modal>
        </>
      )}
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  carts: state.cart,
  isLoggedIn: state.isLoggedIn,
  loading: state.cart.loading,
  loading2: state.login.loading
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (params) => {
    dispatch(getCart(params));
  },
  updateCart: (params) => {
    dispatch(updateCart(params));
  },
  createBill: (params) => {
    dispatch(createBill(params));
  },
  getMe: (params) => {
    dispatch(getMe(params));
  },
  verify: (params) => {
    dispatch(verify(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
