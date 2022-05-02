import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';import Layout from "../../components/layout"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { Spin } from 'antd';
import { getUser } from "./action";

function User(props) {

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Option 3', '3', <ContainerOutlined />)
    ];
    return (
        <Layout>
            <Spin size='large' spinning={props.loading}>
                <div
                >
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['Option 1']}
                        mode="vertical"
                        theme="light"
                    />
                    {/* <Menu.Item title="Option 1" key={1} icon={<PieChartOutlined />}/>
                    <Menu.Item title="Option 2" key={2} icon={<DesktopOutlined />}/>
                    <Menu.Item title="Option 3" key={3} icon={<ContainerOutlined />}/> */}
                </div>
            </Spin>
        </Layout>
    )

}

const mapStateToProps = state => ({
    loading: state.home.loading
})

const mapDispatchToProps = dispatch => ({
    getUser: (params) => {
        dispatch(getUser(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)