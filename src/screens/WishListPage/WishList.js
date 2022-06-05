import React, { useEffect, useState } from "react";
import style from "./WishList.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../../components/layout'
import { Spin } from "antd";
import { connect } from "react-redux";
import { getWishList, deleteWishList } from "./action"
import List from "../../components/WishList/List";

import { verify } from "../LoginPage/action"
function WishList(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.verify();
        props.getWishList();
    }, []);

    useEffect(() => {
        if (props.loading === false && props.loading2 === false)
            setLoading(false);
        else
            setLoading(true);
    }, [props.loading, props.loading2]);

    const handleDeleteItem = (value) => {
        props.deleteWishList(value)
    }

    return (
        <Layout>
            <Spin size="large" spinning={loading}>
            {/* {loading ? <></> : */}{
                (
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
            )
}       </Spin>
        </Layout>
    );
}

const mapStateToProps = state => ({
    wishList: state.wishList?.wishList,
    loading: state.wishList.loading,
    isLoggedIn: state.isLoggedIn,
    loading2: state.login.loading
})

const mapDispatchToProps = dispatch => ({
    getWishList: (params) => {
        dispatch(getWishList(params))
    },
    deleteWishList: (params) => {
        dispatch(deleteWishList(params))
    },
    verify: (params) => {
        dispatch(verify(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WishList)