import React, { Fragment, useEffect } from 'react'
import { Statistic, Row, Col, Button, Card } from 'antd';
import { CarOutlined, DingtalkOutlined, WalletOutlined, EditOutlined, ExclamationCircleOutlined, CheckCircleOutlined, CloseSquareFilled, CheckSquareFilled, LikeOutlined } from '@ant-design/icons';
import style from './AdminHome.module.css'
import Layout from '../LayoutAdmin/LayoutAdmin'
import { getData } from './action'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { PureComponent } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, Text, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function AdminHome(props) {
    const history = useHistory()
    useEffect(() => {
        props.getData()
    }, [])
    const dataUser = [
        {
            name: 'Group A', value: props?.adminData?.user?.filter(item => {
                return item.active === true
            }).length,
        },
        {
            name: 'Group B', value: props?.adminData?.user?.filter(item => {
                return item.active === false
            }).length
        },
    ];
    const dataCarOrder = [
        {
            name: 'Group A', value: props?.adminData?.carOrder.filter(item => {
                return item.status === 'Pending'
            }).length,
        },
        {
            name: 'Group B', value: props?.adminData?.carOrder.filter(item => {
                return item.status === 'Accepted'
            }).length,
        },
        {
            name: 'Group C', value: props?.adminData?.carOrder.filter(item => {
                return item.status === 'Success'
            }).length,
        },
        {
            name: 'Group D', value: props?.adminData?.carOrder.filter(item => {
                return item.status === 'Cancelled'
            }).length,
        },

    ]
    // const reduce1 = props.carOrder.reduce((sum, element) => {

    // }, 0)
    const formatXAxis = (tickItem) => {

        const d = new Date(tickItem);
        return d.toLocaleString('default', { month: 'long' });
    };
    const COLORSUSER = ['#008000', '#FF0000'];
    const COLORCARORDER = ['#f0a500', '#008000', '#0000FF', '#FF0000']
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        console.log('1221');
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div>
            <Layout>
                <h2 style={{ textAlign: "center" }}>Tổng quan</h2>
                <div className={`${style.AdminHome} site-statistic-demo-card`}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} xl={12} lg={12} sm={24} md={24}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="Số lượng người dùng"
                                            value={props?.adminData?.user?.length}

                                            prefix={<LikeOutlined className={`${style.userIcon} ${style.iconPrefix}`} />}
                                        />
                                        <Statistic
                                            title="Số lượng người dùng hoạt động"
                                            value={props?.adminData?.user?.filter(item => {
                                                return item.active === true
                                            }).length}

                                            prefix={<CheckSquareFilled className={`${style.ActiveUserIcon} ${style.iconPrefix}`} />}
                                            style={{ color: "008000" }}
                                            className="activeUser"
                                        />
                                        <Statistic
                                            title="Số lượng người dùng không hoạt động"
                                            value={props?.adminData?.user?.filter(item => {
                                                return item.active === false
                                            }).length}
                                            style={{ color: "FF0000" }}
                                            className="inactiveUser"
                                            prefix={<CloseSquareFilled className={`${style.inactiveUserIcon} ${style.iconPrefix}`} />}
                                        />
                                    </Col>
                                    <Col span={12}>
                                    <div className={`${style.pieChart1}`}>
                                            <ResponsiveContainer width="100%" height="100%">
                                            <PieChart >
                                                <Pie
                                                    data={dataUser}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={renderCustomizedLabel}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {dataUser.map((entry, index) => (
                                                        <Cell label={renderCustomizedLabel} key={`cell-${index}`} fill={COLORSUSER[index % COLORSUSER.length]} />
                                                    ))}
                                                </Pie>
                                                <Label></Label>
                                            </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="Số đơn đặt mua phụ kiện"
                                            value={props?.adminData?.accessoryBill?.length}
                                            prefix={<WalletOutlined className={`${style.accessoryBillIcon} ${style.iconPrefix}`} />}
                                        />
                                        <Button
                                            onClick={() => history.push('/admin/accessory-bill')}
                                            type="primary"
                                        >
                                            Xem thêm
                                        </Button>
                                        <Statistic
                                            title="Số lượng bài viết"
                                            value={props?.postAdmin?.data?.post?.length}
                                            prefix={<EditOutlined className={`${style.postIcon} ${style.iconPrefix}`} />}
                                        />
                                        <Button
                                            onClick={() => history.push('/admin/post')}
                                            type="primary"
                                        >
                                            Xem thêm
                                        </Button>
                                    </Col>
                                    <Col span={12}>
                                        <Statistic
                                            title="Số xe hiện có"
                                            value={props?.adminData?.accessoryBill?.length}
                                            prefix={<CarOutlined className={`${style.accessoryBillIcon} ${style.iconPrefix}`} />}
                                        />
                                         <Button
                                            onClick={() => history.push('/admin/car')}
                                            type="primary"
                                        >
                                            Xem thêm
                                        </Button>
                                        <Statistic
                                            title="Số phụ kiện hiện có"
                                            value={props?.adminData?.accessoryBill?.length}
                                            prefix={<DingtalkOutlined className={`${style.postIcon} ${style.iconPrefix}`} />}
                                        />
                                        <Button
                                            onClick={() => history.push('/admin/accessory')}
                                            type="primary"
                                        >
                                            Xem thêm
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>

                        </Col>
                        <Col xs={24} xl={12} lg={12} sm={24} md={24}>
                            <Card>
                                <Row gutter={16} >
                                    <Col span={12}>
                                        <Statistic
                                            title="Tổng số đơn đặt cọc xe"
                                            value={props?.adminData?.carOrder?.length}
                                        />
                                        <Button
                                            onClick={() => history.push('/admin/car-order')}
                                            type="primary"
                                        >
                                            Xem thêm
                                        </Button>
                                        <Statistic
                                            title="Số đơn đặt cọc chờ đợi"
                                            prefix={<ExclamationCircleOutlined className={`${style.pendingOrder} ${style.iconPrefix}`} />}
                                            value={props?.adminData?.carOrder?.filter(item => {
                                                return item.status === 'Pending'
                                            }).length}
                                        />
                                        <Statistic
                                            title="Số đơn được chấp nhận"
                                            prefix={<CheckCircleOutlined className={`${style.acceptedOrder} ${style.iconPrefix}`} />}
                                            value={props?.adminData?.carOrder?.filter(item => {
                                                return item.status === 'Accepted'
                                            }).length}

                                        />
                                        <Statistic
                                            title="Số đơn đã thành công"
                                            prefix={<CheckSquareFilled className={`${style.ActiveUserIcon} ${style.iconPrefix}`} />}
                                            value={props?.adminData?.carOrder?.filter(item => {
                                                return item.status === 'Success'
                                            }).length}
                                        />
                                        <Statistic
                                            title="Số đơn đã hủy"
                                            prefix={<CloseSquareFilled className={`${style.inactiveUserIcon} ${style.iconPrefix}`} />}
                                            value={props?.adminData?.carOrder?.filter(item => {
                                                return item.status === 'Cancelled'
                                            }).length}
                                        />
                                        {/* <Statistic
                                    title="Số đơn đặt phụ kiện"
                                    value={props?.adminData?.accessoryBill?.length}
                                />
                                <Button
                                    onClick={() => history.push('admin/accessory')}
                                    type="primary"
                                    >
                                        Xem thêm
                                    </Button> */}
                                    </Col>
                                    <Col span={12}>
                                        <div className={`${style.pieChart}`}>
                                            <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={dataCarOrder}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={renderCustomizedLabel}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {dataCarOrder.map((entry, index) => (
                                                        <Cell label={renderCustomizedLabel} key={`cell-${index}`} fill={COLORCARORDER[index % COLORCARORDER.length]} />
                                                    ))}
                                                </Pie>
                                                <Label></Label>
                                            </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                    </Row>
                    <Row gutter={12}>
                        <Col xs={24} xl={12} lg={24} sm={24} md={24}>
                        <div className={`${style.lineChartContainer}`}>
                        <h3>Số lượng đơn phụ kiện theo tháng</h3>
                        <div className={`${style.lineChartCon}`}>
                        <ResponsiveContainer width="100%" height="100%">
                        <LineChart className={`${style.lineChart}`} data={props?.adminData?.orderCount || []}
                            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                            <XAxis tickFormatter={formatXAxis} dataKey="_id" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend></Legend>
                            <Line type="monotone" interval={10} dataKey="total_order" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                        </Col>
                        <Col xs={24} xl={12} lg={24} sm={24} md={24}>
                        <div className={`${style.lineChartContainer}`}>
                        <h3>Số lượng đơn đặt cọc theo tháng</h3>
                        <div className={`${style.lineChartCon}`}>
                        <ResponsiveContainer width="100%" height="100%">
                        <LineChart className={`${style.lineChart}`} data={props?.adminData?.orderCount || []}
                            margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                            <XAxis tickFormatter={formatXAxis} dataKey="_id" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend></Legend>
                            <Line type="monotone" interval={10} dataKey="total_order" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                        </Col>
                    </Row>
                   
                    
                </div>
            </Layout>
        </div>
    )
}
const mapStateToProps = (state) => ({
    adminData: state.adminData,
    postAdmin: state.postAdmin
})

const mapDispatchToProps = dispatch => ({
    getData: (params) => {
        dispatch(getData(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
//export default AdminHome