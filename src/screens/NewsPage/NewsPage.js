
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import style from "./index.module.css";
import dateFormat from 'dateformat';
export default function NewsPage() {
    const post = [{
        "_id": "626272a32c4879b027c30d40",
        "content": "hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi",
        "title": "hung than",
        "author": {
            "_id": "625932bf56db2a9879b9581d",
            "name": "lcd"
        },
        "createdAt": "2022-04-22T09:17:23.068Z"
    },
    {
        "_id": "626272a32c4879b027c30d40",
        "content": "hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi",
        "title": "hung than",
        "author": {
            "_id": "625932bf56db2a9879b9581d",
            "name": "lcd"
        },
        "createdAt": "2022-04-22T09:17:23.068Z"
    }, {
        "_id": "626272a32c4879b027c30d40",
        "content": "hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi",
        "title": "hung than",
        "author": {
            "_id": "625932bf56db2a9879b9581d",
            "name": "lcd"
        },
        "createdAt": "2022-04-22T09:17:23.068Z"
    }, {
        "_id": "626272a32c4879b027c30d40",
        "content": "hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi hung than la mot vi than se huy diet the gioi",
        "title": "hung than",
        "author": {
            "_id": "625932bf56db2a9879b9581d",
            "name": "lcd"
        },
        "createdAt": "2022-04-22T09:17:23.068Z"
    }]
    return (
        <div>
            <div className={style.news}>
                
                <div className={style['news-header']}>TIN TỨC</div>
                <div className={style['news-name']}>THẾ GIỚI <br></br> SEVEN</div>
                <List
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }} itemLayout="horizontal"
                    dataSource={post}
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
            </div>
        </div>
    )
}
