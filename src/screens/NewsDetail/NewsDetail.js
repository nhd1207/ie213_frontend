import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Menu, Breadcrumb, Spin } from 'antd';
import Layouts from '../../components/layout'
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { connect } from "react-redux";
import { getListPost } from './action';
import queryString from 'query-string'

const { Content } = Layout;

function NewsDetail(props) {
    useEffect(() => {
        props.getListPost(props.match.params.id)
        console.log(props)
    }, [])

    return (
        <Layouts>
            <Spin size="large" spinning={props.data.loading}>
                {/* <Layout
                dataSource={props?.data?.data[0]}
                renderItem={(post) => (
                    <Content> */}
                {/* className={style["site-layout"]} */}
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className={style["site-layout-background"]}>  
                    <img className={style['news-image']} src={props?.data?.data[0]?.image?.avatar} alt="abc" />

                    <div className={style['news-title']}>{props?.data?.data[0]?.title}</div>

                    <div className={style['news-items']}>
                        <div className={style['news-date']}>{dateFormat(props.data?.data[0]?.createdAt, "mmmm dS, yyyy")}</div>
                        <p className={style['news-content']}>{props.data?.data[0]?.content}</p>
                    </div>

                </div>
                {/* </Content>
                )}>
            </Layout> */}
            </Spin>
        </Layouts>
    )
}


const mapStateToProps = state => ({
    data: state.newDetail
})

const mapDispatchToProps = dispatch => ({
    getListPost: (params) => {
        dispatch(getListPost(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)
