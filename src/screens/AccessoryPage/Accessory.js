import React, { useEffect, useState } from "react";
import style from "./AccessoryList.module.css";
import { InputGroup } from "react-bootstrap";
import "antd/dist/antd.css";
import Card from "react-bootstrap/Card";
import Layout from "../../components/layout";
import { Pagination } from "antd";
import {
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getListAccessory, addAccessoryToWishlist, filter } from "./action";
import { Menu, Spin, Slider } from "antd";
import {
  HeartFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import money from "../../components/Share/functions/money";
const { Search } = Input;
const { SubMenu } = Menu;

function Accessory(props) {

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
    props.getListAccessory();
    setTotalPage(props.accessories?.accessories?.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize)
  }, []);

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

  const handleClick = (e) => {
    // console.log("click ", e);
  };

  const toggleClass = (e, value) => {
    let element = e.target.parentElement.parentElement;
    element.classList.toggle(`${style.heartIconClicked}`);
    props.addAccessoryToWishlist({ itemId: value })
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
    setMaxIndex(page * pageSize)
  };



  return (
    <Layout>
      <Spin size="large" spinning={props.accessories?.loading}>
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
                  onSearch={(e) =>handleFilterValue(e,'search') }
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
                          <Card.Text>            
                            {money(item?.price, "VNĐ")}
                            </Card.Text>
                          <div className={`${style.btnWrapper}`}>
                            <NavLink
                              to={`/accessory/${item._id}`}
                              className="btn btn-sm btn-primary"
                            >
                              Chi tiết phụ kiện
                            </NavLink>
                            <HeartFilled
                              onClick={(e) => toggleClass(e, item._id)}
                              className={`${style.heartIcon}`}
                            />
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
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  accessories: state.accessoryPage,
});

const mapDispatchToProps = (dispatch) => ({
  getListAccessory: (params) => {
    dispatch(getListAccessory(params));
  },
  addAccessoryToWishlist: (data) => {
    dispatch(addAccessoryToWishlist(data));
  }  ,
  filter: (params) => {
    dispatch(filter(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Accessory);
