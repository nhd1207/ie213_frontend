import { Menu, Button, Descriptions, Modal, List } from "antd";
import style from "./index.module.css";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Spin, Table } from "antd";
import { getUser, getListBill } from "./action";
import dateFormat from "dateformat";
import Cookies from "js-cookie";
import DataTable from "../../components/User/DataTable";
import { Redirect } from "react-router-dom";

function User(props) {
  const [showForm, setShowForm] = useState(false);
  const [accessoryBill, setAccessoryBill] = useState({});
  
  useEffect(() => {
    props.getUser();
    props.getListBill();
  }, []);

  async function signoutHandler() {
    Cookies.set("jwt", "");
    console.log(Cookies.get("jwt"));
    window.location.pathname = "/login";
  }

  const handleShowForm = (value) => {
    setShowForm({ showForm: value || false });
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  const openModal = (values) => {
    handleShowForm(true);
    setAccessoryBill(values);
  };

  return (
    <Layout>
      {props?.isLoggedIn.isLoggedIn === false ? (
        <Redirect to="/login"></Redirect>
      ) : (
        <Spin size="large" spinning={props.loading}>
          <div className="row">
            <div
              className={`${style.sideMenu} col col-xl-3 d-none d-md-block d-inline-flex`}
            >
              <img className={style.avatar} src={`${props.user?.photo}`} alt="abc"></img>
              <div className={style.avatarName}>{props.user?.name}</div>
              <Menu
                className={style.sideNav}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
              >
                <Menu.Item key="1">
                  <div> Thông tin</div>
                </Menu.Item>
                <Menu.Item key="2">
                  <a onClick={signoutHandler}> {"Đăng xuất"}</a>
                </Menu.Item>
              </Menu>
            </div>
            <div className={`${style.content} col col-xl-9 d-none d-md-block`}>
              <Descriptions column={1}>
                <Descriptions.Item
                  labelStyle={{ fontSize: 50, fontWeight: "bold"}}
                  contentStyle={{ fontSize: 50 }}
                >
                  THÔNG TIN
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontSize: 30, fontWeight: "bold" }}
                  contentStyle={{ fontSize: 30 }}
                  label="Tên người dùng"
                >
                  {props.user?.name}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontSize: 30, fontWeight: "bold" }}
                  contentStyle={{ fontSize: 30 }}
                  label="Số điện thoại"
                >
                  {props.user?.info?.phoneNumber}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontSize: 30, fontWeight: "bold" }}
                  contentStyle={{ fontSize: 30 }}
                  label="Email"
                >
                  {props.user?.email}
                </Descriptions.Item>
                <Descriptions.Item
                  labelStyle={{ fontSize: 30, fontWeight: "bold" }}
                  contentStyle={{ fontSize: 30 }}
                  label="Ngày sinh"
                >
                  {dateFormat(props.user?.info?.dateOfBirth, "mmmm dS, yyyy")}
                </Descriptions.Item>
              </Descriptions>
              <DataTable
                dataSource={props.bills?.accessoryBill}
                handleShowForm={openModal}
              ></DataTable>
              <Modal
                className={style.modalStyle}
                footer={null}
                cancelText=""
                title="Thông tin các sản phẩm"
                visible={showForm}
                closable={true}
                onCancel={handleCloseModal}
                onOk={handleCloseModal}
              >
                <List
                  pagination={{ pageSize: 4 }}
                  dataSource={accessoryBill.accessoryInfo || []}
                  renderItem={(item) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta title={item?.itemId?.name} />
                      <div>Số lượng: {item?.quantity}</div>
                    </List.Item>
                  )}
                />
              </Modal>
            </div>
          </div>
        </Spin>
      )}
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  bills: state.user.bills,
  loading: state.user.loading,
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    dispatch(getUser(params));
  },
  getListBill: (params) => {
    dispatch(getListBill(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
