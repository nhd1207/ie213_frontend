import React, { useEffect, useState } from "react";
import style from "./AccessoryList.module.css";
import { Button, Modal } from "react-bootstrap";
import "antd/dist/antd.css";
import Card from "react-bootstrap/Card";
import Layout from "../../components/layout";
import { Pagination } from "antd";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getWishList, deleteWishList } from "../WishListPage/action";
import { getListAccessory, addAccessoryToWishlist, filter } from "./action";
import { Menu, Spin, Slider } from "antd";
import { HeartFilled, SettingOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import money from "../../components/Share/functions/money";
import { useHistory } from "react-router-dom";

const { Search } = Input;
const { SubMenu } = Menu;

function Accessory(props) {
  const [wishList, setWishList] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [filterValue, setFilterValue] = useState({
    color: null,
    limit: null,
    page: null,
    priceMin: null,
    priceMax: null,
    sort: "name",
    field: ["name", "code", "price", "amount", "image"],
    keyword: null,
  });
  var pageSize = 4;

  const marks = {
    30: "0°C",
    100: {
      style: {
        color: "#f50",
      },
      label: <strong>max</strong>,
    },
  };

  useEffect(() => {
    props.getWishList();
    props.getListAccessory();
    setTotalPage(props.accessories?.accessories?.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
    console.log(props);
  }, []);

  useEffect(() => {
    setWishList({ ...props?.wishList?.wishList });
  }, [props.wishList.wishList]);

  useEffect(() => {
    if (props.accessories.loading) {
      if (props.wishList.loading) setLoading(true);
      else setLoading(true);
    } else setLoading(true);
    if (props.accessories.loading === false && props.wishList.loading === false)
      setLoading(false);
  }, [props.accessories.loading, props.wishList.loading]);

  useEffect(() => {
    props?.accessories?.accessories?.map((accessory) => {
      props?.wishList?.wishList?.accessories?.forEach((item) => {
        if (item._id === accessory._id) {
          return (accessory.isLiked = true);
        }
      });
    });
  }, [
    props.accessories.loading,
    props?.wishList?.wishList?.accessories,
    props.wishList.loading,
  ]);

  const handleFilter = (filterValue) => {
    let params = "";
    for (let key in filterValue) {
      if (filterValue[key] === null) {
      } else if (key === "priceMin") {
        params = params + "price[gte]" + "=" + filterValue[key] + "&";
      } else if (key === "priceMax") {
        params = params + "price[lt]" + "=" + filterValue[key] + "&";
      } else {
        params = params + key + "=" + filterValue[key] + "&";
      }
    }
    params = params.slice(0, -1);
    props.filter(params);
  };

  const handleClick = (e) => {
    // console.log("click ", e);
  };

  const handleDeleteWishListItem = (value) => {
    let wishList2;
    let index1;
    wishList2 = { ...wishList };
    wishList2.accessories.map((item, index) => {
      if (item._id === value) index1 = index;
    });
    wishList2.accessories.splice(index1, 1);
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

  const toggleClass = (e, value, item, index) => {
    if (props.isLoggedIn === false) {
      setShow(true);
      e.preventDefault();
    } else {
      if (!item.isLiked) {
        let element = e.target.parentElement.parentElement;
        element.classList.toggle(`${style.heartIconClicked}`);
        props.addAccessoryToWishlist({ itemId: value });
      } else {
        e.preventDefault();
        let element = e.target.parentElement.parentElement;
        element.classList.toggle(`${style.heartIconClicked}`);
        handleDeleteWishListItem(value);
      }
    }
  };

  const history = useHistory();

  function loginHandler() {
    history.push("/login");
  }

  const handleFilterValue = (value, type) => {
    let params;
    switch (type) {
      case "name_asc":
        params = { ...filterValue, sort: "name" };
        setFilterValue(params);
        break;
      case "name_desc":
        params = { ...filterValue, sort: "-name" };
        setFilterValue(params);
        break;
      case "price_asc":
        params = { ...filterValue, sort: "price" };
        setFilterValue(params);
        break;
      case "price_desc":
        params = { ...filterValue, sort: "-price" };
        setFilterValue(params);
        //handleFilter(params)
        break;
      case "search":
        params = { ...filterValue, keyword: value.trim() };
        setFilterValue(params);
        //handleFilter(params)
        break;
      default:
        return;
    }
    handleFilter(params);
  };

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  return (
    <Layout>
      <Spin size="large" spinning={loading}>
        <div className={`${style.container}`}>
          <div className={`${style.headingContainer}`}>
            <div className={`${style.headings} row`}>
              <h2 className={`${style.heading} col-xl-4`}>CÁC PHỤ KIỆN</h2>
              <Space
                direction="vertical"
                className={`${style.searchGroup} col-xl-6`}
              >
                <Search
                  className={`${style.searchBox}`}
                  placeholder="Nhập tên phụ kiện"
                  onSearch={(e) => handleFilterValue(e, "search")}
                  enterButton
                />
              </Space>
            </div>
          </div>
          <div className={`${style.main} row`}>
            <div
              className={`${style.filterContainer} col col-xl-2 col-lg-3 col-md-4 d-none d-md-block row`}
            >
              <h3 className={`${style.headingNumber} col-xl-12`}>
                {props.accessories?.accessories?.length} sản phẩm
              </h3>
              <Menu
                onClick={handleClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className={`${style.filter} col-xl-12`}
              >
                <div className={`${style.rangeInput}`}>
                  <>
                    <Form.Label>Công Suất</Form.Label>
                    <Form.Range />
                  </>
                </div>
                <SubMenu
                  key="sub1"
                  icon={<SettingOutlined />}
                  title="Tên xe"
                  onClick={(e) => handleFilterValue(null, e.key)}
                >
                  <Menu.Item key="name_asc">A-Z</Menu.Item>
                  <Menu.Item key="name_desc">Z-A</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<SettingOutlined />}
                  title="Giá"
                  onClick={(e) => handleFilterValue(null, e.key)}
                >
                  <Slider
                    defaultValue={0}
                    min={30}
                    max={100}
                    marks={marks}
                    onChange={(e) => handleFilterValue(e, "power")}
                  />
                  <Menu.Item key="price_asc">Tăng dần</Menu.Item>
                  <Menu.Item key="price_desc">Giảm dần</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div
              className={`${style.cardContainer} col col-xl-10 col-lg-9 col-md-8`}
            >
              <div className={`row no-gutters`}>
                {props.accessories?.accessories?.map((item, index) => {
                  let myStyle = {
                    backgroundImage: `url(${item.image.avatar})`,
                  };
                  if (index >= minIndex && index < maxIndex)
                    return (
                      <div className="col col-xl-4 col-md-6 col-12">
                        <Card className={`${style.card}`}>
                          <Card.Img
                            className={`${style.image}`}
                            style={myStyle}
                          />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{money(item?.price, "VNĐ")}</Card.Text>
                            <div className={`${style.btnWrapper}`}>
                              <NavLink
                                to={`/accessory/${item._id}`}
                                className="btn btn-sm btn-primary"
                              >
                                Chi tiết phụ kiện
                              </NavLink>
                              {item.isLiked ? (
                                <HeartFilled
                                  onClick={(e) =>
                                    toggleClass(e, item._id, item, index)
                                  }
                                  className={`${style.heartIcon} ${style.heartIconClicked}`}
                                />
                              ) : (
                                <HeartFilled
                                  onClick={(e) =>
                                    toggleClass(e, item._id, item, index)
                                  }
                                  className={`${style.heartIcon}`}
                                />
                              )}
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                })}
                <div className={`${style.pagination} row`}>
                  <Pagination
                    pageSize={pageSize}
                    current={current}
                    total={props?.accessories?.accessories?.length}
                    onChange={handleChange}
                    style={{ bottom: "0px" }}
                  />
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
  accessories: state.accessoryPage,
  wishList: state.wishList,
});

const mapDispatchToProps = (dispatch) => ({
  getListAccessory: (params) => {
    dispatch(getListAccessory(params));
  },
  addAccessoryToWishlist: (data) => {
    dispatch(addAccessoryToWishlist(data));
  },
  filter: (params) => {
    dispatch(filter(params));
  },
  getWishList: (params) => {
    dispatch(getWishList(params));
  },
  deleteWishList: (params) => {
    dispatch(deleteWishList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accessory);
