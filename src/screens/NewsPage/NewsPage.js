
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { List, Spin } from 'antd';
import style from "./index.module.css";
import dateFormat from 'dateformat';
import { connect } from "react-redux";
import { getListPost } from './action';
import Layout from "../../components/layout";

function NewsPage(props) {
    useEffect(() => {
        props.getListPost();
        console.log(props);
    }, [])
    return (
        <Layout>

            <div>

                <div className={`${style.news} `}>

                    <div className={`${style.news_header} `}>TIN TỨC</div>
                    <div className={`${style.news_name} `}>THẾ GIỚI SEVEN</div>
                    <Spin spinning={props.news.loading}>
                        <List
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }} itemLayout="horizontal"
                            dataSource={props.news.posts?.post || []}
                            renderItem={(post) => (
                                <List.Item>
                                    <List.Item.Meta className={`${style.news_wapper} `}
                                        avatar={<img className={`${style.news_image} `} src={post.image?.avatar} />}
                                        title={<div className={`${style.news_title} `}>{post.title}</div>}
                                        description={
                                            <div className={`${style.news_items} `}>
                                                <div className={`${style.news_date} `}>{dateFormat(post.createdAt, "mmmm dS, yyyy")}</div>
                                                <div className={`${style.news_content} `} dangerouslySetInnerHTML={{ __html: post?.content }} />
                                                <a className={`${style.btn_title} `} href={`news/${post._id}`}>
                                                    <button className={`${style.btn_outline_dark} `}>
                                                        ĐỌC THÊM
                                                    </button>
                                                </a>
                                            </div>
                                        }
                                    />
                                </List.Item>
                            )}>
                        </List>
                    </Spin>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    // posts: state.post
    news: state.news
})

const mapDispatchToProps = dispatch => ({
    getListPost: (params) => {
        dispatch(getListPost(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
