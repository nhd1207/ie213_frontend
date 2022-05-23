import React, { useEffect } from "react";
import style from "./AccessoryList.module.css";
import { InputGroup } from "react-bootstrap";
import "antd/dist/antd.css";
import Card from "react-bootstrap/Card";
import Layout from "../../components/layout";
import { Pagination } from "antd";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getListAccessory } from "./action";
import { Menu, Spin } from "antd";
import {
  HeartFilled,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

function Accessory(props) {
  useEffect(() => {
    props.getListAccessory();
    console.log(props.accessories);
  }, []);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  const toggleClass = (e) => {
    console.log("click ", e.target.parentElement.parentElement);
    let element = e.target.parentElement.parentElement;
    element.classList.toggle(`${style.heartIconClicked}`);
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
                  Tìm kiếm
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
              {props.accessories?.accessories?.accessory?.length} SẢN PHẨM
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
                <SubMenu key="sub1" icon={<SettingOutlined />} title="Dòng Xe" className={`${style.subMenuCss}`}>
                  <Menu.Item key="1" className={`${style.subMenuOption}`}>Option 1</Menu.Item>
                  <Menu.Item key="2" className={`${style.subMenuOption}`}>Option 2</Menu.Item>
                  <Menu.Item key="3" className={`${style.subMenuOption}`}>Option 3</Menu.Item>
                  <Menu.Item key="4" className={`${style.subMenuOption}`}>Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<SettingOutlined />} title="Chỗ Ngồi" className={`${style.subMenuCss}`}>
                  <Menu.Item key="5" className={`${style.subMenuOption}`}>Option 5</Menu.Item>
                  <Menu.Item key="6" className={`${style.subMenuOption}`}>Option 6</Menu.Item>
                  <Menu.Item key="7" className={`${style.subMenuOption}`}>Option 7</Menu.Item>
                  <Menu.Item key="8" className={`${style.subMenuOption}`}>Option 8</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div
              className={`${style.cardContainer} col col-xl-10 col-lg-9 col-md-8`}
            >
              <div className={`row no-gutters`}>
                {props.accessories?.accessories?.accessory?.map((item) => {
                  let myStyle = {
                    backgroundImage: `url(${item.image.avatar})`,
                  };
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
                              onClick={toggleClass}
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
                <Pagination defaultCurrent={6} total={100} />;
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Accessory);
