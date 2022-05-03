import React from "react";
import style from "./Cart.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  TagsOutlined,
  CarOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  CheckCircleOutlined,
  PlusSquareOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

import { InputNumber, Space } from "antd";
import { Button } from "antd";

import { Menu, Input } from "antd";
const { SubMenu } = Menu;
const { Search } = Input;

export default function Cart() {
  return (
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
            {/* list product */}
            <div className={`${style.product} row`}>
              <img className={`${style.productImg} col-xl-4 col-md-12`}></img>
              <div className={`${style.productDetail} col-xl-4 col-md-12`}>
                <div className={`${style.productName} row`}> Ten San Pham </div>
                <div className={`${style.productDesc} row`}>
                  {" "}
                  Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                  pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                  vip pro
                </div>
              </div>
              <div className={`${style.productQty} col-xl-2 col-md-12`}>
                <Space>
                  <InputNumber
                    className={`${style.inputNumber}`}
                    defaultValue={1000}
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  />
                </Space>
                <Button
                  className={`${style.removeButton}`}
                  type="primary"
                  danger
                >
                  Xóa
                </Button>
              </div>
              <div className={`${style.productPrice} col-xl-2 col-md-12`}>
                1 000 000
              </div>
            </div>

            <div className={`${style.product} row`}>
              <img className={`${style.productImg} col-xl-4`}></img>
              <div className={`${style.productDetail} col-xl-4`}>
                <div className={`${style.productName} row`}> Ten San Pham </div>
                <div className={`${style.productDesc} row`}>
                  {" "}
                  Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                  pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                  vip pro
                </div>
              </div>
              <div className={`${style.productQty} col-xl-2`}>
                <Space>
                  <InputNumber
                    className={`${style.inputNumber}`}
                    defaultValue={1000}
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  />
                </Space>
                <Button
                  className={`${style.removeButton}`}
                  type="primary"
                  danger
                >
                  Xóa
                </Button>
              </div>
              <div className={`${style.productPrice} col-xl-2`}>1 000 000</div>
            </div>

            <div className={`${style.product} row`}>
              <img className={`${style.productImg} col-xl-4`}></img>
              <div className={`${style.productDetail} col-xl-4`}>
                <div className={`${style.productName} row`}> Ten San Pham </div>
                <div className={`${style.productDesc} row`}>
                  {" "}
                  Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                  pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                  vip pro
                </div>
              </div>
              <div className={`${style.productQty} col-xl-2`}>
                <Space>
                  <InputNumber
                    className={`${style.inputNumber}`}
                    defaultValue={1000}
                    formatter={(value) =>
                      `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  />
                </Space>
                <Button
                  className={`${style.removeButton}`}
                  type="primary"
                  danger
                >
                  Xóa
                </Button>
              </div>
              <div className={`${style.productPrice} col-xl-2`}>1 000 000</div>
            </div>
            {/* end list product */}
            <div className={`${style.endMain} row`}>
              <div className={`${style.addToWishList} endMainCol col-xl-6`}>
                <PlusSquareOutlined /> &nbsp; &nbsp;
                <a> Thêm giỏ hàng vào danh sách yêu thích</a>
              </div>
              <div className={`${style.continue} col-xl-6`}>
                <a>Tiếp tục mua sắm</a> &nbsp; &nbsp; <RightCircleOutlined />
              </div>
            </div>
          </div>

          <div
            className={`${style.cartSummaryWrapper} col col-xl-4 col-md-4 col-12`}
          >
            <div className={`${style.cartSummary} `}>
              <div className={`row`}>
                <h2 className={`${style.summaryTitle} col-xl-12 col-md-12`}>
                  TỔNG GIỎ HÀNG
                </h2>
              </div>
              <div className={`${style.shippingPolicy} row`}>
                <div className={`${style.subTitle} col-xl-6 col-md-12`}>
                  <CarOutlined /> Phí vận chuyển
                  <br></br>
                  <div className={`${style.shippingMessage}`}>
                    Bạn sẽ được miễn phí <br></br>nếu đơn hàng trên 2 000 000
                  </div>
                </div>
                <div className={`${style.number} col-xl-6 col-md-12`}>
                  50 000
                </div>
              </div>
              <div className={`${style.totalAllProduct} row`}>
                <div className={`${style.subTitle} col-xl-6 col-md-12`}>
                  <PlusCircleOutlined /> Tổng tiền sản phẩm
                </div>
                <div className={`${style.number} col-xl-6 col-md-12`}>
                  1 000 00
                </div>
              </div>
              <div className={`${style.discount} row`}>
                <div className={`${style.subTitle} col-xl-6 col-md-12`}>
                  <MinusCircleOutlined /> Giảm giá
                </div>
                <div className={`${style.number} col-xl-6 col-md-12`}>
                  -200 000
                </div>
              </div>
              <div className={`${style.totalDue} row`}>
                <h3 className={`${style.subTitle} col-xl-6 col-md-12`}>
                  <CheckCircleOutlined /> TỔNG CỘNG
                </h3>
                <div className={`${style.number} col-xl-6 col-md-12`}>
                  850 000
                </div>
              </div>
              <div className={`${style.checkout} row`}>
                <Button
                  className={`${style.checkoutButton} col-xl-11`}
                  type="primary"
                >
                  Thanh Toán
                </Button>
              </div>
              <div className={`${style.couponCode} row`}>
                <Menu
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
                    <Space
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
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
