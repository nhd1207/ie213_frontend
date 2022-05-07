import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { List, Spin } from 'antd';
import dateFormat from 'dateformat';
import { connect } from "react-redux";
import { getListPost } from './action';
import queryString from 'query-string'

const { Content } = Layout;

function NewsDetail(props) {
    useEffect(() => {
        //const query_params = queryString.parse(window.location.search);  
        //console.log('query_params',query_params)
        props.getListPost('627378546aa0922c58ed996e')
        console.log(props.posts.posts) 
    }, [])

    return (
        <Layout
            dataSource={props.posts.posts}
            renderItem={(post) => (
                <Content>
                    className={style["site-layout"]}
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className={style["site-layout-background"]}
                        avatar={<img className={style['news-image']} src={post.image?.avatar} />}

                        title={<div className={style['news-title']}>{post.title}</div>}

                        description={
                            <div className={style['news-items']}>
                                <div className={style['news-date']}>{dateFormat(post.createdAt, "mmmm dS, yyyy")}</div>
                                <p className={style['news-content']}>{post.content}</p>
                            </div>
                        }
                    >
                    </div>
                </Content>
            )}>
        </Layout>
    )
}


const mapStateToProps = state => ({
    // posts: state.post
    posts: state.newsdetail
})

const mapDispatchToProps = dispatch => ({
    getListPost: (params) => {
        dispatch(getListPost(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)
