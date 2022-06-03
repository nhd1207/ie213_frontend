import React, { useEffect, useState } from "react";
import { InputNumber, Space, Button, Empty } from "antd";
import money from "../Share/functions/money";
import style from "./Cart.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CartList(props) {
  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);
  const [update, setUpdate] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart3 = Object.assign([], props.data);
    const cart4 = cart3.map((item) => {
      return {
        itemId: item.itemId,
        quantity: item.quantity,
        quantityTemp: item.quantity,
        color: item.color,
      };
    });
    setCart([...cart4]);
    setCart2([...cart4]);
  }, [props.data]);

  useEffect(() => {
    handleTotalPrice();
  }, [cart]);

  const handleTotalPrice = () => {
    // xử lý tính tổng tiền
    let total = 0;
    cart?.forEach((item) => {
      total += item.quantity * item?.itemId?.price;
    });
    setTotalPrice(total);
    props.totalPrice(total);
  };

  const handleAmount = (value, id) => {
    // xử lý sự thay đổi số lượng
    setUpdate(false);
    const cart3 = [...cart2];
    cart3[id].quantity = value;
    setCart2([...cart3]);
  };

  const handleUpdateCart = () => {
    // xử lý khi update
    let cart3;
    cart3 = cart2
      .filter((item) => {
        return !item.disabled;
      })
      .map((item) => {
        return {
          itemId: item.itemId._id,
          quantity: item.quantity,
          color: item.color,
        };
      });
    props.newCart({ cart: cart3 });
    props.totalPrice(totalPrice);
    setUpdate(true);
  };

  const handleCancelUpdateCart = () => {
    // xử lý khi hủy update
    let cart3;
    setUpdate(true);
    cart3 = [...cart2];
    let cart4 = cart3.map((item) => {
      return {
        itemId: item.itemId,
        quantity: item.quantityTemp,
        color: item.color,
        quantityTemp: item.quantityTemp,
      };
    });
    setCart([...cart4]);
    setCart2([...cart4]);
  };

  const handleDeleteCartItem = (index) => {
    //xử lý khi xóa item
    let cart3;
    setUpdate(false);
    cart3 = [...cart];
    cart3[index].disabled = true;
    setCart([...cart3]);
    setCart2([...cart3]);
  };

  return (
    <div>
      {/* <Spin spinning={props.spinning}> */}
        {cart.length === 0 ? (
          <Empty description={<span>Giỏ hàng trống</span>}></Empty>
        ) : (
          cart?.map((item, index) => {
            // let myStyle = {
            //   src: `${item?.itemId?.image?.avatar}`,
            // };
            return (
              <div
                style={
                  item.disabled ? { pointerEvents: "none", opacity: "0.4" } : {}
                }
                className={`${style.product} row`}
              >
                <img
                  className={`${style.productImg} col-xl-4 col-md-12`}
                  //   style={myStyle}
                  src={item?.itemId?.image?.avatar}
                  alt="abc"
                ></img>
                <div className={`${style.productDetail} col-xl-4 col-md-12`}>
                  <div className={`${style.productName} row`}>
                    {" "}
                    {item?.itemId?.name}{" "}
                  </div>
                  <div className={`${style.productDesc} row`}>
                    {item?.color}
                  </div>
                </div>
                <div className={`${style.productQty} col-xl-2 col-md-12`}>
                  <Space>
                    <InputNumber
                      className={`${style.inputNumber}`}
                      defaultValue={item?.quantityTemp}
                      value={item?.quantity}
                      min="1"
                      onChange={(e) => handleAmount(e, index)}
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
                    onClick={() => handleDeleteCartItem(index)}
                  >
                    XÓA
                  </Button>
                </div>
                <div className={`${style.productPrice} col-xl-2 col-md-12`}>
                  {money(item?.itemId?.price, "VND")}
                </div>
              </div>
            );
          })
        )}
        <div className={`${style.buttonUD} row`}>
          <button
            disabled={update}
            onClick={handleUpdateCart}
            className={`${style.buttonCss} ${style.updateCart} col-xl-2`}
          >
            CẬP NHẬT
          </button>
          <button
            disabled={update}
            onClick={handleCancelUpdateCart}
            className={`${style.buttonCss} ${style.deleteCart} col-xl-2`}
          >
            HỦY
          </button>
        </div>
      {/* </Spin> */}
    </div>
  );
}

export default CartList;
