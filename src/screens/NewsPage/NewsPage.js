
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { List, Spin } from 'antd';
import style from "./index.module.css";
import dateFormat from 'dateformat';
import { connect } from "react-redux";
import { getListPost } from './action'
function NewsPage(props) {
    useEffect(() => {
        props.getListPost()
    }, [])
    return (
        <div>

                <div className={style.news}>

                    <div className={style['news-header']}>TIN TỨC</div>
                    <div className={style['news-name']}>THẾ GIỚI <br></br> SEVEN</div>
            <Spin spinning={props.posts.loading}>
                    <List
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }} itemLayout="horizontal"
                        dataSource={props.posts.posts?.post || []}
                        renderItem={(post) => (
                            <List.Item>
                                <List.Item.Meta className={style['news-wrapper']}
                                    avatar={<img className={style['news-image']} src={require(`../../Images/andre-tan-79.jpg`)} />}
                                    title={<div className={style['news-title']}>{post.title}</div>}
                                    description={
                                        <div className={style['news-items']}>
                                            <div className={style['news-date']}>{dateFormat(post.createdAt, "mmmm dS, yyyy")}</div>
                                            <p className={style['news-content']}>{post.content}</p>
                                            <button className={style['btn-outline-dark']}>
                                                <a className={style['btn-title']} href={`news/${post._id}`}>
                                                    ĐỌC THÊM
                                                </a>
                                            </button>
                                        </div>
                                    }
                                />
                            </List.Item>
                        )}>
                    </List>
            </Spin>
                </div>
        </div>
    )
}

const mapStateToProps = state => ({
    // posts: state.post
    posts: state.post
})

const mapDispatchToProps = dispatch => ({
    getListPost: (params) => {
        dispatch(getListPost(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
