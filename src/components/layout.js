import React, { useEffect, useContext } from "react";
import { Affix, Menu, Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useRouteMatch, useHistory } from "react-router-dom";
import {
  faHeart,
  faCartShopping,
  faUserTie,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "antd/dist/antd.css";
import "./layout.css";
import { verifyLayout, logout } from "../screens/LoginPage/action";
import { connect } from "react-redux";
import RouteContext from "../context/RouteContext";
// import AuthenContext from "../components/context/AuthenContext";
const { Header, Content, Footer } = Layout;

function Layouts(props) {
  let match = useRouteMatch();
  let history = useHistory();

  function logoutHandler() {
    props.logout();
    if (
      match.url.contain("wishlist") ||
      match.url.contain("cart") ||
      match.url.contain("user")
    ) {
      history.replace(`login`);
    }
    history.replace(`${match.url}`);
  }

  const context = useContext(RouteContext);
  useEffect(() => {
    context.url = match.url;
  }, [match]);

  useEffect(() => {
    props.verifyLayout();
  }, []);
  // let context = useContext(AuthenContext);

  // async function signoutHandler() {
  //     context.isLoggedIn = false;
  //     Cookies.set("web_token", "");
  //     console.log(Cookies.get("web_token"));
  //     window.location.pathname = "/login";
  //   }

  //   function NavigationContent(props) {
  //     const [userInput, setUserInput] = useState("");
  //     let context = useContext(AuthenContext);
  //     let searchContext = useContext(SearchQuery);
  //     function searchChangeHandler(event) {
  //       setUserInput(event.target.value);
  //     }
  return (
    <Layout
      style={
        {
          overflow: "hidden"
        }
      }
    >
      <Affix style={{ zIndex: 100 }}>
        <Header
          className="header"
          style={{ backgroundColor: "rgb(27, 26, 23)" }}
        >
          <Menu
            style={{
              width: "100%",
              backgroundColor: "rgb(27, 26, 23)",
              color: "#fff",
            }}
            mode="horizontal"
            theme="dark"
            breakpoint=""
            collapsedWidth="0"
          >
            <Menu.Item key="home">
              <NavLink to={"/home"}>
                <img
                  src={require("../Images/logo.png")}
                  alt={"logo"}
                  width={50}
                  height={50}
                ></img>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="cars">
              <NavLink
                to={`/car`}
                style={{ color: "#F3EA01" }}
                activeClassName={"activeNav"}
              >
                {" "}
                CÁC DÒNG XE{" "}
              </NavLink>
            </Menu.Item>

            <Menu.Item key="showrooms">
              <NavLink
                to={`/showroom`}
                style={{ color: "#F3EA01" }}
                activeClassName={"activeNav"}
              >
                {" "}
                SHOWROOMS{" "}
              </NavLink>
            </Menu.Item>

            <Menu.Item key="accessory">
              <NavLink
                to={`/accessory`}
                style={{ color: "#F3EA01" }}
                activeClassName={"activeNav"}
              >
                {" "}
                PHỤ KIỆN{" "}
              </NavLink>
            </Menu.Item>

            <Menu.Item key="news">
              <NavLink
                to={`/news`}
                style={{ color: "#F3EA01" }}
                activeClassName={"activeNav"}
              >
                {" "}
                TIN TỨC{" "}
              </NavLink>
            </Menu.Item>

            <Menu.Item key="about_us">
              <NavLink
                to={`/about_us`}
                style={{ color: "#F3EA01" }}
                activeClassName={"activeNav"}
              >
                {" "}
                VỀ CHÚNG TÔI{" "}
              </NavLink>
            </Menu.Item>

            <Menu.Item key="support">
              <NavLink
                to={`/support`}
                style={{ color: "#F3EA01" }}
                activeClassName={"activeNav"}
              >
                {" "}
                HỖ TRỢ{" "}
              </NavLink>
            </Menu.Item>
          </Menu>
          <Menu
            style={{
              // width: "100%",
              backgroundColor: "rgb(27, 26, 23)",
              color: "#fff",
            }}
            mode="horizontal"
            theme="dark"
            breakpoint=""
            collapsedWidth="0"
          >
            <Menu.Item key="wishlist">
              <NavLink to={`/wishlist`}>
                <FontAwesomeIcon style={{ color: "#F3EA01" }} icon={faHeart} />
              </NavLink>
            </Menu.Item>

            <Menu.Item key="cart">
              <NavLink to={`/cart`}>
                <FontAwesomeIcon
                  style={{ color: "#F3EA01" }}
                  icon={faCartShopping}
                />
              </NavLink>
            </Menu.Item>

            {/* {context.isLoggedIn && ( */}
            <Menu.Item key="user">
              <NavLink to={`/user`}>
                <FontAwesomeIcon
                  style={{ color: "#F3EA01" }}
                  icon={faUserTie}
                />
              </NavLink>
            </Menu.Item>
            {/* )} */}

            {/* {!context.isLoggedIn && ( */}

            <Menu.Item key="login">
              {/* <Spin spinning={props?.isLoggedIn?.loading}> */}
              {props?.isLoggedIn === true ? (
                <NavLink
                  to={`${match.url}`}
                  style={{ color: "#F3EA01" }}
                  onClick={logoutHandler}
                >
                  Đăng xuất
                </NavLink>
              ) : (
                <NavLink
                  to={"/login"}
                  style={{ color: "#F3EA01" }}
                  activeClassName={"activeNav"}
                >
                  Đăng nhập
                </NavLink>
              )}
              {/* </Spin> */}
            </Menu.Item>

            {/* <Spin spinning={props?.isLoggedIn?.loading}> */}
            {props?.isLoggedIn === true ? (
              <></>
            ) : (
              <Menu.Item key="signup">
                <NavLink
                  to={"/signup"}
                  style={{ color: "#F3EA01" }}
                  activeClassName={"activeNav"}
                >
                  Đăng ký
                </NavLink>
              </Menu.Item>
            )}
            {/* </Spin> */}

            {/* )} */}

            {/* {context.isLoggedIn && ( */}
            {/* <Menu.Item key="logout">
                                <a style={{ color: "#F3EA01",  }} onClick={signoutHandler} > Đăng xuất </a>
                            </Menu.Item > */}
            {/* )} */}
          </Menu>
        </Header>
      </Affix>
      <Content
        style={{
          width: "100%",
          // minHeight: "100vh",
        }}
      >
        {props.children}
      </Content>

      <Footer style={{ backgroundColor: "black" }}>
        <div
          className="row"
          style={{ backgroundColor: "black", lineHeight: 2 }}
        >
          <div className="col-xl-9 col-sm-12 col-12 text-white">
            <span style={{ fontSize: 20 }}>Công ty cổ phần SEVEN</span>
            <br></br>
            Số GCNĐKDN: 20022001
            <br></br>
            Đăng ký lần đầu: Ngày 1/3/2022
            <br></br>
            Đăng ký thay đổi lần thứ 10: Ngày 20/3/2022
            <br></br>
            Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư tỉnh
            Nam Định
            <br></br>
            Địa chỉ: Đường Hàn Thuyên, khu phố 6, TP Thủ Đức, TP Hồ Chí Minh
          </div>
          <div className="col-xl-3 col-sm-12 col-12 text-white">
            <strong style={{ fontSize: 20 }}>Contact Us</strong>
            <br></br>
            <FontAwesomeIcon icon={faEnvelope} style={{}} /> Email:
            VeryCute@gm.uit.edu.vn
            <br></br>
            <FontAwesomeIcon icon={faPhone} style={{}} /> Phone: 039 2022 001
            <br></br>
            <strong style={{ marginTop: 20, fontSize: 20 }}>Follow Us</strong>
            <br></br>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 20, marginRight: 30}} />
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 20, marginRight: 30 }} />
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 20, marginRight: 30 }} />
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  verifyLayout: () => {
    dispatch(verifyLayout());
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layouts);
