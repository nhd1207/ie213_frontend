import React, { useEffect } from "react";
import Layout from "../../components/layout";
import OrderDetail from "../../components/OrderResult/OrderDetail";
import { connect } from "react-redux";
import { Menu, Spin } from "antd";
import style from "../UserPage/index.module.css";
import { Link } from "react-router-dom";
import { getUser } from "../UserPage/action";
import { getCarHistory } from "./action";
import Cookies from "js-cookie";
import DataTable from "../../components/CarOrderHistory/DataTable";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
function CarOrderHistory(props) {
  function signoutHandler() {
    Cookies.set("jwt", "");
    console.log(Cookies.get("jwt"));
    window.location.pathname = "/login";
  }

  useEffect(() => {
    props.getUser();
    props.getCarHistory();
    console.log(props);
  }, []);

  let history = useHistory();
  let match = useRouteMatch();

  function moreDetailHandler(id) {
    history.push(`${match.url}?id=${id}`);
  }

  return (
    <Layout>
      <Spin spinning={props.userLoading || props.carLoading}>
        <div className="row">
          <div
            className={`${style.sideMenu} col col-xl-3 d-none d-md-block d-inline-flex`}
          >
            <img
              className={style.avatar}
              src={`${props?.user?.photo}`}
              alt="User avatar"
            ></img>
            <div className={style.avatarName}>{props?.user?.name}</div>
            <Menu className={style.sideNav} defaultSelectedKeys={["3"]}>
              <Menu.Item key="1">Thông tin</Menu.Item>
              <Menu.Item key="2">
                <Link to="/user/update">Cập nhật thông tin</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/user/update">Lịch sử đặt hàng xe</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/user/update">Lịch sử đặt hàng phụ kiện</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <a onClick={signoutHandler}> {"Đăng xuất"}</a>
              </Menu.Item>
            </Menu>
          </div>
          <div className={`${style.content} col col-xl-9 d-none d-md-block`}>
            <DataTable
              dataSource={props?.carsHistory?.carOrder}
              moreDetailHandler={moreDetailHandler}
            ></DataTable>
          </div>
        </div>
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  userLoading: state.user.loading,
  carsHistory: state.carsHistory.data,
  carLoading: state.carsHistory.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (params) => {
    dispatch(getUser(params));
  },

  getCarHistory: (params) => {
    dispatch(getCarHistory(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarOrderHistory);
