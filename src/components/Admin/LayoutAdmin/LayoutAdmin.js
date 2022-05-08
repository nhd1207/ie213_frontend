import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHome,faCar,faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {
    TeamOutlined,
    ShoppingCartOutlined,
    LogoutOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;


export default function LayoutAdmin(props) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider 
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1" icon={<FontAwesomeIcon icon={faHome} />}>
                        <Link to={`/admin/home`} > Trang chủ </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                        <Link to={`/admin/car-order`} > Đơn đặt cọc</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FontAwesomeIcon icon={faFile} />}>
                        <Link to={`/admin/accessory-bill`} > Đơn đặt hàng phụ kiện </Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FontAwesomeIcon icon={faCar} />}>
                        <Link to={`/admin/car`} > Xe </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ShoppingCartOutlined />}>
                        <Link to={`/admin/accessory`} > Phụ kiện </Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<FontAwesomeIcon icon={faNewspaper} />}>
                        <Link to={`/admin/post`} > Bài viết </Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined /> }>
                        <Link to={`/admin/user`} > Người dùng </Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<LogoutOutlined />}>
                        <Link to={`/admin/logout`} > Đăng xuất </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content style={{
                width: '100%',
                minHeight: '100vh'
            }}>
                 {props.children} 
            </Content>
        </Layout>
    );
}




