import React, { Fragment } from 'react'
import { Statistic, Row, Col, Button, Card } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import style from './AdminHome.module.css'
import Layout from '../LayoutAdmin/LayoutAdmin'

export default function AdminHome() {
    return (
        <div>
            <Layout>
                    <h2 style={{textAlign:"center"}}>Tổng quan</h2>
                <div className={`${style.AdminHome} site-statistic-demo-card`}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card>
                                <Statistic title="Số lượng người dùng" value={112893} />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Statistic title="Số đơn hàng" value={112893} precision={2} />
                                <Button style={{ marginTop: 16 }} type="primary">
                                    Xem thêm
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Unmerged" value={93} suffix="/ 100" />
                        </Col>
                    </Row>
                </div>
            </Layout>
        </div>
    )
}
