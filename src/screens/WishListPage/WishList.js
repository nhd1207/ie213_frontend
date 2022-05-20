import React, { useEffect, useState } from "react";
import style from "./WishList.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../../components/layout'
import { Button, Spin } from "antd";
import { connect } from "react-redux";
import { getWishList, deleteWishList } from "./action"
import List from "../../components/WishList/List";
import {
    HeartFilled,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router-dom";

function WishList(props) {

    useEffect(() => {
        props.getWishList();
      }, []);

      const handleDeleteItem = (value) => {
          props.deleteWishList(value)
      }

    return (
        <Layout>
        {props?.isLoggedIn?.isLoggedIn === false ? <Redirect to="/login"></Redirect> : 
            <div className={`${style.wishListContainer}`}>
                <div className={`${style.imgWrapper}`}></div>
                <div className={`${style.main}`}>
                    <div className={`${style.headingWrapper} row`}>
                        <h1 className={`${style.heading} col`}>SẢN PHẨM YÊU THÍCH</h1>
                        <List 
                        spinning={props.loading} 
                        data={props.wishList}
                        deleteItem={handleDeleteItem}
                        ></List>
                    </div>
                </div>
            </div>
        }
        </Layout>
    );
}

const mapStateToProps = state => ({
    wishList: state.wishList?.wishList,
    loading: state.wishList.loading,
    isLoggedIn: state.isLoggedIn
  })
  
  const mapDispatchToProps = dispatch => ({
    getWishList: (params) => {
      dispatch(getWishList(params))
    },
    deleteWishList: (params) => {
        dispatch(deleteWishList(params))
    }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(WishList)