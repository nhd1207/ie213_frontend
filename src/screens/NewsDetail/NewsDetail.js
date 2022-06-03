import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Menu, Breadcrumb, Spin } from "antd";
import Layouts from "../../components/layout";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import dateFormat from "dateformat";
import { connect } from "react-redux";
import { getListPost } from "./action";
import queryString from "query-string";

const { Content } = Layout;

function NewsDetail(props) {
  useEffect(() => {
    props.getListPost(props.match.params.id);
  }, []);
  return (
    <Layouts>
      <Spin size="large" spinning={props.data.loading}>
        {/* <Layout
                dataSource={props?.data?.data[0]}
                renderItem={(post) => (
                    <Content> */}
        {/* className={sstyle["site-layout"]} */}
        <div className={`${style.site_layout_background}`}>
          <div className={`${style.news_title}`}>
            {props?.data?.data[0]?.title}
          </div>
          <Breadcrumb className={`${style.breadcrumb}`}>
            <Breadcrumb.Item href={"/"}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href={"/news"}>List</Breadcrumb.Item>
            <Breadcrumb.Item>{props?.data?.data[0]?.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div className={`${style.news_date}`}>
            {dateFormat(props.data?.data[0]?.createdAt, "mmmm dS, yyyy")}
          </div>
          <div className={`${style.img_position}`}>
            <img
              className={`${style.news_image}`}
              src={props?.data?.data[0]?.image?.banner}
              alt="abc"
            />
          </div>
          <div className={`${style.news_items}`}>
            <div
              className={`${style.news_content}`}
              dangerouslySetInnerHTML={{ __html: props.data?.data[0]?.content }}
            ></div>
          </div>
        </div>
        {/* </Content>
                )}>
            </Layout> */}
      </Spin>
    </Layouts>
  );
}

const mapStateToProps = (state) => ({
  data: state.newDetail,
});

const mapDispatchToProps = (dispatch) => ({
  getListPost: (params) => {
    dispatch(getListPost(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
