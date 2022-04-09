import React from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../../components/Admin/LayoutAdmin/LayoutAdmin'
import { BrowserRouter } from 'react-router-dom';
import AccessoryTable from '../../components/Admin/AccessoryTable/AccessoryTable'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPlus } from '@fortawesome/free-solid-svg-icons'
//import { Route, Switch, Redirect } from 'react-router-dom';
//import queryString from 'query-string'
//import router from '../../routes'

export default function AdminPage() {
    return (
        <div>
            <BrowserRouter>
            <Layout>
            <AccessoryTable></AccessoryTable>
            </Layout>
            </BrowserRouter>
        </div>
    );
}
