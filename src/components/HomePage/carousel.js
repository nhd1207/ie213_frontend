// import { Carousel } from 'antd';
import style from '../HomePage/carousel.module.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleRight
} from "@fortawesome/free-solid-svg-icons";
// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };

const car = [
    {
        key: 1,
        name: "HJEEP",
        attribute: "Trẻ trung khỏe khoắn",
        img: "thomas-haas.jpg"
    },
    {
        key: 2,
        name: "DUWSCD",
        attribute: "Mạnh mẽ hiện đại",
        img: "spencer-davis.jpg"
    },
    {
        key: 3,
        name: "LUOWNG",
        attribute: "So gay",
        img: "krish-parmar.jpg"
    }
]

function carousel() {
    return (
        <Carousel>
            {
                car.map(car => {
                    return (
                        <Carousel.Item className={style.container}>
                            <div className={style["img-container"]}>
                                <img
                                    className={style.img2}
                                    src={require(`../../Images/${car.img}`)}
                                    alt="Carousel Slide"
                                />
                            </div>
                            {/* <div className={style.header}>CÁC DÒNG XE</div> */}
                            <Carousel.Caption className={style.caption}>
                                <h3 className={style.title}>{car.name}</h3>
                                <p className={style.attribute}>{car.attribute}</p>
                                <button class="btn btn-outline-dark" className={style.btn}>
                                    <a href="/cars">
                                        MORE <FontAwesomeIcon icon={faCircleRight} size={{ width: 100 }}></FontAwesomeIcon>
                                    </a>
                                </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default carousel