import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { List } from "antd";
import style from "./index.module.css";
import dateFormat from "dateformat";
import { connect } from "react-redux";
import { getListPost } from "./action";
import Layout from "../../components/layout";
import { useHistory } from "react-router-dom";

function NewsPage(props) {
  useEffect(() => {
    props.getListPost();
  }, []);
  const history = useHistory();
  return (
    <Layout>
      <div>
        {/* <div className={`${style.news} `}>
                    <div className={`${style.news_header} `}>TIN TỨC</div>
                    <div className={`${style.news_name} `}>THẾ GIỚI <br></br> SEVEN</div>
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
                                                <div className={`${style.news_content} `} dangerouslySetInnerHTML={{__html: post?.content}}/>
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
                </div> */}
        <div className={`${style.news} row`}>
          <div className={`${style["news-header"]} col-xl-12`}>TIN TỨC</div>
          <div className={`${style["news-name"]} col-xl-12`}>
            THẾ GIỚI SEVEN
          </div>
          <List
            className={`${style.newsList}`}
            itemLayout="horizontal"
            dataSource={props.news.posts?.post || []}
            pagination={{
              onChange: (page) => {
              },
              pageSize: 3,
              className: `${style.pagination} col-xl-12`,
            }}
            renderItem={(item) => (
              <List.Item className={`${style.listItem} row`}>
                <div className={`${style.avatar} col-xl-5 col-sm-12 col-12`}>
                  <img
                    className={`${style["news-image"]}`}
                    src={item.image.avatar}
                    alt="news img"
                  />
                </div>
                <div
                  className={`${style.content} col-xl-7 col-sm-12 col-12 row`}
                >
                  <div className={`${style["news-title"]} col-xl-12`}>
                    {item.title}
                  </div>
                  <div className={`${style.newsSpec} col-xl-12`}>
                    <div className={style["news-description"]}>
                      {dateFormat(item.createdAt, "mmmm dS, yyyy")}

                      <div
                        className={`${style.news_content} `}
                        dangerouslySetInnerHTML={{ __html: item?.content }}
                      />
                      <button
                        onClick={() => {
                          history.push(`news/${item._id}`);
                        }}
                        className={`${style.newsBtn} btn btn-outline-dark col-xl-3`}
                      >
                        ĐỌC THÊM
                      </button>
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  // posts: state.post
  news: state.news,
});

const mapDispatchToProps = (dispatch) => ({
  getListPost: (params) => {
    dispatch(getListPost(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
