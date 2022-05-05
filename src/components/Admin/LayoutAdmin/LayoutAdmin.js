import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faMapMarkedAlt, faFile, faHome,faCar } from '@fortawesome/free-solid-svg-icons';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    LogoutOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;


export default function LayoutAdmin(props) {

    const [state, setState] = useState({
        collapsed: false,
    })

    const onCollapse = collapsed => {
        console.log(collapsed);
        setState({ collapsed });
    };

    return (
        // <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider 
            //collapsible 
            //collapsed={state.collapsed} 
            //onCollapse={()=>onCollapse}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1" icon={<FontAwesomeIcon icon={faHome} />}>
                        <Link to={`/home`} > Trang chủ </Link>
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
                    <Menu.Item key="6" icon={<TeamOutlined /> }>
                        <Link to={`/admin/user`} > Người dùng </Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<LogoutOutlined />}>
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
        // </BrowserRouter>
    );
}




