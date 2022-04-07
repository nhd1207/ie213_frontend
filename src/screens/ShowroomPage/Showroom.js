import React from 'react'
import style from './Showroom.module.css'
import Showroom2 from '../../Images/Showroom2.png'
import Showroom3 from '../../Images/Showroom3.png'
export default function Showroom() {
  return (
    <div className={style.SHcon}>
      <div className={style.Banner}>
        <h2 className={style.title}>CHUỖI</h2>
        <h1 className={style.title}>SHOWROOMS</h1>
        <h2 className={style.title}>LỚN NHẤT CẢ NƯỚC</h2>
      </div>
      <div className={style.HCM_wrapper}>
        <div className={style.HCM_text}>
          <hr className={style.line}></hr>
          <h1 className={style.city_title}>HỒ CHÍ MINH</h1>
          <div className={style.HCM_text_content}>Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br /><br />
            Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br />
            </div>
            <div className={style.HCM_text_content}>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
              123, đường 567, Q1, Tp.HCM
              <hr className={style.line}></hr>
            </div>
        </div>
        <div className={style.img_wrapper_1}>
          {/* <img src={Showroom2}></img> */}
        </div>
        <div className={style.img_wrapper_2}>
          {/* <img src={Showroom3}></img> */}
        </div>
      </div> 
    </div>
  )
}
