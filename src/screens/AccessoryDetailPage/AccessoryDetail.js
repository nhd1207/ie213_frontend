import style from "./AccessoryDetail.module.css";
import "antd/dist/antd.css";
import Layout from "../../components/layout"
import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import {
    Form,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Dropdown,
    CarouselItem,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Spin, Carousel } from "antd";
import money from '../../components/Share/functions/money'
import { getDetailAccessory, updateCart } from "./action";
import FormUpdateCart from "../../components/AccessoryDetail/FormUpdateCart";

function AccessoryDetail(props) {
    useEffect(() => {
        props.getDetailAccessory(props.match.params.id)
    }, []);

    const handleUpdateCart = (value) => {
        if (value.color == null) {
            message.error('Chưa chọn màu sắc')
            return;
        }
        if (!value.quantity) {
            message.error('Số lượng phải lớn hơn 0')
            return;
        }
        let data = {
            ...value,
            //color: null,
            itemId: props.match.params.id
        }
        console.log('value.quantity', value.quantity);
        props.updateCart(data)
    }
    const contentStyle = {
        height: '150px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    return (
        <Layout>
            <Spin size='large' spinning={props.data.loading}>
                <div className={`${style.container}`}>
                    <div className={`${style.headingContainer} container`}>
                        <div className={`${style.headings} `}>
                            <h2 className={`${style.heading} `}>CHI TIẾT PHỤ KIỆN</h2>
                        </div>
                    </div>
                    <div className={`${style.main} row`}>
                        {/* <Carousel autoplay className="col-6">
                            <CarouselItem>
                                <img className={style.image} style={{ backgroundImage: `url(${props.data?.data[0]?.image?.gallery[0]})` }}></img>
                            </CarouselItem>
                            <CarouselItem>
                                <img className={style.image} style={{ backgroundImage: `url(${props.data?.data[0]?.image?.gallery[1]})` }}></img>
                            </CarouselItem>
                            <CarouselItem>
                                <img className={style.image} style={{ backgroundImage: `url(${props.data?.data[0]?.image?.gallery[2]})` }}></img>
                            </CarouselItem>
                        </Carousel> */}
                        {/* <div className={`${style.image} col-4`} style={{ backgroundImage: `url(${props.data?.data[0]?.image.banner})` }} alt="abc"></div>
                        <div className={`${style.content} col-6`}>
                            <div className={`${style.content_name}`}>
                                {props.data?.data[0]?.name}
                            </div>
                            <div className={`${style.document}`}>Mã mặt hàng: {props.data?.data[0]?.code}</div>
                            <div>Thông số: {props.data?.data[0]?.specification?.height} cm, {props.data?.data[0]?.specification.weight} kg</div>
                            <div className={`${style.content_price}`}>
                                Giá tiền: {money(props.data?.data[0]?.price, "VND")}
                            </div>
                            <FormUpdateCart
                                onSubmit={handleUpdateCart}
                                colors={props.data?.data[0]?.color}
                            />
                        </div> */}
                        <div className={`${style.bottom} col-xl-11 row`}>
                            {/* <div className={`${style.image} col-xl-5`} 
                            style={{ backgroundImage: `url(${props.data?.data[0]?.image.banner})` }} 
                            alt="abc"></div> */}
                            <div className={`${style.image} col-xl-5`}>
                                <Carousel afterChange={onChange} >
                                    {/* <div>
                                    <h3 style={contentStyle}>1</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div> */}
                                    {props.data?.data[0]?.image?.gallery?.map(item => { return <img src={item}></img> })}
                                </Carousel>
                            </div>
                            <div className={`${style.content} col-xl-5`}>
                                <div className={`${style.content_name}`}>
                                    {props.data?.data[0]?.name}
                                </div>
                                <div className={`${style.informationCar}`}>
                                    <div className={`${style.document} col-xl-5`}>Mã mặt hàng: </div>
                                    <div className={`${style.numberCar} col-xl-5`}>{props.data?.data[0]?.code}</div>
                                </div>
                                <div className={`${style.informationCar}`}>
                                    <div className={`${style.document} col-xl-5`}>Thông số: </div>
                                    <div className={`${style.numberCar} col-xl-5`}>{props.data?.data[0]?.specification?.height} cm, {props.data?.data[0]?.specification.weight} kg</div>
                                </div>
                                <div className={`${style.informationCar}`}>
                                    <div className={`${style.document} col-xl-5`}>Giá tiền: </div>
                                    <div className={`${style.numberCar} col-xl-5`}>{money(props.data?.data[0]?.price, "VND")}</div>
                                </div>
                                {/* <div className={`${style.document} col-xl-3`}>Thông số: {props.data?.data[0]?.specification?.height} cm, {props.data?.data[0]?.specification.weight} kg</div>
                                <div className={`${style.content_price} ${style.document} col-xl-3`}>
                                    Giá tiền: {money(props.data?.data[0]?.price, "VND")} */}
                                    <div className={`${style.FromUpdateCart}`}>
                                        <FormUpdateCart
                                            onSubmit={handleUpdateCart}
                                            colors={props.data?.data[0]?.color}
                                        />
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Spin>
        </Layout >
    );
}

const mapStateToProps = state => ({
    data: state.accessoryDetailPage
})

const mapDispatchToProps = dispatch => ({
    getDetailAccessory: (params) => {
        dispatch(getDetailAccessory(params))
    },
    updateCart: (data) => {
        dispatch(updateCart(data))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AccessoryDetail)