import { Result, Button } from 'antd';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'

import Layout from "../../layouts/index"

class Error404 extends Component {
    render() {
        return (
            <Layout>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" ><Navigate to={`/home`} > Back Home</Navigate></Button>}
                />
            </Layout>
        );
    }
}

export default Error404;
