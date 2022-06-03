import { Menu, Descriptions } from "antd";
import style from "./index.module.css";
import Layout from "../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import { getUser, getListBill, updateUser } from "./action";
import dateFormat from "dateformat";
import Cookies from "js-cookie";
// import DataTable from "../../components/User/DataTable";
import { verify } from "../LoginPage/action";
import { Link } from "react-router-dom";
import FormUpdateUser from "../../components/User/FormUpdateUser";

function User(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.verify();
    props.getUser();
    props.getListBill();
  }, []);

  useEffect(() => {
    if (props.loading === false && props.loading2 === false) setLoading(false);
    else setLoading(true);
  }, [props.loading, props.loading2]);

  async function signoutHandler() {
    Cookies.set("jwt", "");
    window.location.pathname = "/login";
  }

  const updateUserInfo = (value) => {
    props.updateUser({
      name: value.name,
      info: value,
    });
  };

  return (
    <Layout>
      <Spin size="large" spinning={loading}>
        {loading ? (
          <></>
        ) : (
          <>
            <div className="row">
              <div className={`${style.sideMenu} col-xl-3 col-sm-3`}>
                <img
                  className={style.avatar}
                  src={`${props.user?.photo}`}
                  alt="User avatar"
                ></img>
                <div className={style.avatarName}>{props?.user?.name}</div>
                <Menu
                  className={style.sideNav}
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                >
                  <Menu.Item key="1">Thông tin</Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/user/my-order/cars">Lịch sử đặt hàng xe</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/user/my-order/accessories">
                      Lịch sử đặt hàng phụ kiện
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <a onClick={signoutHandler}> {"Đăng xuất"}</a>
                  </Menu.Item>
                </Menu>
              </div>
              <div className={`${style.content} col-xl-9 col-sm-9`}>
                <Spin spinning={props.loading}>
                  <div className={`${style.descriptions}`}>
                    <Descriptions
                      labelStyle={{ fontSize: 50, fontWeight: "bold" }}
                      title="THÔNG TIN"
                      column={2}
                    >
                      {/* <Descriptions.Item
                    labelStyle={{ fontSize: 50, fontWeight: "bold" }}
                    contentStyle={{ fontSize: 50 }}
                  >
                    THÔNG TIN
                  </Descriptions.Item> */}
                      <Descriptions.Item
                        labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                        contentStyle={{ fontSize: 20 }}
                        label="Tên người dùng"
                      >
                        {props.user?.name}
                      </Descriptions.Item>
                      <Descriptions.Item
                        labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                        contentStyle={{ fontSize: 20 }}
                        label="Số điện thoại"
                      >
                        {props.user?.info?.phoneNumber}
                      </Descriptions.Item>
                      <Descriptions.Item
                        labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                        contentStyle={{ fontSize: 20 }}
                        label="Email"
                      >
                        {props.user?.email}
                      </Descriptions.Item>
                      <Descriptions.Item
                        labelStyle={{ fontSize: 20, fontWeight: "bold" }}
                        contentStyle={{ fontSize: 20 }}
                        label="Ngày sinh"
                      >
                        {dateFormat(
                          props.user?.info?.dateOfBirth,
                          "mmmm dS, yyyy"
                        )}
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                  <FormUpdateUser
                    data={props.user}
                    updateUser={updateUserInfo}
                  ></FormUpdateUser>
                  {/* <DataTable
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
                </Modal> */}
                </Spin>
              </div>
            </div>
          </>
        )}
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  bills: state.user.bills,
  loading: state.user.loading,
  loading2: state.login.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    dispatch(getUser(params));
  },
  getListBill: (params) => {
    dispatch(getListBill(params));
  },
  verify: (params) => {
    dispatch(verify(params));
  },
  updateUser: (params) => {
    dispatch(updateUser(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
