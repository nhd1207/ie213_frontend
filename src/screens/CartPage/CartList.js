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
        console.log('Use efect for prop.data')
        const cart3 = Object.assign([],  props.data)
        const cart4 = cart3.map(item=>{
            return{
                itemId: item.itemId,
                quantity: item.quantity,
                quantityTemp: item.quantity,
                color: item.color,
            }
        })
        setCart([...cart4])
        setCart2([...cart4])
        //handleTotalPrice();
    }, [props.data]);

    useEffect(() => {
        console.log('Use efect for cart')
        handleTotalPrice();
    }, [cart]);

    const handleTotalPrice = () => {
        let total = 0
        cart?.forEach(item => {
            total += item.quantity * item?.itemId?.price
        });
        setTotalPrice(total);
        props.totalPrice(total)
    }

    const handleAmount = (value, id) => {
        setUpdate(false)
        const cart3 = [...cart2]
        cart3[id].quantity = value;
        setCart2([...cart3]);
        console.log("cart amount:", cart)
        console.log("cart 2 amount:", cart2)
    }


    const handleUpdateCart = () => {
        let cart3;
        cart3 = cart2.filter(item => { return !item.disabled }).map(item => {
            return {
                itemId: item.itemId._id,
                quantity: item.quantity,
                color: item.color,
            }
        })
        props.newCart({ cart: cart3 });
        props.totalPrice(totalPrice);
        setUpdate(true)
    }

    const handleCancelUpdateCart = () => {
        let cart3;
        setUpdate(true)
        cart3 = [...cart2]
        let cart4 = cart3.map(item=>{
             return {
                itemId:item.itemId,
                quantity:item.quantityTemp,
                color:item.color,
                quantityTemp:item.quantityTemp,

             }
        })
        console.log('cart4',cart4)
        setCart([...cart4])
        setCart2([...cart4])
    }

    const handleDeleteCartItem = (index) => {
        let cart3;
        setUpdate(false)
        cart3 = [...cart]
        cart3[index].disabled = true
        setCart([...cart3]);
        setCart2([...cart3]);
        console.log("cart 2 state:", cart2)
    }

    return (
        <div>
            <Spin spinning={props.spinning}>
                {/* {console.log('cart render', cart)} */}
                {cart?.map((item, index) => {
                    let myStyle = {
                        backgroundImage: `url(${item?.itemId?.image?.avatar})`
                    }
                    //total += item.quantity * item?.itemId?.price;

                    return (
                        <div style={item.disabled ? { pointerEvents: "none", opacity: "0.4" } : {}} className={`${style.product} row`}>
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
                                        defaultValue={item?.quantityTemp}
                                        value ={item?.quantity}
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
                                    onClick={() => handleDeleteCartItem(index)
                                        //props.deleteItemChild
                                    }
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
                <button disabled={update} onClick={handleCancelUpdateCart}>Hủy</button>
            </Spin>
        </div>
    );
}

export default CartList;
