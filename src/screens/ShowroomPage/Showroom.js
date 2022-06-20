import React, { useEffect } from "react";
import style from "./Showroom.module.css";
import { getListShowroom } from "./action";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout";
import {Spin} from "antd"
function Showroom(props) {
  useEffect(() => {
    props.getListShowroom();
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
            Thành phố Hồ Chí Minh, còn gọi bằng tên cũ phổ biến là Sài Gòn, 
            là thành phố lớn nhất ở Việt Nam về dân số và quy mô đô thị hóa. 
              <br/><br/>
            Thành phố Hồ Chí Minh là một trong những điểm nóng về xe hơi, vì thế chúng tôi mang
            đến cho bạn những showroom tuyệt vời nhất cho trải nghiệm của bạn
              <br />
            </div>
            <div className={`${style.leftContent__desc} col-xl-12`}>
            {props?.showrooms?.filter(item=>  item.address.includes('Hồ Chí Minh')).map(item=>{
              return <>
              <hr className={`${style.line}`}></hr> 
              {item.name}: {item.address}
              </>
            })}
            </div>
          </div>
          <div
            className={`${style.leftContent__img_wrapper} col-xl-7 col-md-12`}
          >
            <div className={`${style.img_wrapper_1} col-xl-12`}>
            </div>
            <div className={`${style.img_wrapper_2} col-xl-12`}>
            </div>
          </div>
        </div>
        <div className={`${style.rightContent__wrapper} row`}>
          <div
            className={`${style.rightContent__image_wrapper} col-xl-7 col-md-12 row`}
          >
            <div className={`${style.img_wrapper_3} col-xl-12 `}>
            </div>
            <div className={`${style.img_wrapper_4} col-xl-12 `}>
            </div>
          </div>
          <div className={`${style.rightContent__text} col-xl-5 col-md-12 `}>
            <hr className={`${style.line} col-xl-12`}></hr>
            <h1 className={`${style.city_title} col-xl-12 `}>ĐÀ NẴNG</h1>
            <div className={`${style.rightContent__desc} col-xl-12 `}>
            Đà Nẵng đã thay đổi chóng mặt với tốc độ phát triển kinh hoàng đó là lời 
            nhận xét của đa số mọi người khi quay lại nơi đây.
              <br/><br/>
            Thành phố Đà Nẵng là một trong những điểm nóng về xe hơi, vì thế chúng tôi mang
            đến cho bạn những showroom tuyệt vời nhất cho trải nghiệm của bạn
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
