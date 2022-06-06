import style from "./car.module.css";
import "antd/dist/antd.css";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  getListCar,
  filter,
  addCarToWishlist,
  getUserForWishListCar,
} from "./action";
import { deleteWishList } from "../WishListPage/action";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, Spin, Pagination, Input, Row, Tag } from "antd";
import {
  HeartFilled,
  ThunderboltOutlined,
  DollarOutlined,
  MenuOutlined,
  CarOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space } from "antd";
import money from "../../components/Share/functions/money";
import { useHistory } from "react-router-dom";
const { Search } = Input;

const { SubMenu } = Menu;

function Car(props) {
  const [wishList, setWishList] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const history = useHistory();
  const [filterValue, setFilterValue] = useState({
    color: null,
    limit: 10000,
    page: null,
    priceMin: null,
    priceMax: null,
    sort: null,
    keyword: null,
    year: null,
    model: null
    //field: ["name", "code", "price", "amount", "image"],
  });

  const [tags, setTags] = useState([]);
  const [isFilterPrice, setIsFilterPrice] = useState(false);
  const [priceFilter, setPriceFilter] = useState({
    priceMin: null,
    priceMax: null
  });

  var pageSize = 6;

  useEffect(() => {
    props.getUserForWishListCar();
    props.getListCar();
    setTotalPage(props?.cars?.cars?.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  useEffect(() => {
    setWishList({ ...props?.user?.wishList });
  }, [props.user.wishList]);

  useEffect(() => {
    let tagAray = [];
    for (let key in filterValue) {
      if (filterValue[key] === null || key === "keyword" || key === "field" || key === "limit") {
      } else {
        tagAray.push(
          <Tag
          style={{overflow: 'hidden'}}
            closable
            onClose={(e) => {
              e.preventDefault();
              handleTag(key);
            }}
          >
            {key === "priceMax" //tag hien thi trươc
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
            {key === "sort" // tag hien thị sau
              ? ""
              : key === "model"
                ? filterValue[key]
                : key === "year"
                  ? filterValue[key]
                  : ": " + money(filterValue[key], "VNĐ")}
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
    wishList2.cars.map((item, index) => {
      if (item._id === value) index1 = index;
    });
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

  useEffect(() => {
    props?.cars?.cars?.map((car) => {
      props?.user?.wishList?.cars.forEach((item) => {
        if (item._id === car._id) {
          return (car.isLiked = true);
        }
      });
    });
  }, [props.cars.loading, props?.user?.wishList?.cars, props.cars.loading2, props?.cars?.cars]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.cars.loading) {
      if (props.cars.loading2)
        setLoading(true);
      else setLoading(true)
    } else setLoading(true);
    if (props.cars.loading === false && props.cars.loading2 === false)
      setLoading(false);
  }, [props.cars.loading, props.cars.loading2]);

  const handleFilter = (filterValue) => { //function to call api
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

  const toggleClass = (e, value, car, index) => {
    // console.log(props);
    if (props.isLoggedIn === false) {
      e.preventDefault();
      setShow(true);
      let element = e.target.parentElement.parentElement;
      element.classList.className = `${style.heartIcon}`;
    } else {
      if (!car.isLiked) {
        e.preventDefault();
        let element = e.target.parentElement.parentElement;
        element.classList.toggle(`${style.heartIconClicked}`);
        props.addCarToWishlist({ itemId: value });
      } else {
        e.preventDefault();
        let element = e.target.parentElement.parentElement;
        element.classList.toggle(`${style.heartIconClicked}`);
        handleDeleteWishListItem(value);
      }
    }
  };

  const handleFilterValue = (value, type) => { //function to chage value of filter
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
      case "model":
        params = { ...filterValue, model: value };
        setFilterValue(params);
        break;
      case "year":
        params = { ...filterValue, year: value };
        setFilterValue(params);
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function loginHandler() {
    history.replace("/login");
  }

  const setPrice = (e, type) => {
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

  const handleTag = (keys) => {
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

  return (
    <Layout>
      <Spin size="large" spinning={loading}>
        <div className={`${style.container}`}>
          <div className={`${style.headingContainer}`}>
            <div className={`${style.headings} row`}>
              <h2 className={`${style.heading} col-xl-2`}>CÁC DÒNG XE</h2>
              <Space
                direction="vertical"
                className={`${style.searchGroup} col-xl-10`}
              >
                <Search
                  className={`${style.searchBox} `}
                  placeholder="Nhập tên xe"
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
                {props.cars?.cars?.length} chiếc
              </h3>
              <Menu
                // onClick={handleClick}
                //defaultSelectedKeys={["1"]}
                //defaultOpenKeys={["sub1"]}
                mode="inline"
                className={`${style.filter} col-xl-12`}
              >
                <div className={`${style.rangeInput}`}>
                  <>
                    <Form.Label>Bộ Lọc: </Form.Label>
                    <Space>
                    {tags?.map((item) => item)}
                    </Space>
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
                        maxLength={2}
                        type={"number"}
                        value={priceFilter.priceMin}
                        placeholder={"Giá tối thiểu (VNĐ)"}
                        onChange={(e) => {
                          setPrice(e, "min");
                        }}
                      />
                    </Row>
                    <Row>
                      <Input
                        type={"number"}
                        value={priceFilter.priceMax}
                        placeholder={"Giá tối đa (VNĐ)"}
                        onChange={(e) => {
                          setPrice(e, "max");
                        }}
                      />
                    </Row>
                    {/* <p>(VNĐ)</p> */}
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
                <SubMenu
                  icon={<CarOutlined />}
                  title="Dòng"
                  onClick={(e) => handleFilterValue(e.key, 'model')}
                >
                  {props?.models?.map((item, index) => {
                    return (<Menu.Item key={item}>{item}</Menu.Item>)
                  })}
                </SubMenu>
                <SubMenu
                  icon={<CalendarOutlined />}
                  title="Năm"
                  onClick={(e) => handleFilterValue(e.key, 'year')}
                >
                  {props?.years?.map((item, index) => {
                    return (<Menu.Item key={item}>{item}</Menu.Item>)
                  })}
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
              <div className={`row`}>
                {props.cars?.cars?.map((car, index) => {
                  let myStyle = {
                    backgroundImage: `url(${car?.image?.avatar})`,
                  };
                  if (index >= minIndex && index < maxIndex)
                    return (
                      <Link
                        className={"col col-xl-6 col-sm-12 col-12"}
                        key={car?._id}
                        to={`/car/${car?._id}`}
                      >
                        <div className={`${style.card}`}>
                          <div
                            className={`${style.imgMain}`}
                            style={myStyle}
                          ></div>
                          <div className={`${style.img1}`}></div>
                          <div className={`${style.img2}`}></div>
                          <div className={`${style.img3}`}></div>
                          <div className={`${style.description}`}>
                            {/* <LeftOutlined
                            className={`${style.arrowIcon} d-none d-md-block`}
                          /> */}
                            <div className={`${style.descGroup}`}>
                              <h4 className={`${style.text} ${style.carName}`}>
                                {car.name}
                              </h4>
                              <h4 className={`${style.text}`}>{car?.model}</h4>
                              <h4 className={`${style.text}`}>
                                {money(car?.price, "VNĐ")}
                              </h4>
                            </div>

                            <ThunderboltOutlined
                              className={`${style.arrowIcon} d-none d-md-block`}
                            />
                          </div>
                          {car.isLiked ? (
                            <HeartFilled
                              onClick={(e) =>
                                toggleClass(e, car._id, car, index)
                              }
                              className={`${style.heartIcon} ${style.heartIconClicked}`}
                            />
                          ) : (
                            <HeartFilled
                              onClick={(e) =>
                                toggleClass(e, car._id, car, index)
                              }
                              className={`${style.heartIcon}`}
                            />
                          )}
                        </div>
                      </Link>
                    );
                })}
              </div>
              <div className={`${style.pagination} row`}>
                <Pagination
                  pageSize={pageSize}
                  current={current}
                  total={props?.cars?.cars?.length}
                  onChange={handleChange}
                  style={{ bottom: "0px" }}
                />
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
  cars: state.carList,
  models: state.carList.models,
  years: state.carList.years,
  user: state.carList.user,
  // wishList: state.wishList
});

const mapDispatchToProps = (dispatch) => ({
  getListCar: (params) => {
    dispatch(getListCar(params));
  },
  filter: (params) => {
    dispatch(filter(params));
  },
  addCarToWishlist: (data) => {
    dispatch(addCarToWishlist(data));
  },
  getUserForWishListCar: (params) => {
    dispatch(getUserForWishListCar(params));
  },
  deleteWishList: (params) => {
    dispatch(deleteWishList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);