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
import { getListAccessory, addAccessoryToWishlist } from "./action";
import { Menu, Spin } from "antd";
import {
  HeartFilled,
  SettingOutlined,
} from "@ant-design/icons";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

function Accessory(props) {
  var pageSize = 6;

  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    props.getListAccessory();
    setTotalPage(props.accessories?.accessories?.accessory?.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize)
  }, []);

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize)
  };

  const handleClick = (e) => {
    // console.log("click ", e);
  };

  const toggleClass = (e,value) => {
    let element = e.target.parentElement.parentElement;
    element.classList.toggle(`${style.heartIconClicked}`);
    props.addAccessoryToWishlist({itemId: value})
  };


  return (
    <Layout>
      <Spin size="large" spinning={props.accessories?.loading}>
        <div className={`${style.container}`}>
          <div className={`${style.headingContainer} container`}>
            <div className={`${style.headings} `}>
              <h2 className={`${style.heading} `}>CÁC PHỤ KIỆN</h2>
              <InputGroup className={`${style.searchGroup} mb-3 `}>
                <InputGroup.Text
                  id="basic-addon1"
                  className={`${style.searchTitle}`}
                >
                  Search
                </InputGroup.Text>
                <FormControl
                  className={`${style.searchBox}`}
                  placeholder="Nhập tên phụ kiện"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <h3 className={`${style.headingNumber}`}>
              {props.accessories?.accessories?.accessory?.length} sản phẩm
            </h3>
          </div>
          <div className={`${style.main} row`}>
            <div
              className={`${style.filterContainer} col col-xl-2 col-lg-3 col-md-4 d-none d-md-block`}
            >
              <Menu
                onClick={handleClick}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className={`${style.filter}`}
              >
                <div className={`${style.rangeInput}`}>
                  <>
                    <Form.Label>Công Suất</Form.Label>
                    <Form.Range />
                  </>
                </div>
                <SubMenu key="sub1" icon={<SettingOutlined />} title="Dòng Xe">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<SettingOutlined />} title="Chỗ Ngồi">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div
              className={`${style.cardContainer} col col-xl-10 col-lg-9 col-md-8`}
            >
              <div className={`row no-gutters`}>
                {props.accessories?.accessories?.accessory?.map((item,index) => {
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
                          <Card.Text>{item.description}</Card.Text>
                          <div className={`${style.btnWrapper}`}>
                            <NavLink
                              to={`/accessory/${item._id}`}
                              className="btn btn-sm btn-primary"
                            >
                              Chi tiết phụ kiện
                            </NavLink>
                            <HeartFilled
                              onClick={(e)=>toggleClass(e,item._id)}
                              className={`${style.heartIcon}`}
                              />
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <div className={`${style.pagination} row`}>
                <Pagination
                  pageSize={pageSize}
                  current={current}
                  total={props.accessories?.accessories?.accessory?.length}
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
  accessories: state.accessoryPage,
});

const mapDispatchToProps = (dispatch) => ({
  getListAccessory: (params) => {
    dispatch(getListAccessory(params));
  },
  addAccessoryToWishlist: (data) => {
    dispatch(addAccessoryToWishlist(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Accessory);
