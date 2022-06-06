import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Spin, Input, Space, Tag, Row,Pagination  } from "antd";
import { HeartFilled, MenuOutlined, DollarOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Layout from "../../components/layout";
import { getListAccessory, addAccessoryToWishlist, filter } from "./action";
import { getWishList, deleteWishList } from "../WishListPage/action";
import money from "../../components/Share/functions/money";
import style from "./AccessoryList.module.css";

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
    limit: 10000,
    page: null,
    priceMin: null,
    priceMax: null,
    sort: null,
    keyword: null,
    //field: ["name", "code", "price", "amount", "image"],
  });
  const [tags, setTags] = useState([]); // state to handle tag
  const [isFilterPrice, setIsFilterPrice] = useState(false); // state to check price input filter has used yet?
  const [priceFilter, setPriceFilter] = useState({ //state to binding to input value
    priceMin: null,
    priceMax: null
  });
  const history = useHistory();
  var pageSize = 9;

  useEffect(() => {
    props.getWishList();
    props.getListAccessory();
    setTotalPage(props.accessories?.accessories?.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
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

  useEffect(() => { //use effect for tag
    let tagAray = [];
    for (let key in filterValue) {
      if (filterValue[key] === null || key === "keyword" || key === "field" ||key === "limit") {
      } else {
        tagAray.push(
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              handleTag(key);
            }}
          >
            {key === "priceMax"
              ? "Giá tối đa"
              : key === "priceMin"
                ? "Giá tối thiểu"
                : key === "sort"
                  ? filterValue[key] === "name"
                    ? "Tên tăng dần"
                    : filterValue[key] === "-name"
                      ? "Tên giảm dần"
                      : filterValue[key] === "price"
                        ? "Giá tăng dần"
                        : "Giá giảm dần"
                  : ""}
            {key === "sort" ? "" : ": " + money(filterValue[key], "VNĐ")}
          </Tag>
        );
      }
    }
    setTags([...tagAray]);
  }, [filterValue]);

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

  const toggleClass = (e, value, item) => {
    if (props.isLoggedIn === false) {
      setShow(true);
      e.preventDefault();
    } else {
      if (!item.isLiked) {
        e.preventDefault();
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

  function loginHandler() {
    history.push("/login");
  }

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  //begin handle filter
  const handleFilter = (filterValue) => {  //function to call api and reload page
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

  const handleFilterValue = (value, type) => { // function to handle change of value in filter
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
      case "price":
        params = { ...filterValue };
        setFilterValue(params);
        break;
      default:
        return;
    }
    handleFilter(params);
  };

  const setPrice = (e, type) => { //function to set value for input price Min and Max
    let params;
    let paramForPriceFilter;
    if (type === "min") {
      params = { ...filterValue, priceMin: e.target.value };
      paramForPriceFilter = { ...priceFilter, priceMin: e.target.value }
      setPriceFilter({ ...paramForPriceFilter })
    } else if (type === "max") {
      params = { ...filterValue, priceMax: e.target.value };
      paramForPriceFilter = { ...priceFilter, priceMax: e.target.value }
      setPriceFilter({ ...paramForPriceFilter })
    } else {
      return;
    }
    if (!priceFilter.priceMin && !priceFilter.priceMax) {
      setIsFilterPrice(false);
    } else {
      setIsFilterPrice(true);
    }
    setFilterValue(params);
  };

  const handleTag = (keys) => { //function to set value of close tag to null
    let params = { ...filterValue };
    for (let key in params) {
      if (key === keys) params[key] = null;
    }
    setFilterValue(params);
    handleFilter(params);
  };

  const cancelAll = () => {
    let params = { ...filterValue };
    for (let key in params) {
      if (key !='field' && key!='keyword' && key!='limit') params[key] = null;
    }
    setFilterValue(params);
    handleFilter(params);
  };
  //end handle filter

  return (
    <Layout>
      <Spin size="large" spinning={loading}>
        <div className={`${style.container}`}>
          <div className={`${style.headingContainer}`}>
            <div className={`${style.headings} row`}>
              <h2 className={`${style.heading} col-xl-2`}>CÁC PHỤ KIỆN</h2>
              <Space
                direction="vertical"
                className={`${style.searchGroup} col-xl-10`}
              >
                <Search
                  className={`${style.searchBox}`}
                  placeholder="Nhập tên phụ kiện"
                  onSearch={(e) => handleFilterValue(e, "search")}
                  enterButton="Tìm kiếm"
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
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className={`${style.filter} col-xl-12`}
              >
                <div className={`${style.rangeInput}`}>
                  <>
                    <Form.Label>Bộ Lọc: </Form.Label>
                    {tags?.map((item) => item)}
                  </>
                </div>
                <SubMenu
                  key="sub1"
                  icon={<MenuOutlined />}
                  title="Tên xe"
                  onClick={(e) => handleFilterValue(null, e.key)}
                >
                  <Menu.Item key="name_asc">A-Z</Menu.Item>
                  <Menu.Item key="name_desc">Z-A</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<DollarOutlined />}
                  title="Giá"
                  onClick={(e) => handleFilterValue(null, e.key)}
                >
                  <Input.Group size="medium">
                    <Row>
                      <Input
                        type={"number"}
                        value={priceFilter.priceMin}
                        placeholder={"Giá tối thiểu"}
                        onChange={(e) => {
                          setPrice(e, "min");
                        }}
                      />
                    </Row>
                    <Row>
                      <Input
                        type={"number"}
                        value={priceFilter.priceMax}
                        placeholder={"Giá tối đa"}
                        onChange={(e) => {
                          setPrice(e, "max");
                        }}
                      />
                    </Row>
                    <p>(VNĐ)</p>
                  </Input.Group>
                  <Button
                    disabled={!isFilterPrice}
                    onClick={(e) => handleFilterValue(e, "price")}
                  >
                    Lọc giá
                  </Button>
                  <Menu.Item key="price_asc">Tăng dần</Menu.Item>
                  <Menu.Item key="price_desc">Giảm dần</Menu.Item>
                </SubMenu>
                <Button
                  className={'btn btn-warning'}
                  onClick={cancelAll}
                >
                  Đặt lại tất cả
                </Button>
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
                      <div key={index} className="col col-xl-4 col-md-6 col-12">
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