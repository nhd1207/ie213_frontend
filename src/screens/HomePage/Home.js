import Layout from "../../components/layout"
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'
import { getListCar, getListPost } from "./action";
import React, { useEffect, useState } from 'react';
import { List, Spin } from 'antd';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleRight
} from "@fortawesome/free-solid-svg-icons";
import dateFormat from 'dateformat';

function Home(props) {
    useEffect(() => {
        props.getListCar();
        props.getListPost();
    }, []);

return (
    <Layout>
        <Spin size='large' spinning={props.loading}>
            <div className={style.container}>
                <div className={style.introduce}>
                    <div className={style.s}>s</div>
                    <div className={style.header}>Seven</div>
                    <div className={style["introduce-content"]}>Nhà phân phối xe Seven lớn nhất thế giới</div>
                </div>
                <Carousel className={style.carousel}>
                    {
                        props.cars?.car?.map((car) => {
                            return (
                                <Carousel.Item className={style.container}>
                                    <div className={style["img-container"]}>
                                        <img
                                            className={style.img2}
                                            src={require(`../../Images/andre-tan-79.jpg`)}
                                            alt="Carousel Slide"
                                        />
                                    </div>
                                    {/* <div className={style.header}>CÁC DÒNG XE</div> */}
                                    <Carousel.Caption className={style.caption}>
                                        <h3 className={style.title}>{car?.model}</h3>
                                        <p className={style.attribute}>{car?.description}</p>
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
                        dataSource={props.posts?.post?.slice(0,2)}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<img className={style['news-image']} src={require(`../../Images/andre-tan-79.jpg`)} />}
                                    title={<div className={style['news-title']}>{item.content}</div>}
                                    description={
                                        <div>
                                            <div className={style['news-description']}>{dateFormat(item.createdAt, "mmmm dS, yyyy")}</div>
                                            <button class="btn btn-outline-dark">
                                                <a href={`news/${item._id}`}>
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
        </Spin>
    </Layout>
)

}

const mapStateToProps = state => ({
    cars: state.home.cars,
    posts: state.home.posts,
    loading: state.home.loading
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