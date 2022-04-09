import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faMapMarkedAlt, faFile, faHome } from '@fortawesome/free-solid-svg-icons';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import CarTable from '../CarTable/CarTable';
import AccessoryTable from '../AccessoryTable/AccessoryTable';

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
                    <Menu.Item key="2" icon={<TeamOutlined />}>
                        <Link to={`/admin/car-order`} > Đơn đặt cọc</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FontAwesomeIcon icon={faFile} />}>
                        <Link to={`/admin/accessory-bill`} > Đơn đặt hàng phụ kiện </Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FontAwesomeIcon icon={faMapMarkedAlt} />}>
                        <Link to={`/admin/car`} > Xe </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FontAwesomeIcon icon={faCity} />}>
                        <Link to={`/admin/accessory`} > Phụ kiện </Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<FontAwesomeIcon icon={faCity} />}>
                        <Link to={`/admin/user`} > Người dùng </Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<FontAwesomeIcon icon={faCity} />}>
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




