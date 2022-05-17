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
              <div className={`${style.cardRow} row no-gutters`}>
                {props.accessories?.accessories?.accessory?.map((item) => {
                  let myStyle = {
                    backgroundImage: `url(${item.image.avatar})`,
                  };
                  return (
                    <Card
                      className={`${style.card} col col-xl-3 col-md-6 col-12`}
                    >
                      <Card.Img className={`${style.image}`} style={myStyle} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <NavLink
                          to={`/accessory/${item._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Chi tiết phụ kiện
                        </NavLink>
                      </Card.Body>
                    </Card>
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
