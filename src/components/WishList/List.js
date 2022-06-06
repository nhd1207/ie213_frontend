import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../screens/WishListPage/WishList.module.css";
import { NavLink, Link } from "react-router-dom";
import {

  ShoppingCartOutlined,
  CarOutlined,
} from "@ant-design/icons";
import money from "../Share/functions/money";
import { Button } from "antd";

function List(props) {
  const [wishList, setWishList] = useState({});

  useEffect(() => {
    setWishList({ ...props.data });
  }, [props.data]);

  const handleDeleteWishListItem = (index) => {
    let wishList2;
    wishList2 = { ...wishList };
    wishList2.cars.splice(index, 1);
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
    props.deleteItem({ wishList: { ...wishList3 } });
  };

  const handleDeleteWishListItemAcc = (index) => {
    let wishList2;
    wishList2 = { ...wishList };
    wishList2.accessories.splice(index, 1);
    let wishList3 = {
      cars: [],
      accessories: [],
    };
    wishList3.cars = wishList2.cars.map((item) => {
      return item._id;
    });
    wishList3.accessories = wishList2?.accessories?.map((item) => {
      return item._id;
    });
    props.deleteItem({ wishList: { ...wishList3 } });
  };

  return (
    // <Spin spinning={props.spinning}>
    <div>
      <div className={`${style.carWrapper} row`}>
        <h2 className={`${style.listHeading}`}>Danh Sách Xe</h2>
        {props.data?.cars?.map((item, index) => {
          let myStyle = {
            backgroundImage: `url(${item.image.avatar})`,
          };
          return (
            <div className={`col-xl-12`}>
              <div className={`${style.product} row`}>
                <div
                  className={`${style.productImg} col-xl-4 col-md-12`}
                  style={myStyle}
                  alt="abc"
                ></div>
                <div className={`${style.productDetail} col-xl-4 col-md-12`}>
                  <div className={`${style.productName} row`}>
                    <Link to={`/car/${item._id}`}>{item.name}</Link>
                    {/* <HeartFilled className={`${style.heartIcon}`} /> */}
                  </div>
                  <div className={`${style.productDesc} row`}>
                    {item.special}
                  </div>
                </div>
                <div className={`${style.productPrice} col-xl-2 col-md-12`}>
                  <div>{money(item.price, "VND")}</div>
                </div>
                <div className={`${style.productButton} col-xl-2 col-md-12`}>
                  <div className={`row`}>
                    <NavLink to={`/order/${item._id}`}>
                      <Button
                        className={`${style.bookButton} col-xl-12`}
                        type="primary"
                        danger
                      >
                        <CarOutlined />
                        Đặt Xe Ngay
                      </Button>
                    </NavLink>
                  </div>
                  <div className={`row`}>
                    <Button
                      onClick={() => handleDeleteWishListItem(index)}
                      className={`${style.removeButton}`}
                      type="default"
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${style.accessoryWrapper} row`}>
        <h2 className={`${style.listHeading}`}>Danh Sách Phụ Kiện</h2>
        {props?.data?.accessories?.map((item, index) => {
          let myStyle = {
            backgroundImage: `url(${item.image.avatar})`,
          };
          return (
            <div className={`col-xl-12`}>
              <div className={`${style.product} row`}>
                <div
                  className={`${style.productImg} col-xl-4`}
                  style={myStyle}
                  alt="abc"
                ></div>
                <div className={`${style.productDetail} col-xl-4`}>
                  <div className={`${style.productName} row`}>
                    <Link to={`/accessory/${item._id}`}>
                      {/* <HeartFilled className={`${style.heartIcon}`} /> */}
                      {item.name}
                    </Link>
                  </div>
                  <div className={`${style.productDesc} row`}>{item.type}</div>
                </div>
                <div className={`${style.productPrice} col-xl-2`}>
                  <div>{money(item.price, "VND")}</div>
                </div>
                <div className={`${style.productButton} col-xl-2`}>
                  <div className={`row`}>
                    <NavLink to={`/accessory/${item._id}`}>
                      <Button
                        className={`${style.addButton} col-xl-12`}
                        type="primary"
                        danger
                      >
                        <ShoppingCartOutlined />
                        Thêm vào giỏ hàng
                      </Button>
                    </NavLink>
                  </div>
                  <div className={`row`}>
                    <Button
                      onClick={() => handleDeleteWishListItemAcc(index)}
                      className={`${style.removeButton}`}
                      type="default"
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // </Spin >
  );
}

export default List;
