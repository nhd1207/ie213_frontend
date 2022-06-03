import React, { Component } from 'react';
import {  Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../LayoutAdmin/LayoutAdmin'
import DataTable from './components/DataTable'
// import FormFilter from './components/FormFilter'
import { getList, updateUser, deleteUser } from './action'
import FormUpdateUser from "./components/FormUpdateUser"
import queryString from 'query-string'

class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            initial_filter_values: query_params,
            showForm: false,
            idUser: 0,
            initUser:{}
        }
    }

    componentDidMount = () => {
        //this.handleSubmitFilter(this.state.initial_filter_values)
        this.props.getList()
    }

    handleSubmitFilter = ({ ...values }) => {
        let params = {
            ...values,
            status: 1
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }

    // //update Acc
    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleUpdateUser = (value) => {
        let id = this.state.idUser;
        this.setState({ showForm: false })
        let params = value
        this.props.updateUser(id, params)
    }

    deleteUser = (value) => {
        this.props.deleteUser(value)
    }

    openModal = (values) => {
        this.handleShowForm(true);
        this.state.idUser = values._id;
        this.state.initUser = values;
    }

    render() {
        const { user, showForm } = this.props
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Users</span>
                    </div>
                    {/* <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    /> */}
                    <DataTable
                        dataSource={
                            user?.data ||
                            []}
                        loading={user.loading}
                        updateUser={this.openModal}
                        deleteUser={this.deleteUser}
                    />
                    <Modal
                        title="Cập nhật người dùng"
                        visible={this.state.showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        footer={null}
                    >
                        <FormUpdateUser
                            destroyOnClose={true}
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowForm(false)}
                            onSubmit={this.handleUpdateUser}
                            handleShowForm={this.handleShowForm}
                            initialValues={this.state.initUser}
                        />
                    </Modal>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.userAdmin
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateUser: (id, params) => {
        dispatch(updateUser(id, params))
    },
    deleteUser: (id) => {
        dispatch(deleteUser(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
