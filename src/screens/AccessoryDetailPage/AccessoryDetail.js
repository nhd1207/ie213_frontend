import style from "./AccessoryDetail.module.css";
import { InputGroup } from "react-bootstrap";
import "antd/dist/antd.css";
import Layout from "../../components/layout"
import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import {
    Form,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, Spin } from "antd";
import money from '../../components/Share/functions/money'
import { getDetailAccessory, updateCart } from "./action";
import FormUpdateCart from "../../components/AccessoryDetail/FormUpdateCart";

function AccessoryDetail(props) {

    useEffect(() => {
        props.getDetailAccessory(props.match.params.id)
        console.log(props);
    }, []);

    const handleUpdateCart = (value) => {
        let data = {
            ...value,
            itemId: props.match.params.id
        }
        console.log(data);
        props.updateCart(data)
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
                        <img className={`${style.image} col-6`} style={{ backgroundImage: `url(${props.data?.data[0]?.image})` }}></img>
                        <div className={`${style.content} col-6`}>
                            <div className={`${style.content_name}`}>
                                {props.data?.data[0]?.name}
                            </div>
                            <div>Mã mặt hàng: {props.data?.data[0]?.code}</div>
                            <div>Thông số: {props.data?.data[0]?.specification?.height} cm, {props.data?.data[0]?.specification.weight} kg</div>
                            <div className={`${style.content_price}`}>
                                Giá tiền: {money(props.data?.data[0]?.price, "VND")}
                            </div>
                            <FormUpdateCart
                            onSubmit={handleUpdateCart}
                            colors={props.data?.data[0]?.color}
                            />
                        </div>
                    </div>
                </div>
            </Spin>
        </Layout>
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