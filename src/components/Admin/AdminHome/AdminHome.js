import React, { Fragment, useEffect } from 'react'
import { Statistic, Row, Col, Button, Card } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import style from './AdminHome.module.css'
import Layout from '../LayoutAdmin/LayoutAdmin'
import { getData } from './action'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

function AdminHome(props) {
    const history = useHistory()
    useEffect(() => {
        props.getData()
    }, [])
    return (
        <div>
            <Layout>
                <h2 style={{ textAlign: "center" }}>Tổng quan</h2>
                <div className={`${style.AdminHome} site-statistic-demo-card`}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="Số lượng người dùng"
                                    value={props?.adminData?.user?.length}
                                    prefix={<LikeOutlined />}
                                />
                                <Statistic
                                    title="Số lượng người dùng hoạt động"
                                    value={props?.adminData?.user?.filter(item => {
                                        return item.active === true
                                    }).length}
                                    prefix={<LikeOutlined />}
                                />
                                <Statistic
                                    title="Số lượng người dùng không hoạt động"
                                    value={props?.adminData?.user?.filter(item => {
                                        return item.active === false
                                    }).length}
                                    prefix={<LikeOutlined />}
                                />
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