import React from 'react'
import style from './Showroom.module.css'
export default function Showroom() {
  return (
    <div className={style.SHcon}>
        <div className={style.Banner}>
          <h2 className={style.title}>CHUỖI</h2>
          <h1 className={style.title}>SHOWROOMS</h1>
          <h2  className={style.title}>LỚN NHẤT CẢ NƯỚC</h2>
        </div>
        <div className={style.HCM_space}>
            <h1 className={style.city_title}>HỒ CHÍ MINH</h1>
            <div className={style.HCM_space_content}>Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br/><br/>
                 Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu,  Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu, Đây là 1 đoạn giới thiệu<br/></div>
        </div>
    </div>
  )
}
