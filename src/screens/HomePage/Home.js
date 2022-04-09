import Layout from "../../components/layout"
import style from "./index.module.css";
import Carousel from "../../components/HomePage/carousel"
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { getListCar, getListPost } from "./action";
import React, {useEffect, useState} from 'react';
import { List } from 'antd';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleRight
} from "@fortawesome/free-solid-svg-icons";



const data = [
    {
        title: 'RA MẮT MẪU XE DUWDCS MỚI NHẤT 2022',
        time: '15/03/2022',
        img: 'campbell.jpg',
        id: 1
    },
    {
        title: 'RA MẮT MẪU XE DUWDCS MỚI NHẤT 2022',
        time: '15/03/2022',
        img: 'josh-berquist.jpg',
        id: 2
    },
    {
        title: 'RA MẮT MẪU XE DUWDCS MỚI NHẤT 2022',
        time: '15/03/2022',
        img: 'chuttersnap.jpg',
        id: 3
    },

];

function Home(props) {
    useEffect(() => {
        console.log('useEffect has been called!');
        let params='';
        getListCar(params);
        getListPost(params);
      }, []);

    return (
        <Layout>
            <div className={style.container}>
                <div className={style.introduce}>
                    <div className={style.s}>s</div>
                    <div className={style.header}>Seven</div>
                    <div className={style["introduce-content"]}>Nhà phân phối xe Seven lớn nhất thế giới</div>
                </div>
                <Carousel></Carousel>
                <div className={style.accessories}>
                    <div className={style["accessories-header"]}>PHỤ KIỆN</div>
                    <div className={style["accessories-content"]}>LÀM ĐẸP CHIẾC XE CỦA BẠN</div>
                    <button variant='dark' class="btn btn-outline-dark" className={style["accessories-btn"]}>
                        <a href="/accessories">
                            MORE   <FontAwesomeIcon icon={faCircleRight} size={{ width: 100 }}></FontAwesomeIcon>
                        </a>
                    </button>
                </div>
                <div className={style.news}>
                    <div className={style['news-header']}>TIN TỨC</div>
                    <div className={style['news-name']}>THẾ GIỚI SEVEN</div>
                    <List itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<img className={style['news-image']} src={require(`../../Images/${item.img}`)} />}
                                    title={<div className={style['news-title']}>{item.title}</div>}
                                    description={
                                    <div>
                                        <div className={style['news-description']}>{item.time}</div>
                                        <button class="btn btn-outline-dark">
                                            <a href={`news/${item.id}`}>
                                                ĐỌC THÊM
                                            </a>
                                        </button>
                                    </div>
                                    }
                                />
                            </List.Item>
                        )}>
                    </List>
                </div>
            </div>
        </Layout>


    )

}

const mapStateToProps = state => ({
    cars: state.car,
    news: state.new
})

const mapDispatchToProps = dispatch => ({
    getListCar: (params) => {
        dispatch(getListCar(params))
    },
    getListPost: (params) => {
        dispatch(getListPost(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)