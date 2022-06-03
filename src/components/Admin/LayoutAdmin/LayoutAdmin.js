import { React, useState} from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHome, faCar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {
    TeamOutlined,
    ShoppingCartOutlined,
    LogoutOutlined,
    UnorderedListOutlined,
    RollbackOutlined,
    ProjectOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";
// import NavBarAdmin from './NavBavAdmin';

const { Content, Sider } = Layout;

export default function LayoutAdmin(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint={"lg"}
                // collapsedWidth={0}
                // trigger={null}
                collapsible collapsed={collapsed} 
                onCollapse={(value) => setCollapsed(value)}

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
                    <Menu.Item key="7" icon={<ProjectOutlined />}>
                        <Link to={`/admin/showroom`} > Showroom </Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<TeamOutlined />}>
                        <Link to={`/admin/user`} > Người dùng </Link>
                    </Menu.Item>
                    <Menu.Item key="9" icon={<LogoutOutlined />}>
                        <Link to={`/login`} > Đăng xuất </Link>
                    </Menu.Item>
                    <Menu.Item key="10" icon={<RollbackOutlined />}>
                        <Link to={`/home`} > Quay lại </Link>
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




