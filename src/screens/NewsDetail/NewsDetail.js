import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, Spin } from "antd";
import Layouts from "../../components/layout";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import dateFormat from "dateformat";
import { connect } from "react-redux";
import { getListPost } from "./action";

// const { Content } = Layout;

function NewsDetail(props) {
  useEffect(() => {
    props.getListPost(props.match.params.id);
  }, []);
  const splitLine = (htmlString) => {
    const lines = htmlString?.split(/\r?\n/);
    let html=""
    for(var i=0;i<lines?.length;i++){
        html+='<p>'+lines[i]+'</p>';
    }
    console.log(htmlString);
    return html;
}
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
              dangerouslySetInnerHTML={{ __html: splitLine(props.data?.data[0]?.content) }}
            ></div>
          </div>
          <p className={`${style.news_author}`}>Tác giả: {
            
            props.data?.data[0]?.author?.name
            }</p>
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
