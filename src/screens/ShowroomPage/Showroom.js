import React, { useEffect } from "react";
import style from "./showroom.module.css";
import Showroom2 from "../../Images/Showroom2.png";
import Showroom3 from "../../Images/Showroom3.png";
import { getListShowroom } from "./action";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout";
import {Spin} from "antd"
function Showroom(props) {
  useEffect(() => {
    // let params = {};
    props.getListShowroom();
    console.log("props", props);
  }, []);
  return (
    <Layout>
      <Spin spinning={props.loading}>

      <div className={`${style.SHcon} `}>
        <div className={`${style.Banner}`}>
          <h2 className={`${style.title}`}>CHUỖI</h2>
          <h1 className={`${style.title}`}>SHOWROOMS</h1>
          <h2 className={`${style.title}`}>LỚN NHẤT CẢ NƯỚC</h2>
        </div>
        <div className={`${style.leftContent__wrapper} row`}>
          <div className={`${style.leftContent__text} col-xl-5 col-md-12 row`}>
            <hr className={`${style.line} col-xl-12`}></hr>
            <h1 className={`${style.city_title} col-xl-12`}>HỒ CHÍ MINH</h1>
            <div className={`${style.leftContent__desc} col-xl-12`}>
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu
              <br />
              <br />
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu
              <br />
            </div>
            <div className={`${style.leftContent__desc} col-xl-12`}>
              
            {props?.showrooms?.filter(item=>  item.address.includes('Hồ Chí Minh')).map(item=>{
              return <>
              <hr className={`${style.line}`}></hr> 
              {item.name}: {item.address}
              </>
            })}
             
              {/* {props.showRoom?.adress[0]}
              <hr className={`${style.line}`}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={`${style.line}`}></hr> */}
            </div>
          </div>
          <div
            className={`${style.leftContent__img_wrapper} col-xl-7 col-md-12`}
          >
            <div className={`${style.img_wrapper_1} col-xl-12`}>
              {/* <img src={Showroom2}></img> */}
            </div>
            <div className={`${style.img_wrapper_2} col-xl-12`}>
              {/* <img src={Showroom3}></img> */}
            </div>
          </div>
        </div>

        <div className={`${style.rightContent__wrapper} row`}>
          <div
            className={`${style.rightContent__image_wrapper} col-xl-7 col-md-12 row`}
          >
            <div className={`${style.img_wrapper_3} col-xl-12 `}>
              {/* <img src={Showroom2}></img> */}
            </div>
            <div className={`${style.img_wrapper_4} col-xl-12 `}>
              {/* <img src={Showroom3}></img> */}
            </div>
          </div>
          <div className={`${style.rightContent__text} col-xl-5 col-md-12 `}>
            <hr className={`${style.line} col-xl-12`}></hr>
            <h1 className={`${style.city_title} col-xl-12 `}>ĐÀ NẴNG</h1>
            <div className={`${style.rightContent__desc} col-xl-12 `}>
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu
              <br />
              <br />
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,
              Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn
              giới thiệu
              <br />
            </div>
            <div className={`${style.rightContent__desc} col-xl-12 `}>
            {props?.showrooms?.filter(item=>  item.address.includes('Đà Nẵng')).map(item=>{
              return <>
              <hr className={`${style.line}`}></hr> 
              {item.name}: {item.address}
              </>
            })}
            </div>
          </div>
        </div>
      </div>
      </Spin>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  loading: state.showroom.loading,
  showrooms: state.showroom.showrooms.showRoom
});

const mapDispatchToProps = (dispatch) => ({
  getListShowroom: (params) => {
    dispatch(getListShowroom(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Showroom);
