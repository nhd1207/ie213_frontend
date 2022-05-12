import React, { useEffect, useLayoutEffect, useState } from "react";
import style from "./Cart.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCart, updateCart } from "./action"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom"
import {
    TagsOutlined,
    CarOutlined,
    PlusCircleOutlined,
    MinusCircleOutlined,
    CheckCircleOutlined,
    PlusSquareOutlined,
    RightCircleOutlined,
} from "@ant-design/icons";
import money from "../../components/Share/functions/money"
import { InputNumber, Space } from "antd";
import { Button, Spin } from "antd";
import Layout from "../../components/layout"
import { Menu, Input } from "antd";
const { SubMenu } = Menu;
const { Search } = Input;

function CartList(props) {
    const [cart, setCart] = useState([]);
    const [cart2, setCart2] = useState([]);
    const [update, setUpdate] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
 
    //props.totalPrice ham
    //const [update,setUpdate]=  useState(false);

    useEffect(() => {
        setCart(props.data)
        setCart2(props.data)
        //handleTotalPrice();
    }, [props.data]);

    useEffect(() => {
        console.log('cart hh',cart);
        handleTotalPrice();
    }, [cart]);




    const handleTotalPrice = () =>{
        // setTotalPrice(value);
        let total = 0
        cart?.forEach(item => {
            total +=item.quantity * item?.itemId?.price
        });
        // console.log(total);
        // console.log('cart: ', cart);
        setTotalPrice(total);
        // console.log('setTotalPrice(value)',totalPrice)
        props.totalPrice(total)

    }

    const handleAmount = (value, id) => {
        setUpdate(false)
        //set value for cart2
        let cart3;
        cart3 = [...cart2]
        cart3[id].quantity = value;
        setCart2(cart3);
    }

    
    const handleUpdateCart = () => {
        let cart3;
        cart3 = cart2.map(item=>{return {
            itemId:item.itemId._id,
            quantity:item.quantity,
            color:item.color,
        }
        })
        props.newCart({cart:cart3});
        props.totalPrice(totalPrice);
        setUpdate(true)
    }

    return (
        <div>
            <Spin spinning={props.spinning}>
                {console.log('cart render', cart)}
                {cart?.map((item, index) => {
                    let myStyle = {
                        backgroundImage: `url(${item?.itemId?.image?.avatar})`
                    }
                    //total += item.quantity * item?.itemId?.price;

                    return (
                        <div className={`${style.product} row`}>
                            <img className={`${style.productImg} col-xl-4 col-md-12`} style={myStyle} alt="abc"></img>
                            <div className={`${style.productDetail} col-xl-4 col-md-12`}>
                                <div className={`${style.productName} row`}> {item?.itemId?.name} </div>
                                <div className={`${style.productDesc} row`}>
                                    {item?.itemId?.description}
                                </div>
                            </div>
                            <div className={`${style.productQty} col-xl-2 col-md-12`}>
                                <Space>
                                    <InputNumber
                                        className={`${style.inputNumber}`}
                                        defaultValue={item?.quantity}
                                        min="1"
                                        onChange={(e) => handleAmount(e, index)}
                                        formatter={(value) =>
                                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        }
                                        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                                    />
                                </Space>
                                <Button
                                    className={`${style.removeButton}`}
                                    type="primary"
                                    danger
                                    onClick={props.deleteItemChild}
                                >
                                    Xóa
                                </Button>
                            </div>
                            <div className={`${style.productPrice} col-xl-2 col-md-12`}>
                                {money(item?.itemId?.price, "VND")}
                            </div>
                        </div>
                    )
                })}

                <button disabled={update} onClick={handleUpdateCart}>Cập nhật</button>
            </Spin>
        </div>
    );
}

export default CartList;
