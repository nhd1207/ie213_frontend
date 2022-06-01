import { Menu, Button, Descriptions, Modal, List } from "antd";
import style from "./index.module.css";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Spin, Table } from "antd";
import dateFormat from "dateformat";
import Cookies from "js-cookie";
import DataTable from "../../components/User/DataTable";
import { getUser } from "../UserPage/action";
import { useHistory, Link } from "react-router-dom";
import { getAccessoryHistory } from "./action";
import {verify} from "../LoginPage/action"

function ACcessoryOrderHistory(props) {
  const [showForm, setShowForm] = useState(false);
  const [accessoryBill, setAccessoryBill] = useState({});

  useEffect(() => {
    props.verify();
    props.getUser();
    props.getAccessoryHistory();
  }, []);

  function signoutHandler() {
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
      <div className="row">
        <div
          className={`${style.sideMenu} col col-xl-3 d-none d-md-block d-inline-flex`}
        >
          <img
            className={style.avatar}
            src={`${props.user?.photo}`}
            alt="User avatar"
          ></img>
          <div className={style.avatarName}>{props.user.name}</div>
          <Menu
            className={style.sideNav}
            defaultSelectedKeys={["4"]}
          >
            <Menu.Item key="1">
              <Link to="/user">
                Thông tin
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user/update">Cập nhật thông tin</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/user/my-order/cars">Lịch sử đặt hàng xe</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/user/my-order/accessories">Lịch sử đặt hàng phụ kiện</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <a onClick={signoutHandler}> {"Đăng xuất"}</a>
            </Menu.Item>
          </Menu>
        </div>
        <div
          className={`${style.content} col col-xl-9 d-none d-md-block`}
        >
          <Spin size="large" spinning={props.userLoading || props.accessoryLoading}>
            <DataTable
              dataSource={props.accessoriesHistory?.accessoryBill}
              handleShowForm={openModal}
            ></DataTable>
          </Spin>
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
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  accessoriesHistory: state.accessoriesHistory.data,
  accessoryLoading: state.accessoriesHistory.loading,
  userLoading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    dispatch(getUser(params));
  },
  getAccessoryHistory: (params) => {
    dispatch(getAccessoryHistory(params));
  },
  verify: (params) => {
    dispatch(verify(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ACcessoryOrderHistory);
