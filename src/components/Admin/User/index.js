import React, { Component } from 'react';
import { Button, Spin, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../../Admin2/LayoutAdmin/LayoutAdmin'
import DataTable from './components/DataTable'
import FormFilter from './components/FormFilter'
import { getList, updateUser, deleteUser } from './action'
import FormUpdateUser from "./components/FormUpdateUser"
import queryString from 'query-string'
let user = [{
    "_id": "6237e16646a3fb6ad90464e2",
    "name": "lcd",
    "email": "lcd8@gmail.com",
    "photo": "default.png",
    "role": "admin",
    "active": true,
    "info": {
        "dateOfBirth": "1989-12-31T17:00:00.000Z",
        "phoneNumber": "000000"
    }
}]

class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            initial_filter_values: query_params,
            showForm: false,
            idUser: 0
        }
    }

    componentDidMount = () => {
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    handleSubmitFilter = ({ ...values }) => {
        let params = {
            ...values,
            status: 1
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }

    deleteUser = (value) => {
        this.props.deleteUser(value)
    }

    render() {
        const { user, showForm } = this.props
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Users</span>
                    </div>
                    <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    />
                    <DataTable
                        dataSource={user ||
                            // users.data || 
                            []}
                        loading='true'
                        //{users.loading}
                        // updateUser={this.openModal}
                        deleteUser={this.deleteUser}
                    />
                    {/* <Modal
                        title="Cập nhật người dùng"
                        visible={showForm}
                        closable={false}
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
                        />
                    </Modal> */}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
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
