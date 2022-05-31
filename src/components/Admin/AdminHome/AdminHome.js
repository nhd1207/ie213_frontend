import React, { Fragment, useEffect } from 'react'
import { Statistic, Row, Col, Button, Card } from 'antd';
import { CloseSquareFilled, CheckSquareFilled, LikeOutlined } from '@ant-design/icons';
import style from './AdminHome.module.css'
import Layout from '../LayoutAdmin/LayoutAdmin'
import { getData } from './action'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { PureComponent } from 'react';
import { CartesianGrid, XAxis, YAxis, Bar, LabelList, Label, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function AdminHome(props) {
    const history = useHistory()
    useEffect(() => {
        props.getData()
    }, [])
    const data = [
        {
            name: 'Group A', value: props?.adminData?.user?.filter(item => {
                return item.active === true
            }).length
        },
        {
            name: 'Group B', value: props?.adminData?.user?.filter(item => {
                return item.active === false
            }).length
        },
    ];

    const reduce1 = props.carOrder.reduce((sum, element) => {
        
    }, 0)

    const COLORS = ['#008000', '#FF0000'];

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
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Statistic
                                            title="Số lượng người dùng"
                                            value={props?.adminData?.user?.length}

                                            prefix={<LikeOutlined className={`${style.userIcon}`}/>}
                                        />
                                        <Statistic
                                            title="Số lượng người dùng hoạt động"
                                            value={props?.adminData?.user?.filter(item => {
                                                return item.active === true
                                            }).length}
                                   
                                            prefix={<CheckSquareFilled className={`${style.ActiveUserIcon}`}  />}
                                            style={{color: "008000" }}
                                            className="activeUser"
                                        />
                                        <Statistic
                                            title="Số lượng người dùng không hoạt động"
                                            value={props?.adminData?.user?.filter(item => {
                                                return item.active === false
                                            }).length}
                                            style={{color: "FF0000" }}
                                            className="inactiveUser"
                                            prefix={<CloseSquareFilled className={`${style.inactiveUserIcon}`} />}
                                        />

                                    </Col>
                                    <Col span={6}>
                                        <div width="100%" height="100%">
                                            {/* <ResponsiveContainer width="100%" height="100%"> */}
                                            <PieChart width={200} height={200}>
                                                <Pie
                                                    data={data}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    label={renderCustomizedLabel}
                                                    outerRadius={80}
                                                    fill="#8884d8"
                                                    dataKey="value"
                                                >
                                                    {data.map((entry, index) => (
                                                        <Cell label={renderCustomizedLabel} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                            <Label></Label>
                                            </PieChart>
                                            {/* </ResponsiveContainer> */}
                                        </div>
                                    </Col>
                                </Row>
                            </Card>

                        </Col>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="Số đơn hàng"
                                    value={props?.adminData?.carOrder?.length}
                                />
                                <Button
                                    onClick={() => history.push('/admin/car-order')}
                                    style={{ marginTop: 16 }}
                                    type="primary"
                                >
                                    Xem thêm
                                </Button>
                            </Card>
                        </Col>

                    </Row>

                </div>
            </Layout>
        </div>
    )
}
const mapStateToProps = (state) => ({
    adminData: state.adminData
})

const mapDispatchToProps = dispatch => ({
    getData: (params) => {
        dispatch(getData(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome)
//export default AdminHome