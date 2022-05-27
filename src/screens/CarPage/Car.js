import style from "./car.module.css";
import { InputGroup } from "react-bootstrap";
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
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, Spin, Slider, Pagination } from "antd";
import {
  SettingOutlined,
  HeartFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
import money from "../../components/Share/functions/money";
const { Search } = Input;

const { SubMenu } = Menu;

function Car(props) {
  const [car, setCar] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
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

  var pageSize = 6;

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
    props.getUserForWishListCar();
    props.getListCar();
    setTotalPage(props?.cars?.cars?.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  useEffect(() => {
    props?.cars?.cars?.map((car) => {
      props?.user?.wishList?.cars.forEach((item) => {
        console.log("run ");
        if (item._id === car._id) {
          console.log(props?.cars?.cars);
          return (car.isLiked = true);
        }
      });
    });
  }, [props.cars.loading, props?.user?.wishList?.cars, props.cars.loading2]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.cars.loading) {
      if (props.cars.loading2) setLoading(true);
      else setLoading(true);
    } else setLoading(true);
    if (props.cars.loading === false && props.cars.loading2 === false)
      setLoading(false);
  }, [props.cars.loading, props.cars.loading2]);

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
    console.log("handleFilter", params);
    props.filter(params);
  };

  // const onSearch = (value) => {
  //   if (!value.trim()) {
  //     props.getListCar();
  //   } else props.search(value.trim());
  // };

  const toggleClass = (e, value) => {
    e.preventDefault();
    console.log("click ", e.target.parentElement.parentElement);
    let element = e.target.parentElement.parentElement;
    element.classList.toggle(`${style.heartIconClicked}`);
    props.addCarToWishlist({ itemId: value });
  };

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
              <h2 className={`${style.heading} col-xl-4`}>CÁC DÒNG XE</h2>
              <Space
                direction="vertical"
                className={`${style.searchGroup} col-xl-6`}
              >
                <Search
                  className={`${style.searchBox}`}
                  placeholder="Nhập tên xe"
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
                {props.cars?.cars?.length} chiếc
              </h3>
              <Menu
                // onClick={handleClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className={`${style.filter} col-xl-12`}
              >
                <div className={`${style.rangeInput}`}>
                  <>
                    <Form.Label>Bộ Lọc: {}</Form.Label>
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
                  {/* <Slider
                    defaultValue={0}
                    min={30}
                    max={100}
                    marks={marks}
                    onChange={(e) => handleFilterValue(e, "power")}
                  /> */}
                  <Menu.Item key="price_asc">Tăng dần</Menu.Item>
                  <Menu.Item key="price_desc">Giảm dần</Menu.Item>
                </SubMenu>
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
                              onClick={(e) => toggleClass(e, car._id)}
                              className={`${style.heartIcon} ${style.heartIconClicked}`}
                            />
                          ) : (
                            <HeartFilled
                              onClick={(e) => toggleClass(e, car._id)}
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
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cars: state.carList,
  user: state.carList.user,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Car);
