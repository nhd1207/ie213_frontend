import React, { useEffect} from "react";
import Layout from "../../components/layout";
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
import { verify } from "../LoginPage/action";

function CarOrderHistory(props) {
  function signoutHandler() {
    Cookies.set("jwt", "");
    window.location.pathname = "/login";
  }

  useEffect(() => {
    props.verify();
    props.getUser();
    props.getCarHistory();
  }, []);

  let history = useHistory();
  let match = useRouteMatch();


  async function moreDetailHandler(record) {
    // let data = props?.carsHistory?.carOrder.find((item) => item._id === id);
    history.push(`${match.url}/${record._id}`, [record]);
  }

  return (
    <Layout>
      <div className="row">
        <div className={`${style.sideMenu} col-xl-3 col-sm-3`}>
          <img
            className={style.avatar}
            src={`${props?.user?.photo}`}
            alt="User avatar"
          ></img>
          <div className={style.avatarName}>{props?.user?.name}</div>
          <Menu className={style.sideNav} defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/user">Thông tin</Link>
            </Menu.Item>
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
          <Spin spinning={props.userLoading || props.carLoading}>
            <DataTable
              dataSource={props?.carsHistory?.carOrder}
              moreDetailHandler={moreDetailHandler}
            ></DataTable>
          </Spin>
        </div>
      </div>
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
  verify: (params) => {
    dispatch(verify(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarOrderHistory);
