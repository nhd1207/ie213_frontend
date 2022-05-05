import React, {useEffect} from 'react'
import style from './Showroom.module.css'
import Showroom2 from '../../Images/Showroom2.png'
import Showroom3 from '../../Images/Showroom3.png'
import {getListShowroom} from './action'
import {connect} from 'react-redux'

 function Showroom(props) {
   useEffect(() =>{
     let params = {};
      props.getListShowroom(params);
      console.log(props);
   }, [])
  return (
    <div className={style.SHcon}>
      <div className={style.Banner}>
        <h2 className={style.title}>CHUỖI</h2>
        <h1 className={style.title}>SHOWROOMS</h1>
        <h2 className={style.title}>LỚN NHẤT CẢ NƯỚC</h2>
      </div>
      <div className={style.leftContent__wrapper}>
        <div className={style.leftContent__text}>
          <hr className={style.line}></hr>
          <h1 className={style.city_title}>HỒ CHÍ MINH</h1>
          <div className={style.leftContent__desc}>Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br /><br />
            Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br />
            </div>
            <div className={style.leftContent__desc}>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
            </div>
        </div>
        <div className={style.leftContent__img_wrapper}> 
          <div className={style.img_wrapper_1}>
            {/* <img src={Showroom2}></img> */}
          </div>
          <div className={style.img_wrapper_2}>
            {/* <img src={Showroom3}></img> */}
          </div>
        </div>
      </div> 
      <div className={style.rightContent__wrapper}>
        
        <div className={style.rightContent__image_wrapper}>
          <div className={style.img_wrapper_3}>
            {/* <img src={Showroom2}></img> */}
          </div>
          <div className={style.img_wrapper_4}>
            {/* <img src={Showroom3}></img> */}
          </div>
        </div>
        <div className={style.rightContent__text}>
          <hr className={style.line}></hr>
          <h1 className={style.city_title}>ĐÀ NẴNG</h1>
          <div className={style.rightContent__desc}>Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br /><br />
            Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br />
            </div>
            <div className={style.rightContent__desc}>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
            </div>
        </div>
      </div> 
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.showroom
})

const mapDispatchToProps = dispatch => ({
  getListShowroom: (params) => {
      dispatch(getListShowroom(params))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Showroom)
