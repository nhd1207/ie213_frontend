import Layout from "../../components/layout";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { getListCar, getListPost } from "./action";
import React, { useEffect } from "react";
import { List, Spin } from "antd";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import dateFormat from "dateformat";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";

function Home(props) {
  useEffect(() => {
    props.getListCar();
    props.getListPost();
  }, []);

  return (
    <Layout>
      <Spin size="large" spinning={props.loading}>
        <div className={`${style.container}`}>
          <Carousel className={style.carousel}>
            {props.cars?.car?.slice(0, 3).map((car) => {
              return (
                <Carousel.Item className={style.container}>
                  <div className={style["img-container"]}>
                    <img
                      className={style.img2}
                      src={car.image.banner}
                      alt="Carousel Slide"
                    />
                  </div>
                  {/* <div className={style.header}>CÁC DÒNG XE</div> */}
                  <Carousel.Caption className={style.caption}>
                    <div className={`${style.backgroundCaption}`}>
                      <h3 className={style.title}>{car?.name}</h3>
                      <p className={style.attribute}>{car?.special}</p>
                    </div>
                    {/* <button className={style.btn}>
                      <NavLink to="/car">
                        MORE{" "}
                        <FontAwesomeIcon
                          icon={faCircleRight}
                          size={{ width: 100 }}
                        ></FontAwesomeIcon>
                      </NavLink>
                    </button> */}
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className={`${style.introduce} row`}>
            <div className={`${style.s} col-xl-12`}>s</div>
            <div className={`${style.header} col-xl-12`}>Seven</div>
            <div className={`${style["introduce-content"]}`}>
              Nhà phân phối xe Seven hàng đầu Việt Nam
            </div>
          </div>
          <div className={style["accessories-header"]}>PHỤ KIỆN</div>
          <div className={style["accessories-content"]}>
            LÀM ĐẸP CHIẾC XE CỦA BẠN
          </div>
          <div className={`${style.accessories} row`}>
            {/* <div className={style["accessories-header"]}>PHỤ KIỆN</div>
            <div className={style["accessories-content"]}>
              LÀM ĐẸP CHIẾC XE CỦA BẠN
            </div>
            <button
              variant="dark"
              className={`${style["accessories-btn"]}`}
            >
              <a href="/accessory">
                MORE{" "}
                <FontAwesomeIcon
                  icon={faCircleRight}
                  size={{ width: 100 }}
                ></FontAwesomeIcon>
              </a>
            </button> */}
            <div
              className={`${style.accessoryItem} col-xl-4 col-sm-12 col-12 row`}
            >
              <div
                className={`${style.accessoriesCute1} col-xl-12 col-sm-12 col-12`}
              >
                <div className={`${style.accDesc}`}>
                  <h3 className={style.descTitle}>LOA XE HƠI</h3>
                  <p className={style.descAtt}>5 000 000</p>
                  <button
                    variant="dark"
                    className={`${style["accessories-btn"]}`}
                  >
                    <a href="/accessory">
                      MORE{" "}
                      <FontAwesomeIcon
                        icon={faCircleRight}
                        size={{ width: 100 }}
                      ></FontAwesomeIcon>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${style.accessoryItem} col-xl-4 col-sm-12 col-12 row`}
            >
              <div
                className={`${style.accessoriesCute2} col-xl-12 col-sm-12 col-12`}
              >
                <div className={`${style.accDesc}`}>
                  <h3 className={style.descTitle}>CHÌA KHOÁ XE HƠI</h3>
                  <p className={style.descAtt}>2 000 000</p>
                  <button
                    variant="dark"
                    className={`${style["accessories-btn"]}`}
                  >
                    <a href="/accessory">
                      MORE{" "}
                      <FontAwesomeIcon
                        icon={faCircleRight}
                        size={{ width: 100 }}
                      ></FontAwesomeIcon>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${style.accessoryItem} col-xl-4 col-sm-12 col-12 row`}
            >
              <div
                className={`${style.accessoriesCute3} col-xl-12 col-sm-12 col-12`}
              >
                <div className={`${style.accDesc}`}>
                  <h3 className={style.descTitle}>GIÁ ĐỂ ĐIỆN THOẠI</h3>
                  <p className={style.descAtt}>1 000 000</p>
                  <button
                    variant="dark"
                    className={`${style["accessories-btn"]}`}
                  >
                    <a href="/accessory">
                      Tìm hiểu thêm{" "}
                      <FontAwesomeIcon
                        icon={faCircleRight}
                        size={{ width: 100 }}
                      ></FontAwesomeIcon>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.news} row`}>
            <div className={`${style["news-header"]} col-xl-12`}>TIN TỨC</div>
            <div className={`${style["news-name"]} col-xl-12`}>
              THẾ GIỚI SEVEN
            </div>
            <List
              className={`${style.newsList}`}
              itemLayout="horizontal"
              dataSource={props.posts?.post?.slice(0, 2)}
              renderItem={(item) => (
                <List.Item className={`${style.listItem} row`}>
                  <div className={`${style.avatar} col-xl-5 col-sm-12 col-12`}>
                    <img
                      className={`${style["news-image"]}`}
                      src={item.image.avatar}
                      alt="news img"
                    />
                  </div>
                  <div
                    className={`${style.content} col-xl-7 col-sm-12 col-12 row`}
                  >
                    <div className={`${style["news-title"]} col-xl-12`}>
                      {item.title}
                    </div>
                    <div className={`${style.newsSpec} col-xl-12`}>
                      <div className={style["news-description"]}>
                        {dateFormat(item.createdAt, "mmmm dS, yyyy")}

                        <div
                          className={`${style.news_content} `}
                          dangerouslySetInnerHTML={{ __html: item?.content }}
                        />
                        <button
                          class={`${style.newsBtn} btn btn-outline-dark col-xl-3`}
                        >
                          <NavLink to={`news/${item._id}`}>ĐỌC THÊM</NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            ></List>
          </div>
        </div>
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cars: state.home.cars,
  posts: state.home.posts,
  loading: state.home.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getListCar: (params) => {
    dispatch(getListCar(params));
  },
  getListPost: (params) => {
    dispatch(getListPost(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
